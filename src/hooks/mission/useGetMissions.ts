import {useQuery} from "@tanstack/react-query";
import {GetMissionsPayload} from "@/types/mission/GetMissionsPayload";
import {getMissions} from "@/service/missionService";

const DEFAULT_PAGE: number = 1;
export const GET_MISSIONS_DEFAULT_PER_PAGE: number = 10;


const useGetMissions = (payload?: GetMissionsPayload) => {

    const mergedPayload: GetMissionsPayload = {
        page: payload?.page ?? DEFAULT_PAGE,
        perPage: payload?.perPage ?? GET_MISSIONS_DEFAULT_PER_PAGE,
        title: payload?.title ?? undefined,
        skills: payload?.skills ?? undefined,
    };

    return useQuery({
        queryKey: ["get-missions", mergedPayload.page, mergedPayload.perPage, mergedPayload.title, mergedPayload.skills],
        queryFn: async () => await getMissions(mergedPayload),
        retry: 0,
        refetchOnMount: false,
        refetchInterval: false
    })

}

export default useGetMissions;