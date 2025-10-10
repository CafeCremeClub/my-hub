export interface AddProfilePayload {
  tjm: number;
  expertise: string;
  industry: string[];
  desiredJobs: string[];
  country: string;
  city: string;
  skills: string[];
  cv: File | null;
  linkedIn: string;
  whatsApp: string;
}
