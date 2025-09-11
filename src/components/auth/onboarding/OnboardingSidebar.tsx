"use client";

import React from 'react';
import Image from "next/image";
import {logo} from "../../../../public";
import {FiUser} from "react-icons/fi";
import {TbUsersPlus} from "react-icons/tb";
import Step from "@/components/auth/onboarding/Step";
import {PiLinkSimpleBold} from "react-icons/pi";
import {useSearchParams} from "next/navigation";

const steps = [
    {
        id: 1,
        title: "Votre profil",
        description: "Complète votre profil pour matcher avec les meilleures offres",
        icon: FiUser,
    },
    {
        id: 2,
        title: "Tes compétences",
        description: "Ajoute tes compétences clés pour recevoir des missions adaptées à votre savoir-faire.",
        icon: TbUsersPlus
    },
    {
        id: 3,
        title: "Tes liens & contacts",
        description: "Ajoute votre LinkedIn, WhatsApp et autres canaux pour faciliter les échanges",
        icon: PiLinkSimpleBold
    }
]


const OnboardingSidebar = () => {

    const searchParams = useSearchParams();
    const stepParam = searchParams.get("step");
    const currentStep = stepParam ? parseInt(stepParam, 10) : 1;

    return (
        <div className="hidden lg:flex flex-col gap-20 col-span-1 px-8 py-7 bg-[#F9FAFB]">
            <Image
                src={logo}
                alt="logo"
                className="object-center object-cover w-64"
            />

            <div className="flex flex-col gap-1">
                {
                    steps.map((step, index) => (
                        <Step
                            key={step.id}
                            title={step.title}
                            description={step.description}
                            icon={step.icon}
                            isActive={step.id === currentStep}
                            showLine={index < steps.length - 1}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default OnboardingSidebar;