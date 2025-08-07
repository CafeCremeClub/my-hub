"use client";


import React from 'react';
import StepIndicator from "@/components/auth/onboarding/StepIndicator";
import OnboardingStepTwo from "@/components/auth/onboarding/OnboardingStepTwo";
import useOnboardingContext from "@/hooks/useOnboardingContext";
import OnboardingStepOne from "@/components/auth/onboarding/OnboardingStepOne";
import OnboardingStepThree from "@/components/auth/onboarding/OnboardingStepThree";

const OnboardingContent = () => {

    const {
        step
    } = useOnboardingContext();

    return (
        <div
            className="overflow-y-auto col-span-2 flex flex-col items-center px-5 pt-[10rem] pb-7 gap-[5rem]">
            {
                step === 1 ?
                    <OnboardingStepOne/> : null
            }

            {
                step === 2 ?
                    <OnboardingStepTwo/> : null
            }
            {
                step === 3 ?
                    <OnboardingStepThree/> : null
            }
            <StepIndicator/>
        </div>
    );
};

export default OnboardingContent;