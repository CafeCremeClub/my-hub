import {UserRole} from "@/types/auth/UserRole";

export interface SignUpPayload {
    email: string;
    code: string;
    role: UserRole;
}
