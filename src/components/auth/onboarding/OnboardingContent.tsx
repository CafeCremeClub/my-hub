"use client";

import React, {useEffect} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import StepIndicator from "@/components/auth/onboarding/StepIndicator";
import OnboardingStepOne from "@/components/auth/onboarding/OnboardingStepOne";
import OnboardingStepTwo from "@/components/auth/onboarding/OnboardingStepTwo";
import OnboardingStepThree from "@/components/auth/onboarding/OnboardingStepThree";

const OnboardingContent = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const stepParam = searchParams.get("step");
    const step = stepParam ? parseInt(stepParam, 10) : 1;

    useEffect(() => {
        if (!stepParam) {
            const url = new URL(window.location.href);
            url.searchParams.set("step", "1");
            router.replace(url.toString());
        }
    }, [stepParam, router]);

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