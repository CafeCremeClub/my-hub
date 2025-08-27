import React, {Suspense} from 'react';
import OnboardingSidebar from "@/components/auth/onboarding/OnboardingSidebar";

interface OnboardingLayoutProps {
    children: React.ReactNode;
}

const OnboardingLayout = ({children}: OnboardingLayoutProps) => {
    return (
        <Suspense>
            <div className="grid grid-cols-3 h-screen overflow-hidden">
                <OnboardingSidebar/>
                {
                    children
                }
            </div>
        </Suspense>
    );
};

export default OnboardingLayout;