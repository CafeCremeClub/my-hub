import {Industry} from "@/types/onboarding/Industry";


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
            status: string; // Todo: replace by enum
            deletedAt: string | null
        }
    }[];
}