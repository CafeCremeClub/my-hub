import { useMutation } from '@tanstack/react-query';
import { AddUserInfoPayload } from '@/types/onboarding/AddUserInfoPayload';
import { addUserInfo } from '@/service/onboardingService';

const useAddUserInfo = () => {
  return useMutation({
    mutationKey: ['add-user-info'],
    mutationFn: async (payload: AddUserInfoPayload) =>
      await addUserInfo(payload),
    retry: 0,
  });
};

export default useAddUserInfo;
