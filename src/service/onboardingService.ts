import {AddUserInfoPayload} from "@/types/onboarding/AddUserInfoPayload";
import axiosInstance from "@/config/axiosInstance";


export const addUserInfo = async (payload: AddUserInfoPayload): Promise<void> => {
    try {
        await axiosInstance.patch<void>("/users/info", payload);
    } catch (error) {
        throw error;
    }
}