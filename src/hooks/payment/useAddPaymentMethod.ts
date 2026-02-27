import {useMutation} from "@tanstack/react-query";
import {AddPaymentMethodBody} from "@/types/settings/payment/AddPaymentMethodBody";
import {addPaymentMethod} from "@/service/paymentService";

const useAddPaymentMethod = () => {

    return useMutation({
        mutationKey: ["add-payment-method"],
        mutationFn: async (payload: AddPaymentMethodBody) => await addPaymentMethod(payload),
        retry: 0
    })

}

export default useAddPaymentMethod;