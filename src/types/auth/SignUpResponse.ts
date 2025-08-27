import {User} from "@/types/auth/User";


export interface SignUpResponse {
    user: User;
    accessToken: string;
}