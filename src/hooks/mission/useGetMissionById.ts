import {useQuery} from "@tanstack/react-query";
import {getMissionById} from "@/service/missionService";

const useGetMissionById = (id: string) => {

    return useQuery({
        queryKey: ["get-mission-by-id", id],
        queryFn: async () => await getMissionById(id),
        retry: 0,
        enabled: !!id,
        refetchOnMount: false,
        refetchInterval: false
    })

}

export default useGetMissionById;