import { useMutation } from '@tanstack/react-query';
import { ApplyForMissionPayload } from '@/types/mission/ApplyForMissionPayload';
import { applyForMission } from '@/service/missionService';

const useApplyForMission = () => {
  return useMutation({
    mutationKey: ['apply-for-mission'],
    mutationFn: async (payload: ApplyForMissionPayload) =>
      await applyForMission(payload),
    retry: 0,
  });
};

export default useApplyForMission;
