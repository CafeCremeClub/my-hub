"use client";

import React from 'react';
import {FiUser} from "react-icons/fi";
import CustomButton from "@/components/custom/CustomButton";
import {Label} from "@/components/ui/label";
import CustomInput from "@/components/custom/CustomInput";
import {Phone} from "lucide-react";
import {useRouter} from "next/navigation";
import useAddUserInfo from "@/hooks/onboarding/useAddUserInfo";
import {useFormik} from "formik";
import * as Yup from "yup";
import CustomErrorIndicator from "@/components/custom/CustomErrorIndicator";
import {toast} from "sonner";
import {deleteCookieByName} from "@/app/actions/deleteCookieByName";
import {saveCookieByName} from "@/app/actions/saveCookieByName";

const OnboardingStepOne = () => {

        const router = useRouter();
        const {
            isPending,
            mutateAsync
        } = useAddUserInfo();

        const handleNavigateToStepTwo = () => {
            const nextStep = 2;

            const url = new URL(window.location.href);
            url.searchParams.set("step", nextStep.toString());
            router.push(url.toString()); // push keeps history, replace would overwrite
        };

        const formik = useFormik({
            initialValues: {
                firstname: '',
                lastname: '',
                phone: '',
                profession: ''
            },
            validationSchema: Yup.object({
                firstname: Yup.string().required('Le prénom est requis'),
                lastname: Yup.string().required('Le nom est requis'),
                phone: Yup.string()
                    .matches(/^(0|\+33|0033)[1-9](\d{2}){4}$/, 'Numéro de téléphone invalide')
                    .required('Le numéro de téléphone est requis'),
                profession: Yup.string().required('Le métier est requis')
            }),
            onSubmit: async (values) => {
                try {
                    await mutateAsync(values);

                    await deleteCookieByName("should-complete-user-info");
                    await saveCookieByName("should-complete-profile-info", "true");

                    toast.success("Informations enregistrées", {
                        description: "Vos informations utilisateur ont été ajoutées avec succès.",
                        position: "bottom-right",
                        className: "!bg-[#CBF5E5] !text-[#176448] !border !border-[#CBF5E5]",
                        descriptionClassName: "!text-[#176448] !text-xs"
                    })
                    handleNavigateToStepTwo();
                } catch (error) {
                    console.log(error);
                    toast.error("Échec de l’ajout des informations utilisateur", {
                        description: "Une erreur est survenue, veuillez réessayer plus tard",
                        position: "bottom-right",
                        className: "!bg-[#DF1C41] !text-white",
                        descriptionClassName: "!text-white !text-xs"
                    });
                }
            }
        })

        return (
            <div className="flex flex-col items-center gap-8 w-full sm:w-[22.5rem]">
                <div
                    className="flex justify-center items-center size-12 rounded-[0.625rem] border shadow shadow-[#1018280D] border-[#EAECF0]"
                >
                    <FiUser className="size-6 text-[#344054]"/>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <p className="text-2xl font-semibold tracking-tighter bricolage-grotesque ">
                        Complète ton profil
                    </p>
                    <p className="text-center text-[#475467]">
                        Une communauté, des opportunités, et un réseau qui fait la différence.
                    </p>
                </div>

                <form
                    className="flex flex-col gap-6 w-full"
                    onSubmit={formik.handleSubmit}
                >
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1.5">
                            <Label htmlFor="firstname" className="text-[#344054] text-sm font-medium">
                                Prénom
                            </Label>
                            <CustomInput
                                id="firstname"
                                name="firstname"
                                placeholder="Ex : John"
                                value={formik.values.firstname}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isError={formik.touched.firstname && formik.errors.firstname !== undefined}
                            />
                            {formik.touched.firstname && formik.errors.firstname && (
                                <CustomErrorIndicator
                                    message={formik.errors.firstname}
                                />
                            )}
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <Label htmlFor="lastname" className="text-[#344054] text-sm font-medium">
                                Nom
                            </Label>
                            <CustomInput
                                id="lastname"
                                name="lastname"
                                placeholder="Ex : Doe"
                                value={formik.values.lastname}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isError={formik.touched.lastname && formik.errors.lastname !== undefined}
                            />
                            {formik.touched.lastname && formik.errors.lastname && (
                                <CustomErrorIndicator
                                    message={formik.errors.lastname}
                                />
                            )}
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <Label htmlFor="phone" className="text-[#344054] text-sm font-medium">
                                Numéro de téléphone
                            </Label>
                            <CustomInput
                                id="phone"
                                name="phone"
                                placeholder="0643294789"
                                leftIcon={<Phone size={18}/>}
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isError={formik.touched.phone && formik.errors.phone !== undefined}
                            />
                            {formik.touched.phone && formik.errors.phone && (
                                <CustomErrorIndicator
                                    message={formik.errors.phone}
                                />
                            )}
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <Label htmlFor="profession" className="text-[#344054] text-sm font-medium">
                                Métier
                            </Label>
                            <CustomInput
                                id="profession"
                                name="profession"
                                placeholder="Ex : Full stack développeur"
                                value={formik.values.profession}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isError={formik.touched.profession && formik.errors.profession !== undefined}
                            />
                            {formik.touched.profession && formik.errors.profession && (
                                <CustomErrorIndicator
                                    message={formik.errors.profession}
                                />
                            )}
                        </div>
                    </div>

                    <CustomButton
                        type="submit"
                        className="bricolage-grotesque font-semibold"
                        disabled={isPending}
                        isLoading={isPending}
                    >
                        Continuer
                    </CustomButton>
                </form>

            </div>
        );
    }
;

export default OnboardingStepOne;