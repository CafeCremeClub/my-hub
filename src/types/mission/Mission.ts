import {Industry} from "@/types/onboarding/Industry";

export interface Mission {
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
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null
}