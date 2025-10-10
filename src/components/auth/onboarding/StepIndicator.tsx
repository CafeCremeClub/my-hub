'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';

const StepIndicator = () => {
  const searchParams = useSearchParams();
  const stepParam = searchParams.get('step');
  const currentStep = stepParam ? parseInt(stepParam, 10) : 1;

  const steps = [1, 2, 3];

  return (
    <div className="flex items-center justify-center gap-4">
      {steps.map((stepNumber) => (
        <div
          key={stepNumber}
          className={`w-[10px] h-[10px] rounded-full transition-colors duration-200 ${
            currentStep === stepNumber ? 'bg-[#1B55F5]' : 'bg-[#EAECF0]'
          }`}
        />
      ))}
    </div>
  );
};

export default StepIndicator;
