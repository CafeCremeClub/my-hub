import { Industry } from '@/types/onboarding/Industry';
import { MissionStatus } from '@/types/mission/MissionStatus';

export interface GetMissionsApiResponse {
  page: number;
  perPage: number;
  count: number;
  data: {
    id: string;
    createdAt: string;
    updatedAt: string;
    version: number;
    props: {
      id: string;
      title: string;
      client: string;
      tjm: string | null;
      skills: string[] | null;
      industry: Industry[] | null;
      link: string;
      whatsApp: string | null;
      companyBio: string | null;
      source?: string | null;
      sourceUrl?: string | null;
      status: MissionStatus;
      deletedAt: string | null;
    };
  }[];
}
