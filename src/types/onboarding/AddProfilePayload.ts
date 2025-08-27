

export interface AddProfilePayload {
    tjm: number;
    expertise: string;
    linkedIn: string;
    whatsApp: string;
    industry: string[];
    desiredJobs: string[];
    cv: File | null;
}