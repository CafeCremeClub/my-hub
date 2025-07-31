import React from 'react';
import {Mail} from "lucide-react";
import CustomInput from "@/components/custom/CustomInput";
import CustomButton from "@/components/custom/CustomButton";
import CustomOtpInput from "@/components/custom/CustomOTPInput";

interface SignUpOtpProps {
    onNext: () => void;
}

const SignUpOtp = ({onNext}: SignUpOtpProps) => {

    const [value, setValue] = React.useState("");

    return (
        <div className="flex flex-col gap-8 w-full md:w-[27.5rem]">
            <div className="flex items-center flex-col gap-6">
                <div
                    className="flex justify-center items-center size-14 shadow-sm shadow-[#1018280D] border border-[#EAECF0] rounded-[0.75rem]">
                    <Mail className="text-[#344054]"/>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-center font-semibold text-[#101828] text-3xl bricolage-grotesque tracking-tighter">
                        Vérification de ton adresse email
                    </p>
                    <p className="text-[#475467] text-center">
                        Entre le code à 4 chiffres que tu as reçu sur ton<br/>
                        adresse email pour activer ton compte.
                    </p>
                </div>
            </div>

            <form
                className="flex flex-col gap-6 rounded-[0.75rem] px-10 py-8 bg-white shadow-lg shadow-[#1018280F]">

                <CustomOtpInput
                    value={value}
                    onChange={setValue}
                />

                <CustomButton
                    type="button"
                    className="bricolage-grotesque font-semibold"
                    onClick={onNext}
                >
                    Vérifier
                </CustomButton>
            </form>

            <div className="flex justify-center items-center gap-1 text-sm text-[#475467]">
                <p>Pas reçu l’email ?</p> <b className="text-[#2970FF] cursor-pointer hover:underline">Renvoyer le
                code</b>
            </div>
        </div>
    );
};

export default SignUpOtp;