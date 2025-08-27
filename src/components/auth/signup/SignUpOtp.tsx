"use client";

import React from 'react';
import {Mail} from "lucide-react";
import CustomButton from "@/components/custom/CustomButton";
import CustomOtpInput from "@/components/custom/CustomOTPInput";
import useSignUp from "@/hooks/auth/useSignUp";
import * as Yup from "yup";
import {useFormik} from "formik";
import {toast} from "sonner";
import {handleSignUpError} from "@/utils/helpers/handleSignUpError";
import {SignUpResponse} from "@/types/auth/SignUpResponse";
import CustomErrorIndicator from "@/components/custom/CustomErrorIndicator";

interface SignUpOtpProps {
    email: string;
    onNext: (response: SignUpResponse) => void;
}

const SignUpOtp = ({email, onNext}: SignUpOtpProps) => {

    const {
        isPending,
        mutateAsync
    } = useSignUp();

    const validationSchema = Yup.object({
        otp: Yup.string()
            .length(4, 'Le code OTP doit contenir 4 chiffres')
            .matches(/^\d+$/, 'Le code OTP ne doit contenir que des chiffres')
    });

    const formik = useFormik({
        initialValues: {
            otp: ''
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const response = await mutateAsync({
                    email: email,
                    code: values.otp
                })

                toast.success("Compte créé avec succès", {
                    description: "Vous pouvez maintenant vous connecter à votre compte.",
                    position: "bottom-right",
                    className: "!bg-[#CBF5E5] !text-[#176448] !border !border-[#CBF5E5]",
                    descriptionClassName: "!text-[#176448] !text-xs"
                })

                onNext(response);
            } catch (error) {
                const errorMessage = handleSignUpError(error);
                toast.error("Creation de compte échouée", {
                    description: errorMessage,
                    position: "bottom-right",
                    className: "!bg-[#DF1C41] !text-white",
                    descriptionClassName: "!text-white !text-xs"
                });
            }
        },
    });

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
                className="flex flex-col gap-6 rounded-[0.75rem] px-10 py-8 bg-white shadow-lg shadow-[#1018280F]"
                onSubmit={formik.handleSubmit}
            >

                <div className="flex justify-center">
                    <CustomOtpInput
                        value={formik.values.otp}
                        onChange={(value) => {
                            formik.setFieldValue('otp', value);
                        }}
                    />
                </div>
                {formik.touched.otp && formik.errors.otp && (
                    <CustomErrorIndicator
                        message={formik.errors.otp}
                    />
                )}

                <CustomButton
                    type="submit"
                    className="bricolage-grotesque font-semibold"
                    disabled={isPending}
                    isLoading={isPending}
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