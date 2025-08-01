"use client"

import React, {useState} from 'react';
import CustomInput from "@/components/custom/CustomInput";
import CustomButton from "@/components/custom/CustomButton";
import Link from "next/link";
import * as Yup from 'yup';
import {useFormik} from "formik";
import CustomOtpInput from "@/components/custom/CustomOTPInput";
import CustomErrorIndicator from "@/components/custom/CustomErrorIndicator";

const SignInForm = () => {

    const [step, setStep] = useState<"email" | "otp">("email");


    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Adresse email invalide')
            .required('L\'email est requis'),
        otp: Yup.string()
            .length(4, 'Le code OTP doit contenir 4 chiffres')
            .matches(/^\d+$/, 'Le code OTP ne doit contenir que des chiffres')
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            otp: ''
        },
        validationSchema,
        onSubmit: (values) => {
            console.log('Form values:', values);
            if (step === "email") {
                setStep("otp");
                formik.setFieldValue('step', 'otp');
            } else {
                // Final submission
                console.log('Final submission:', {
                    email: values.email,
                    otp: values.otp
                });
            }
        },
    });


    return (
        <div
            className="w-full flex flex-col gap-8"
        >
            <div className="flex flex-col gap-3">
                <p
                    className="bricolage-grotesque font-semibold text-[#101828] text-3xl tracking-tighter"
                >
                    Bienvenue sur MyHub
                </p>
                <p className="text-[#475467]">
                    Connecte-toi pour accéder aux meilleures opportunités de mission.
                </p>
            </div>

            <form
                className="flex flex-col gap-6"
                onSubmit={formik.handleSubmit}
            >
                <div className="flex flex-col gap-5">
                    {
                        step === "email" ?
                            <div className="flex flex-col gap-1.5">
                                <label
                                    htmlFor="email"
                                    className="text-sm text-[#344054]"
                                >
                                    Adresse e-mail
                                </label>
                                <CustomInput
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <CustomErrorIndicator
                                        message={formik.errors.email}
                                    />
                                )}
                            </div> :
                            <div className="flex flex-col gap-1.5">
                                <label
                                    htmlFor="password"
                                    className="text-sm text-[#344054]"
                                >
                                    Code envoyé par e-mail
                                </label>
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
                            </div>
                    }
                </div>
                <CustomButton
                    type="submit"
                    className="bricolage-grotesque font-semibold"
                >
                    {step === "email" ? "Se connecter" : "Vérifier"}
                </CustomButton>
            </form>

            <div className="flex justify-center items-center gap-1 text-sm text-[#475467]">
                <p>Pas de compte ?</p> <Link href="/auth/signup"
                                             className="font-bold text-[#2970FF] cursor-pointer hover:underline">Inscris-toi</Link>
            </div>
        </div>
    );
};

export default SignInForm;