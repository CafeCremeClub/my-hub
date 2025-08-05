"use client"

import React from 'react';
import useOnboardingContext from '@/hooks/useOnboardingContext';

const StepIndicator = () => {
    const { step } = useOnboardingContext();

    const steps = [1, 2, 3];

    return (
        <div className="flex items-center justify-center gap-4">
            {steps.map((stepNumber) => (
                <div
                    key={stepNumber}
                    className={`w-[10px] h-[10px] rounded-full transition-colors duration-200 ${
                        step >= stepNumber ? 'bg-[#1B55F5]' : 'bg-[#EAECF0]'
                    }`}
                />
            ))}
        </div>
    );
};

export default StepIndicator;
