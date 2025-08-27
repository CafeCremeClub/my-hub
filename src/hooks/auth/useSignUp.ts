import {useMutation} from "@tanstack/react-query";
import {SignUpPayload} from "@/types/auth/SignUpPayload";
import {signUp} from "@/service/authService";

const useSignUp = () => {

    return useMutation({
        mutationKey: ["signup"],
        mutationFn: async (payload: SignUpPayload) => await signUp(payload),
        retry: 0
    })

}

export default useSignUp;
