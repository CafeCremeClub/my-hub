"use client";

import React from 'react';
import {TbUsersPlus} from "react-icons/tb";
import {Label} from "@/components/ui/label";
import CustomInput from "@/components/custom/CustomInput";
import CustomButton from "@/components/custom/CustomButton";
import {ImCoinEuro} from "react-icons/im";
import CustomTagInput from "@/components/custom/CustomTagInput";
import CustomDragDropInput from "@/components/custom/CustomDragDropInput";
import useOnboardingContext from "@/hooks/useOnboardingContext";
import {useRouter} from "next/navigation";

const OnboardingStepTwo = () => {

    const router = useRouter();
    const {setStep} = useOnboardingContext();

    const handleContinue = () => {
        const nextStep = 3;
        // update context state
        setStep(nextStep);

        // update URL param
        const url = new URL(window.location.href);
        url.searchParams.set("step", nextStep.toString());
        router.push(url.toString());
    };

    const handleBack = () => {
        const prevStep = 1;
        // update context state
        setStep(prevStep);

        // update URL param
        const url = new URL(window.location.href);
        url.searchParams.set("step", prevStep.toString());
        router.push(url.toString());
    };

    return (
        <div className="flex flex-col items-center gap-8 w-full sm:w-[22.5rem]">
            <div
                className="flex justify-center items-center size-12 rounded-[0.625rem] border shadow shadow-[#1018280D] border-[#EAECF0]"
            >
                <TbUsersPlus className="size-6 text-[#344054]"/>
            </div>
            <div className="flex flex-col items-center gap-3">
                <p className="text-2xl font-semibold tracking-tighter bricolage-grotesque text-center">
                    Renseigne tes compétences et tes préférences de mission
                </p>
                <p className="text-center text-[#475467]">
                    Indique tes compétences clés et le type de missions que tu préfères.
                </p>
            </div>

            <form className="flex flex-col gap-6 w-full">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="tjm" className="text-[#344054] text-sm font-medium">
                            TJM
                        </Label>
                        <CustomInput
                            id="tjm"
                            name="tjm"
                            placeholder="Ex : 400€"
                            leftIcon={<ImCoinEuro/>}
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="expertise" className="text-[#344054] text-sm font-medium">
                            Expertises
                        </Label>
                        <CustomInput
                            id="expertise"
                            name="expertise"
                            placeholder="Entre tes domaines d’expertises"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="activity" className="text-[#344054] text-sm font-medium">
                            Secteurs d’activité
                        </Label>
                        <CustomTagInput
                            id="activity"
                            name="activity"
                            placeholder="Ex : Marketing, Finance, IT"
                            maxItems={3}
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="wantedJob" className="text-[#344054] text-sm font-medium">
                            Métiers recherchés
                        </Label>
                        <CustomTagInput
                            id="wantedJob"
                            name="wantedJob"
                            placeholder="Ex : Développeur, Designer, Chef de projet"
                            maxItems={3}
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <CustomDragDropInput
                            title="Déposes ton CV"
                            acceptedFormats={["SVG", "PNG", "JPG", "JPEG", "PDF"]}
                            maxSize={50}
                        />
                    </div>

                </div>

                <div className="flex flex-col gap-0.5">
                    <CustomButton
                        type="submit"
                        className="bricolage-grotesque font-semibold"
                        onClick={(e) => {
                            e.preventDefault();
                            handleContinue();
                        }}
                    >
                        Continuer
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

export default OnboardingStepTwo;