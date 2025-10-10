import { Industry } from '@/types/onboarding/Industry';
import { MissionStatus } from '@/types/mission/MissionStatus';

export interface Mission {
  id: string;
  title: string;
  client: string;
  tjm: string;
  skills: string[];
  industry: Industry[];
  link: string;
  whatsApp: string;
  linkedIn?: string;
  companyBio: string;
  status: MissionStatus;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}
