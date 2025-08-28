"use client";

import React from 'react';
import {ChevronRight, Search} from "lucide-react";
import HouseIcon from "@/components/icons/HouseIcon";
import CustomInput from "@/components/custom/CustomInput";
import CustomButton from "@/components/custom/CustomButton";

const DashboardPageHeader = () => {
    return (
        <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                    <HouseIcon
                        stroke="#667085"
                        className="shrink-0 size-7"
                    />
                    <ChevronRight
                        className="text-[#D0D5DD] size-5"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <p className="font-semibold tracking-tighter text-4xl text-[#1734B6] bricolage-grotesque">
                        Bienvenue, Ihsan
                    </p>
                    <p className="text-[#475467]">
                        Trouvez la mission qu’il vous faut grâce à la force de la communauté.
                    </p>
                </div>
            </div>

            <div className="flex  flex-wrap items-center justify-between w-full gap-2.5">
                <div className="flex items-center gap-2.5">
                    <CustomInput
                        id="postName"
                        name="postName"
                        leftIcon={<Search className="size-5 text-[#667085]"/>}
                        placeholder="Nom du poste"
                    />

                    <CustomInput
                        id="domain"
                        name="domain"
                        placeholder="Domaines de compétences"
                    />

                    <CustomInput
                        id="duration"
                        name="duration"
                        placeholder="Durée de la mission"
                    />
                </div>
                <CustomButton>
                    Rechercher
                </CustomButton>
            </div>
        </div>
    );
};

export default DashboardPageHeader;