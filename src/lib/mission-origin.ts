import { Mission } from '@/types/mission/Mission';
import { MissionDetails } from '@/types/mission/MissionDetails';

/**
 * Tout ce que l'interface doit savoir d'une mission incomplete, au meme endroit.
 *
 * Une partie du catalogue est reperee sur des sources publiques, et ces annonces
 * ne portent pas les memes informations qu'une mission deposee par une
 * entreprise : le TJM manque sur 28 % d'entre elles, le secteur d'activite sur
 * la totalite, et le numero de contact n'existe jamais.
 *
 * La regle, une seule, appliquee partout : **on n'invente rien, on ecrit
 * "non communique"**. Un consultant decide en trente secondes s'il postule. Un
 * tarif invente qu'il decouvre faux en entretien lui coute son temps, et nous
 * coute sa confiance definitivement. Une case vide ne trahit personne.
 */

export const NON_COMMUNIQUE = 'Non communiqué';

type MissionLike = Partial<Mission> & Partial<MissionDetails>;

/**
 * Vrai si la mission vient d'une source publique et non du reseau Cafe Creme.
 *
 * MyHub promet aux consultants des missions off-market. Les missions agregees
 * sont publiques : les melanger sans le dire viderait la promesse de son sens.
 * L'interface doit donc toujours pouvoir les distinguer.
 */
export function estAgregee(mission: MissionLike): boolean {
  return Boolean(mission?.source);
}

/** Le TJM tel qu'on l'affiche, jamais estime. */
export function tjmAffiche(mission: MissionLike): string {
  const tjm = mission?.tjm;
  if (tjm === null || tjm === undefined || tjm === '') {
    return NON_COMMUNIQUE;
  }
  const nombre = Number(tjm);
  if (Number.isNaN(nombre) || nombre <= 0) {
    return NON_COMMUNIQUE;
  }
  return `${Math.round(nombre)} €`;
}

/**
 * Comment nommer l'entreprise affichee.
 *
 * Sur une mission agregee, ce que la source expose n'est PAS le client final
 * mais l'intermediaire qui republie : CELAD, HAYS, Avanda. Ecrire "Client : X"
 * affirmerait quelque chose de faux.
 */
export function libelleEntreprise(mission: MissionLike): string {
  return estAgregee(mission) ? 'Publié par' : 'Client';
}

export function entrepriseAffichee(mission: MissionLike): string {
  return mission?.client?.trim() || NON_COMMUNIQUE;
}

export function competencesAffichees(mission: MissionLike): string[] {
  return mission?.skills?.filter(Boolean) ?? [];
}

/**
 * L'action de contact proposee.
 *
 * Sur une mission agregee il n'y a pas de numero, et y mettre celui de Cafe
 * Creme laisserait croire que la mission est la notre. On renvoie vers
 * l'annonce d'origine, qui est la seule chose vraie dont on dispose.
 */
export function actionDeContact(mission: MissionLike):
  | { type: 'annonce'; url: string }
  | { type: 'whatsapp'; numero: string }
  | { type: 'aucune' } {
  if (estAgregee(mission)) {
    const url = mission?.sourceUrl || mission?.link;
    return url ? { type: 'annonce', url } : { type: 'aucune' };
  }
  const numero = mission?.whatsApp?.trim();
  return numero ? { type: 'whatsapp', numero } : { type: 'aucune' };
}
