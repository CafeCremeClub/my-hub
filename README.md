# MyHub

Outil interne **Café Crème** — portail web destiné aux freelances de la communauté.
Application **frontend uniquement** (Next.js) qui consomme une **API REST externe** : il n'y
a ni base de données ni serveur applicatif dans ce dépôt.

> ℹ️ Ce README a été reconstruit à partir d'une exploration directe du code. Les points non
> vérifiables dans le dépôt sont marqués **⚠️ INCERTAIN**.

---

## 1. Présentation fonctionnelle

MyHub permet à un freelance de :

1. **S'inscrire / se connecter** via un flux **sans mot de passe** (email + code OTP à 4 chiffres).
2. **Compléter un onboarding** en 3 étapes : informations personnelles, profil professionnel
   (TJM, expertise, industries, métiers visés, compétences, pays/ville, LinkedIn, WhatsApp) et
   upload du **CV** (PDF).
3. **Parcourir des missions** (liste paginée, recherche par titre/compétences) et consulter le
   détail d'une mission (client, TJM, compétences, industrie, bio entreprise, statut).
4. **Candidater à une mission** en joignant une note.
5. **Gérer son profil** et ses **paramètres**.

**Public visé** : uniquement les utilisateurs de rôle `USER`. Les rôles `ADMIN` et `COMPANY`
sont explicitement **refusés** à la connexion (voir `src/components/auth/signin/SignInForm.tsx`).

> ℹ️ **Accès par liste blanche** : le backend n'envoie un OTP qu'aux emails **whitelistés**.
> Un email non autorisé reçoit l'erreur `EmailNotAllowedForSignup` (gérée dans
> `src/utils/helpers/handleSendOTPError.ts`). L'ajout d'un email à la whitelist se fait depuis
> le **back-office** (repo `my-hub-backoffice`, page « Utilisateurs autorisés »).

> ⚠️ INCERTAIN : la gestion d'**abonnement payant (Stripe)** existe dans le code mais est
> **actuellement désactivée** (voir commit `9144687` « Disable payment features… until paid plan
> is re-enabled »). L'onglet « Paiement » et le wrapper Stripe sont commentés.

---

## 2. Stack technique

| Domaine            | Technologie                                                                 |
| ------------------ | --------------------------------------------------------------------------- |
| Framework          | **Next.js 15.4.10** (App Router, dev avec `--turbopack`)                     |
| UI                 | **React 19.1.0**                                                            |
| Langage            | **TypeScript 5** (`strict`), alias `@/*` → `./src/*`                         |
| Styling            | **Tailwind CSS v4** (`@tailwindcss/postcss`), `tw-animate-css`             |
| Composants UI      | **shadcn/ui** (style « new-york »), **Radix UI**, `lucide-react`, `react-icons` |
| Data fetching      | **TanStack React Query v5** + **Axios**                                      |
| Formulaires        | **Formik** + **Yup**                                                         |
| Notifications      | **Sonner** (toasts)                                                          |
| Paiement (désactivé) | **Stripe** (`@stripe/stripe-js`, `@stripe/react-stripe-js`)               |
| Divers             | `input-otp`, `react-phone-number-input`, `world-countries`, `next-themes`   |
| Polices            | `next/font` — Geist, Geist Mono, Bricolage Grotesque                         |

- **Base(s) de données** : aucune dans ce dépôt (frontend pur).
- **Lint** : ESLint 9 + `eslint-config-next` (`next/core-web-vitals`, `next/typescript`).
- ⚠️ INCERTAIN : aucun framework de **test** n'est installé ni configuré.

---

## 3. Architecture

### 3.1 Vue d'ensemble

```
Navigateur (React 19 / Next.js App Router)
        │
        │  Server Actions (cookies httpOnly : token + flags onboarding)
        │
        ▼
  Middleware (src/middleware.ts)  ── garde de routes / redirections
        │
        ▼
  Composants ──► Hooks (React Query) ──► Services (Axios) ──► API REST externe
                                                     │
                                                     └──► api-adresse.data.gouv.fr (autocomplétion ville)
```

### 3.2 Découpage en couches (sous `src/`)

| Dossier        | Rôle                                                                      |
| -------------- | ------------------------------------------------------------------------- |
| `app/`         | Routes (App Router). Pages, layouts, et **Server Actions** (`app/actions/`). |
| `components/`  | UI organisée par domaine : `auth/`, `dashboard/`, `custom/`, `ui/` (shadcn), `icons/`. |
| `hooks/`       | Wrappers **React Query** (`useQuery` / `useMutation`) par domaine.         |
| `service/`     | Appels **Axios** bruts vers l'API (une fonction = un endpoint).            |
| `config/`      | `axiosInstance.ts` — instance Axios + intercepteur d'authentification.     |
| `context/`     | Providers React : React Query, Onboarding, Stripe (désactivé).             |
| `types/`       | Interfaces / enums TypeScript par domaine.                                 |
| `utils/`       | Helpers (formatage de dates, listes d'options, mapping d'erreurs).         |
| `lib/utils.ts` | `cn()` (clsx + tailwind-merge), utilitaire shadcn.                         |

### 3.3 Authentification & contrôle d'accès

- **Connexion par OTP** : `POST /users/otp` (envoi du code) puis `POST /users/signin`
  (email + code) → renvoie `accessToken`, `user`, `info`, `profile`.
- Le token est stocké dans un **cookie `token` httpOnly** par la Server Action `saveCookies`
  (`secure: true`, `sameSite: 'none'`, durée 7 jours).
