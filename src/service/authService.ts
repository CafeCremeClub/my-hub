import { SendOTPPayload } from '@/types/auth/SendOTPPayload';
import axiosInstance from '@/config/axiosInstance';
import { SignInPayload } from '@/types/auth/SignInPayload';
import { SignInResponse } from '@/types/auth/SignInResponse';
import { SignUpPayload } from '@/types/auth/SignUpPayload';
import { SignUpResponse } from '@/types/auth/SignUpResponse';
import { Profile } from '@/types/auth/Profile';
import { UpdateProfilePayload } from '@/types/auth/UpdateProfilePayload';

export const sendOTP = async (payload: SendOTPPayload): Promise<void> => {
  try {
    await axiosInstance.post<void>('/users/otp', payload);
  } catch (error) {
    throw error;
  }
};

export const signIn = async (
  payload: SignInPayload
): Promise<SignInResponse> => {
  try {
    const response = await axiosInstance.post<SignInResponse>(
      '/users/signin',
      payload
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signUp = async (
  payload: SignUpPayload
): Promise<SignUpResponse> => {
  try {
    const response = await axiosInstance.post<SignUpResponse>(
      '/users',
      payload
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMe = async (): Promise<Profile> => {
  try {
    const response = await axiosInstance.get<Profile>('/profiles/me');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProfile = async (
  payload: UpdateProfilePayload
): Promise<void> => {
  try {
    await axiosInstance.patch('/users/update', payload);
  } catch (error) {
    throw error;
  }
};
