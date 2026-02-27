import {useMutation} from "@tanstack/react-query";
import {cancelSubscription} from "@/service/paymentService";

const useCancelSubscription = () => {

    return useMutation({
        mutationKey: ["cancel-subscription"],
        mutationFn: async () => await cancelSubscription(),
        retry: 0
    })

}

export default useCancelSubscription;