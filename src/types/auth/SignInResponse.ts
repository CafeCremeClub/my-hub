import {User} from "@/types/auth/User";


export interface SignInResponse {
    user: User;
    accessToken: string;
}