import { useMutation } from '@tanstack/react-query';
import { UpdateProfilePayload } from '@/types/auth/UpdateProfilePayload';
import { updateProfile } from '@/service/authService';

const useUpdateProfile = () => {
  return useMutation({
    mutationKey: ['update-profile'],
    mutationFn: async (payload: UpdateProfilePayload) =>
      await updateProfile(payload),
    retry: 0,
  });
};

export default useUpdateProfile;
