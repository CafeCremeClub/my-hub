"use client";

import {createContext, Dispatch, FC, ReactNode, SetStateAction, useMemo, useState} from "react";


interface OnboardingContextProps {
    tjm: string;
    setTjm: Dispatch<SetStateAction<string>>;
    expertise: string;
    setExpertise: Dispatch<SetStateAction<string>>;
    industry: string[];
    setIndustry: Dispatch<SetStateAction<string[]>>;
    desiredJobs: string[];
    setDesiredJobs: Dispatch<SetStateAction<string[]>>;
    cv: File | null;
    setCv: Dispatch<SetStateAction<File | null>>;
    linkedIn: string;
    setLinkedIn: Dispatch<SetStateAction<string>>;
    whatsApp: string;
    setWhatsApp: Dispatch<SetStateAction<string>>;
}

export const OnboardingContext = createContext<OnboardingContextProps | undefined>(undefined);

const OnboardingContextProvider: FC<{ children: ReactNode }> = ({children}) => {

    const [tjm, setTjm] = useState<string>("");
    const [expertise, setExpertise] = useState<string>("");
    const [industry, setIndustry] = useState<string[]>([]);
    const [desiredJobs, setDesiredJobs] = useState<string[]>([]);
    const [cv, setCv] = useState<File | null>(null);
    const [linkedIn, setLinkedIn] = useState<string>("");
    const [whatsApp, setWhatsApp] = useState<string>("");


    const value = useMemo(() => ({
        tjm,
        setTjm,
        expertise,
        setExpertise,
        industry,
        setIndustry,
        desiredJobs,
        setDesiredJobs,
        cv,
        setCv,
        linkedIn,
        setLinkedIn,
        whatsApp,
        setWhatsApp
    }), [
        tjm,
        expertise,
        industry,
        desiredJobs,
        cv,
        linkedIn,
        whatsApp
    ])

    return (
        <OnboardingContext.Provider value={value}>
            {children}
        </OnboardingContext.Provider>
    )


}

export default OnboardingContextProvider;