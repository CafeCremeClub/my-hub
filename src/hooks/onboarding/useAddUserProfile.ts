import { useMutation } from '@tanstack/react-query';
import { AddProfilePayload } from '@/types/onboarding/AddProfilePayload';
import { addUserProfile } from '@/service/onboardingService';

const useAddUserProfile = () => {
  return useMutation({
    mutationKey: ['add-user-profile'],
    mutationFn: async (payload: AddProfilePayload) =>
      await addUserProfile(payload),
    retry: 0,
  });
};

export default useAddUserProfile;
