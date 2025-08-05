import React from 'react';
import OnboardingSidebar from "@/components/auth/onboarding/OnboardingSidebar";

interface OnboardingLayoutProps {
    children: React.ReactNode;
}

const OnboardingLayout = ({children}: OnboardingLayoutProps) => {
    return (
        <div className="grid grid-cols-3 h-screen overflow-hidden">
            <OnboardingSidebar/>
            {
                children
            }
        </div>
    );
};

export default OnboardingLayout;