"use client";

import React from 'react';
import {PiLinkSimpleBold} from "react-icons/pi";
import {Label} from "@/components/ui/label";
import CustomInput from "@/components/custom/CustomInput";
import CustomButton from "@/components/custom/CustomButton";
import useOnboardingContext from "@/hooks/useOnboardingContext";
import {useRouter} from "next/navigation";

const OnboardingStepThree = () => {

    const {setStep} = useOnboardingContext();
    const router = useRouter();

    return (
        <div className="flex flex-col items-center gap-8 w-full sm:w-[22.5rem]">
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

            <form className="flex flex-col gap-6 w-full">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="linkedin" className="text-[#344054] text-sm font-medium">
                            Linkedin
                        </Label>
                        <CustomInput
                            id="linkedin"
                            name="linkedin"
                            placeholder="www.linkedin.com/username"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="whatsapp" className="text-[#344054] text-sm font-medium">
                            WhatsApp
                        </Label>
                        <CustomInput
                            id="whatsapp"
                            name="whatsapp"
                            placeholder="Ex : +33660392788"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-0.5">
                    <CustomButton
                        type="button"
                        className="bricolage-grotesque font-semibold"
                        onClick={() => router.push("/dashboard")}
                    >
                        Je rejoins le Hub
                    </CustomButton>
                    <CustomButton
                        type="button"
                        className="text-[#1B55F5] bg-white hover:bg-white hover:underline bricolage-grotesque font-semibold border-none shadow-none"
                        onClick={() => setStep(2)}
                    >
                        Retour
                    </CustomButton>
                </div>
            </form>

        </div>
    );
};

export default OnboardingStepThree;