"use client";

import {createContext, Dispatch, FC, ReactNode, SetStateAction, useMemo, useState} from "react";
import {Step} from "@/types/onboarding/Step";


interface OnboardingContextProps {
    // Step block
    step: Step;
    setStep: Dispatch<SetStateAction<Step>>;

    // Form data
    /*firstName: string;
    setFirstName: Dispatch<SetStateAction<string>>;
    lastName: string;
    setLastName: Dispatch<SetStateAction<string>>;
    phoneNumber: string;
    setPhoneNumber: Dispatch<SetStateAction<string>>;
    jobTitle: string;
    setJobTitle: Dispatch<SetStateAction<string>>;*/

    // Skills and mission preferences
    /*tjm: string;
    setTjm: Dispatch<SetStateAction<string>>;
    expertise: string[];
    setExpertise: Dispatch<SetStateAction<string[]>>;
    industrySectors: string[];
    setIndustrySectors: Dispatch<SetStateAction<string[]>>;
    desiredJobs: string[];
    setDesiredJobs: Dispatch<SetStateAction<string[]>>;
    cv: File | null;
    setCv: Dispatch<SetStateAction<File | null>>;*/

    // Links and contacts
    /*linkedin: string;
    setLinkedin: Dispatch<SetStateAction<string>>;
    whatsApp: string;
    setWhatsApp: Dispatch<SetStateAction<string>>;*/
}

export const OnboardingContext = createContext<OnboardingContextProps | undefined>(undefined);

const OnboardingContextProvider: FC<{ children: ReactNode }> = ({children}) => {

    const [step, setStep] = useState<Step>(1);


    const value = useMemo(() => ({
        step,
        setStep
    }), [
        step
    ])

    return (
        <OnboardingContext.Provider value={value}>
            {children}
        </OnboardingContext.Provider>
    )


}

export default OnboardingContextProvider;