import {useMutation} from "@tanstack/react-query";
import {GetMissionsPayload} from "@/types/mission/GetMissionsPayload";
import {getMissions} from "@/service/missionService";

const DEFAULT_PAGE: number = 1;
export const GET_MISSIONS_DEFAULT_PER_PAGE: number = 10;

const useGetMissions = () => {

    return useMutation({
        mutationKey: ["get-missions"],
        mutationFn: async (payload?: GetMissionsPayload) => {
            const mergedPayload: GetMissionsPayload = {
                page: payload?.page ?? DEFAULT_PAGE,
                perPage: payload?.perPage ?? GET_MISSIONS_DEFAULT_PER_PAGE,
                title: payload?.title ?? undefined,
                skills: payload?.skills ?? undefined,
            };
            return getMissions(mergedPayload);
        },
        retry: 0
    })

}

export default useGetMissions;