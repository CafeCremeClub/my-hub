import {AddPaymentMethodBody} from "@/types/settings/payment/AddPaymentMethodBody";
import axiosInstance from "@/config/axiosInstance";
import {GetCurrentSubscriptionResponse} from "@/types/settings/payment/GetCurrentSubscriptionResponse";

export const getCurrentSubscription = async (): Promise<GetCurrentSubscriptionResponse> => {
    try {
        const response = await axiosInstance.get<GetCurrentSubscriptionResponse>("/subscriptions");
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const addPaymentMethod = async (payload: AddPaymentMethodBody): Promise<void> => {
    try {
        await axiosInstance.post<void>("/subscriptions/payment", payload);
    } catch (error) {
        throw error;
    }
}

export const createSubscription = async (): Promise<void> => {
    try {
        await axiosInstance.post<void>("/subscriptions/subscribe");
    } catch (error) {
        throw error;
    }
}

export const cancelSubscription = async (): Promise<void> => {
    try {
        await axiosInstance.patch("/subscriptions/cancel");
    } catch (error) {
        throw error;
    }
}