import {useQuery} from "@tanstack/react-query";
import {getCurrentSubscription} from "@/service/paymentService";

const useGetCurrentSubscription = () => {

    return useQuery({
        queryKey: ["current-subscription"],
        queryFn: getCurrentSubscription,
        retry: 0,
        refetchOnMount: false,
        refetchInterval: false
    })

}

export default useGetCurrentSubscription;