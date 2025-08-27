import {SendOTPPayload} from "@/types/auth/SendOTPPayload";
import axiosInstance from "@/config/axiosInstance";
import {SignInPayload} from "@/types/auth/SignInPayload";
import {SignInResponse} from "@/types/auth/SignInResponse";


export const sendOTP = async (payload: SendOTPPayload): Promise<void> => {
    try {
        await axiosInstance.post<void>("/users/otp", payload);
    } catch (error) {
        throw error;
    }
}

export const signIn = async (payload: SignInPayload): Promise<SignInResponse> => {
    try {
        const response = await axiosInstance.post<SignInResponse>("/users/signin", payload);
        return response.data;
    } catch (error) {
        throw error;
    }
}