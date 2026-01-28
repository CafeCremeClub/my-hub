import {useMutation} from "@tanstack/react-query";
import {createSubscription} from "@/service/paymentService";

const useCreateSubscription = () => {

    return useMutation({
        mutationKey: ["create-subscription"],
        mutationFn: async () => await createSubscription(),
        retry: 0
    })

}

export default useCreateSubscription;