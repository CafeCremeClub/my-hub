import React from 'react';
import OnboardingStepOne from "@/components/auth/onboarding/OnboardingStepOne";
import StepIndicator from "@/components/auth/onboarding/StepIndicator";
import OnboardingStepTwo from "@/components/auth/onboarding/OnboardingStepTwo";
import OnboardingStepThree from "@/components/auth/onboarding/OnboardingStepThree";

const OnboardingContent = () => {
    return (
        <div
            className="overflow-y-auto col-span-2 flex flex-col items-center px-5 pt-[10rem] pb-7 gap-[5rem]">
            {/*<OnboardingStepOne/>*/}
            <OnboardingStepTwo/>
            {/*<OnboardingStepThree/>*/}
            <StepIndicator/>
        </div>
    );
};

export default OnboardingContent;