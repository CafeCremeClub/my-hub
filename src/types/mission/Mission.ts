import { Industry } from '@/types/onboarding/Industry';
import { MissionStatus } from '@/types/mission/MissionStatus';

export interface Mission {
  id: string;
  title: string;
  client: string;
  /** Absent sur 28 % des missions agrégées : afficher « non communiqué ». */
  tjm: string | null;
  skills: string[] | null;
  industry: Industry[] | null;
  link: string;
  /** Jamais renseigné sur une mission agrégée. */
  whatsApp: string | null;
  linkedIn?: string;
  companyBio: string | null;
  status: MissionStatus;
  /** Vide = mission du réseau Café Crème. Renseigné = repérée sur une source publique. */
  source?: string | null;
  /** L'annonce d'origine, seule action possible sur une mission agrégée. */
  sourceUrl?: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}
