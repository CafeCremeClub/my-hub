"use client";

import React from 'react';
import {FiUser} from "react-icons/fi";
import CustomButton from "@/components/custom/CustomButton";
import {Label} from "@/components/ui/label";
import CustomInput from "@/components/custom/CustomInput";
import {Phone} from "lucide-react";
import useOnboardingContext from "@/hooks/useOnboardingContext";

const OnboardingStepOne = () => {

    const {setStep} = useOnboardingContext();

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

            <form className="flex flex-col gap-6 w-full">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="firstName" className="text-[#344054] text-sm font-medium">
                            Prénom
                        </Label>
                        <CustomInput
                            id="firstName"
                            name="firstName"
                            placeholder="Ex : John"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="lastName" className="text-[#344054] text-sm font-medium">
                            Nom
                        </Label>
                        <CustomInput
                            id="lastName"
                            name="lastName"
                            placeholder="Ex : Doe"
                        />
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
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="jobTitle" className="text-[#344054] text-sm font-medium">
                            Métier
                        </Label>
                        <CustomInput
                            id="jobTitle"
                            name="jobTitle"
                            placeholder="Ex : Full stack développeur"
                        />
                    </div>
                </div>

                <CustomButton
                    type="submit"
                    className="bricolage-grotesque font-semibold"
                    onClick={() => setStep(2)}
                >
                    Continuer
                </CustomButton>
            </form>

        </div>
    );
};

export default OnboardingStepOne;