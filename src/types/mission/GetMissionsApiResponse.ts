import {Industry} from "@/types/onboarding/Industry";
import {MissionStatus} from "@/types/mission/MissionStatus";


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
            tjm: string;
            skills: string[],
            industry: Industry[],
            link: string;
            whatsApp: string;
            companyBio: string;
            status: MissionStatus;
            deletedAt: string | null
        }
    }[];
}