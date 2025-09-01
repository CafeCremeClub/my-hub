"use client";

import React from 'react';
import {PiLinkSimpleBold} from "react-icons/pi";
import {Label} from "@/components/ui/label";
import CustomInput from "@/components/custom/CustomInput";
import CustomButton from "@/components/custom/CustomButton";
import {useRouter} from "next/navigation";
import useOnboardingContext from "@/hooks/useOnboardingContext";
import {useFormik} from "formik";
import * as yup from "yup";
import CustomErrorIndicator from "@/components/custom/CustomErrorIndicator";
import useAddUserProfile from "@/hooks/onboarding/useAddUserProfile";
import {toast} from "sonner";
import {deleteCookieByName} from "@/app/actions/deleteCookieByName";

const OnboardingStepThree = () => {

    const router = useRouter();
    const {
        tjm,
        expertise,
        industry,
        desiredJobs,
        country,
        city,
        skills,
        cv,
        linkedIn,
        setLinkedIn,
        whatsApp,
        setWhatsApp
    } = useOnboardingContext();
    const {
        isPending,
        mutateAsync
    } = useAddUserProfile();


    const handleBack = () => {
        const prevStep = 2;

        // update URL param
        const url = new URL(window.location.href);
        url.searchParams.set("step", prevStep.toString());
        router.push(url.toString());
    };

    const formik = useFormik({
        initialValues: {
            linkedIn: linkedIn || "",
            whatsApp: whatsApp || "",
        },
        validationSchema: yup.object({
            linkedIn: yup.string()
                .required("Le lien LinkedIn est requis")
                .url("Veuillez entrer un lien LinkedIn valide"),
            whatsApp: yup.string().required("Le numéro WhatsApp est requis"),
        }),
        onSubmit: async (values) => {
            try {

                await mutateAsync({
                    tjm: parseInt(tjm, 10),
                    expertise,
                    industry,
                    desiredJobs,
                    country,
                    city,
                    skills,
                    cv,
                    linkedIn: values.linkedIn,
                    whatsApp: values.whatsApp
                })

                await deleteCookieByName("should-complete-profile-info");
                await deleteCookieByName("should-complete-onboarding");

                toast.success("Informations enregistrées", {
                    description: "Vos informations de profil ont été ajoutées avec succès.",
                    position: "bottom-right",
                    className: "!bg-[#CBF5E5] !text-[#176448] !border !border-[#CBF5E5]",
                    descriptionClassName: "!text-[#176448] !text-xs"
                })

                router.push("/dashboard");
            } catch (error) {
                console.log(error);
                toast.error("Échec de l’ajout des informations de profil", {
                    description: "Une erreur est survenue, veuillez réessayer plus tard",
                    position: "bottom-right",
                    className: "!bg-[#DF1C41] !text-white",
                    descriptionClassName: "!text-white !text-xs"
                });
            }
        },
    })

    return (
        <div className="z-10 flex flex-col items-center gap-8 w-full sm:w-[22.5rem]">
            <div
                className="flex justify-center items-center size-12 rounded-[0.625rem] border shadow shadow-[#1018280D] border-[#EAECF0]"
            >
                <PiLinkSimpleBold className="size-6 text-[#344054]"/>
            </div>
            <div className="flex flex-col items-center gap-3">
                <p className="text-2xl font-semibold tracking-tighter bricolage-grotesque text-center">
                    Tes liens & contacts
                </p>
                <p className="text-center text-[#475467]">
                    Facilite les échanges en ajoutant tes canaux de communication préférés.
                </p>
            </div>

            <form className="flex flex-col gap-6 w-full" onSubmit={formik.handleSubmit}>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="linkedIn" className="text-[#344054] text-sm font-medium">
                            Linkedin
                        </Label>
                        <CustomInput
                            id="linkedIn"
                            name="linkedIn"
                            placeholder="www.linkedin.com/username"
                            value={formik.values.linkedIn}
                            onChange={(e) => {
                                formik.handleChange(e);
                                setLinkedIn(e.target.value);
                            }}
                            onBlur={formik.handleBlur}
                            isError={formik.touched.linkedIn && formik.errors.linkedIn !== undefined}
                        />
                        {formik.touched.linkedIn && formik.errors.linkedIn && (
                            <CustomErrorIndicator
                                message={formik.errors.linkedIn}
                            />
                        )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="whatsApp" className="text-[#344054] text-sm font-medium">
                            WhatsApp
                        </Label>
                        <CustomInput
                            id="whatsApp"
                            name="whatsApp"
                            placeholder="Ex : +33660392788"
                            value={formik.values.whatsApp}
                            onChange={(e) => {
                                formik.handleChange(e);
                                setWhatsApp(e.target.value);
                            }}
                            onBlur={formik.handleBlur}
                            isError={formik.touched.whatsApp && formik.errors.whatsApp !== undefined}
                        />
                        {formik.touched.whatsApp && formik.errors.whatsApp && (
                            <CustomErrorIndicator
                                message={formik.errors.whatsApp}
                            />
                        )}
                    </div>
                </div>

                <div className="flex flex-col gap-0.5">
                    <CustomButton
                        type="submit"
                        className="bricolage-grotesque font-semibold"
                        disabled={isPending}
                        isLoading={isPending}
                    >
                        Je rejoins le Hub
                    </CustomButton>
                    <CustomButton
                        type="button"
                        className="text-[#1B55F5] bg-white hover:bg-white hover:underline bricolage-grotesque font-semibold border-none shadow-none"
                        onClick={handleBack}
                    >
                        Retour
                    </CustomButton>
                </div>
            </form>

        </div>
    );
};

export default OnboardingStepThree;