- `src/config/axiosInstance.ts` lit ce cookie et ajoute l'en-tête `Authorization: Bearer <token>`
  à chaque requête.
- `src/middleware.ts` orchestre les redirections selon les cookies :
  - pas de token → `/auth/signin` ;
  - `should-complete-onboarding=true` → `/auth/onboarding?step=…` (gère les étapes 1/2/3) ;
  - token + onboarding complété → `/dashboard` ;
  - `/` → redirige vers `/dashboard`.

### 3.4 Flux principaux

- **Onboarding** : état partagé via `OnboardingContext`. Étape « infos » → `PATCH /users/info` ;
  étape « profil » → `POST /profiles` en **`multipart/form-data`** (inclut le fichier CV).
- **Missions** : `POST /missions/all` (liste paginée, normalisée depuis `data[].props`),
  `GET /missions/:id` (détail), `POST /applications/apply/:missionId` (candidature).
- **Profil** : `GET /profiles/me`, `PATCH /users/update`.
- **Recherche ville** : `GET https://api-adresse.data.gouv.fr/search` (API publique data.gouv.fr).

---

## 4. Setup local

### Prérequis
- **Node.js** (compatible Next 15 / React 19 — Node 18.18+ ou 20+ recommandé).
  ⚠️ INCERTAIN : aucune version Node n'est épinglée dans le dépôt (pas de `engines` ni `.nvmrc`).
- **npm** (un `package-lock.json` est présent → projet géré avec npm).

### Variables d'environnement
Un template **`.env.example`** est versionné à la racine (sans valeur). Variables consommées par
le code (par **nom uniquement**, jamais de valeurs) :

| Variable                             | Usage                                                        |
| ------------------------------------ | ------------------------------------------------------------ |
| `NEXT_PUBLIC_BASE_URL`               | URL de base de l'API REST MyHub (`src/config/axiosInstance.ts`). **Requise.** |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Clé publique Stripe (`src/context/StripeContext.tsx`). Optionnelle, lue uniquement si le paiement est réactivé — **actuellement désactivé**. |

Pour configurer l'environnement local :

```bash
cp .env.example .env.local   # puis renseigner les valeurs
```

`.env.local` est ignoré par Git ; seul `.env.example` (sans secret) est versionné — voir le
`.gitignore` (`.env*` ignoré, `!.env.example` ré-inclus).

### Étapes

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement (Turbopack)
npm run dev
```

Ouvrir http://localhost:3000 — `/` redirige automatiquement vers `/dashboard` (puis
`/auth/signin` si non connecté).

### Scripts disponibles (vérifiés dans `package.json`)

| Script           | Commande              | Description                         |
| ---------------- | --------------------- | ----------------------------------- |
| `npm run dev`    | `next dev --turbopack`| Serveur de développement.           |
| `npm run build`  | `next build`          | Build de production.                |
| `npm run start`  | `next start`          | Sert le build de production.        |
| `npm run lint`   | `next lint`           | Lint ESLint.                        |

> ⚠️ INCERTAIN : aucun script de test (`npm test`) n'existe.

---

## 5. Déploiement

> ⚠️ INCERTAIN : **aucune configuration de déploiement ni de CI/CD n'est présente dans le dépôt.**
> Absences confirmées : pas de dossier `.github/`, pas de `vercel.json`, pas de `Dockerfile`,
> pas de `docker-compose`, pas de `.gitlab-ci.yml`, ni aucun fichier YAML.

Éléments factuels :
- Le dépôt distant est `https://github.com/CafeCremeClub/my-hub.git`.
- Le `.gitignore` contient une entrée `.vercel`, et le README original était le boilerplate
  `create-next-app` orienté Vercel — ce qui **suggère** un déploiement Vercel, mais ce n'est
  **pas confirmé** par un fichier de configuration dans le dépôt.
- Les environnements (dev / staging / prod) ne sont **pas décrits** dans le code ; ils sont
  vraisemblablement pilotés par la valeur de `NEXT_PUBLIC_BASE_URL` selon l'environnement, mais
  ce mapping n'est pas documenté ici.

➡️ **À compléter** par l'équipe avec les informations réelles de la plateforme de déploiement.

---

## 6. Dépendances externes

| Dépendance                    | Type             | Détail                                                                 |
| ----------------------------- | ---------------- | ---------------------------------------------------------------------- |
| **API REST MyHub**            | Backend          | Source de toutes les données. Base : `NEXT_PUBLIC_BASE_URL`. Endpoints : `/users`, `/users/otp`, `/users/signin`, `/users/info`, `/users/update`, `/profiles`, `/profiles/me`, `/missions/all`, `/missions/:id`, `/applications/apply/:id`, `/subscriptions*`. ⚠️ Le contrat de l'API n'est pas dans ce dépôt. |
| **API Adresse (data.gouv.fr)**| Service public   | Autocomplétion de ville — URL en dur dans `src/service/searchService.ts`. |
| **Stripe**                    | Paiement         | Intégration présente mais **désactivée**. Clé : `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`. |
| **cafe-creme.club**           | Lien externe     | Le bouton « Notre communauté » de la sidebar ouvre `https://www.cafe-creme.club/nouvelle-communaute`. |

**Fournisseur d'authentification** : pas de provider tiers (OAuth, Auth0, etc.). L'auth est gérée
par l'API MyHub via OTP email ; les jetons sont conservés en cookie httpOnly côté Next.js.
