import {Industry} from "@/types/onboarding/Industry";
import {MissionStatus} from "@/types/mission/MissionStatus";


export interface MissionDetails {
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
    applied: boolean;
    applications: number;
}