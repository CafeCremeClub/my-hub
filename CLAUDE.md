# CLAUDE.md — contexte agent pour MyHub

## Ce qu'est MyHub
Portail web freelance interne de **Café Crème**. **Frontend seul** : Next.js 15 (App Router) +
React 19 + TypeScript, qui consomme une **API REST externe** via Axios. **Pas de base de données
ni de backend dans ce dépôt.** Architecture en couches : `service/` (Axios brut) → `hooks/`
(wrappers React Query) → `components/` (UI). Auth **sans mot de passe par OTP email** ; le token
est gardé en cookie httpOnly via Server Actions, lu par `src/middleware.ts` (gardes de routes) et
injecté en `Bearer` par l'intercepteur Axios. Voir le [README](README.md) pour le détail
fonctionnel.

## Commandes essentielles (vérifiées dans `package.json`)
- `npm run dev` — dev (Next + Turbopack)
- `npm run build` — build prod
- `npm run start` — sert le build
- `npm run lint` — ESLint (`next lint`)
- **Pas de tests** : aucun script ni framework de test dans le dépôt.

## Conventions de code observées
- **Alias** `@/*` → `src/*` (toujours utiliser les imports absolus `@/...`).
- **Une couche = une responsabilité** :
  - `service/*Service.ts` → une fonction par endpoint, `try/catch` qui **re-`throw`** l'erreur.
  - `hooks/<domaine>/use*.ts` → `useQuery`/`useMutation`, souvent `retry: 0`.
  - `components/<domaine>/...` → UI ; `components/ui/` = shadcn (ne pas réinventer).
  - `types/<domaine>/...` → une interface/enum par fichier.
- **Formulaires** : Formik + Yup ; saisies réutilisables dans `components/custom/`.
- **Notifications** : `sonner` (`toast.success` / `toast.error`), souvent `position: 'bottom-right'`.
- **Styling** : Tailwind v4 + helper `cn()` (`src/lib/utils.ts`). De nombreuses **couleurs en dur**
  (hex) dans les `className` — rester cohérent avec l'existant. Police d'accent : `bricolage-grotesque`.
- **Langue UI** : textes en **français**.
- Composants client marqués `'use client'` ; Server Actions marquées `'use server'`.

## Où vivent les choses importantes
- **Config API / auth Axios** : `src/config/axiosInstance.ts` (base `NEXT_PUBLIC_BASE_URL` + intercepteur Bearer).
- **Gardes de routes / redirections** : `src/middleware.ts` (lit cookies `token`, `should-complete-onboarding`, `should-complete-user-info`, `should-complete-profile-info`).
- **Contrôle d'accès** : (1) **liste blanche backend** — l'OTP n'est envoyé qu'aux emails whitelistés ; sinon erreur `EmailNotAllowedForSignup` (`src/utils/helpers/handleSendOTPError.ts`), whitelist gérée côté back-office. (2) **rôle** — seul `USER` (1) accède ; `ADMIN`/`COMPANY` refusés dans `SignInForm.tsx`. Les erreurs métier backend arrivent en **HTTP 500** avec `{name, message}`, discriminées via `error.response.data.name`.
- **Gestion des cookies (token)** : `src/app/actions/` (`saveCookies`, `getTokenFromCookies`, `logout`, …) — Server Actions.
- **Providers globaux** : `src/app/layout.tsx` (React Query, Onboarding ; **Stripe commenté/désactivé**).
- **Intégrations externes** :
  - API Adresse data.gouv.fr → `src/service/searchService.ts` (URL **en dur**).
  - Stripe → `src/context/StripeContext.tsx` + `service/paymentService.ts` (**désactivé**).
  - Lien communauté → `cafe-creme.club` dans `src/components/dashboard/Sidebar.tsx`.
- **Jobs / crons / notifications push** : **aucun** dans le dépôt (frontend pur).

## Garde-fous (RÈGLE PERMANENTE de ce dépôt)
- **Compréhension et documentation AVANT tout dev.** Produire de la doc réutilisable comme
  sous-produit naturel du travail.
- **Ne jamais inventer une architecture** non confirmée par le code. En cas de doute, lire le
  fichier concerné plutôt que supposer.
- **Modifications minimales et sûres** ; respecter les conventions ci-dessus.
- **Jamais de secrets/credentials réels** en clair ni en commit — variables d'env par **nom seul**.
- Marquer toute incertitude par **`⚠️ INCERTAIN : …`** plutôt que de combler par hypothèse.
- Les fichiers `.env*` sont gitignored **sauf `.env.example`** (template sans secret, versionné).
  Ne jamais committer `.env.local` ni mettre de vraie valeur dans `.env.example`.

## Variables d'environnement (noms uniquement)
- Setup local : `cp .env.example .env.local` puis renseigner les valeurs.
- `NEXT_PUBLIC_BASE_URL` — base de l'API REST MyHub. **Requise** (auth, OTP, missions, profil…).
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` — clé publique Stripe (seulement si paiement réactivé).

## Zones d'incertitude connues à lever
- ⚠️ **Déploiement / CI-CD** : aucune config dans le dépôt (`.github/`, `vercel.json`, Docker,
  YAML absents). Plateforme et environnements (dev/staging/prod) **non confirmés** — `.vercel`
  est gitignored, ce qui *suggère* Vercel sans le prouver.
- ⚠️ **Contrat d'API backend** : non présent ; seuls les types côté client existent (`src/types/`).
  Vérifier les payloads/réponses réels avant de modifier un appel.
- ⚠️ **Paiement Stripe** : code présent mais **désactivé** (commit `9144687`). Ne pas réactiver
  sans demande explicite.
- ⚠️ **Version de Node** non épinglée (`engines`/`.nvmrc` absents).
- ⚠️ **Aucun test** : pas de filet de sécurité automatisé — valider manuellement les changements.
- ⚠️ Route sidebar `/dashboard/community` : **n'existe pas** comme page interne ; ouvre un lien
  externe.
