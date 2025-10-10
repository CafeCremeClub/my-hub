import { AddUserInfoPayload } from '@/types/onboarding/AddUserInfoPayload';
import axiosInstance from '@/config/axiosInstance';
import { AddProfilePayload } from '@/types/onboarding/AddProfilePayload';

export const addUserInfo = async (
  payload: AddUserInfoPayload
): Promise<void> => {
  try {
    await axiosInstance.patch<void>('/users/info', payload);
  } catch (error) {
    throw error;
  }
};

export const addUserProfile = async (
  payload: AddProfilePayload
): Promise<void> => {
  try {
    const formData = new FormData();

    for (const [key, value] of Object.entries(payload)) {
      if (Array.isArray(value)) {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, value);
      }
    }

    await axiosInstance.post<void>('/profiles', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    throw error;
  }
};
