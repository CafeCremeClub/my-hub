"use client";

import React from 'react';
import {ChevronRight, Search} from "lucide-react";
import HouseIcon from "@/components/icons/HouseIcon";
import CustomInput from "@/components/custom/CustomInput";
import useGetMe from "@/hooks/auth/useGetMe";
import {Skeleton} from "@/components/ui/skeleton";


interface MissionPageHeaderProps {
    title?: string;
    setTitle?: (title: string) => void;
}

const MissionPageHeader = ({
                               title = "",
                               setTitle = () => {
                               }
                           }: MissionPageHeaderProps) => {

    //const [temporaryTitle, setTemporaryTitle] = useState<string>(title);

    const {
        isPending,
        data
    } = useGetMe();

    /*const onSearchClick = () => {
        setTitle(temporaryTitle);
    }*/


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
                    <div className="font-semibold tracking-tighter text-4xl text-[#1734B6] bricolage-grotesque">
                        {
                            isPending ? <Skeleton className="h-7 w-28 bg-gray-200"/> :
                                data ? `Bienvenue, ${data.firstname} ${data.lastname}` :
                                    "Bienvenue, Utilisateur"
                        }
                    </div>
                    <p className="text-[#475467]">
                        Trouvez la mission qu’il vous faut grâce à la force de la communauté.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-between w-full gap-2.5">
                <div className="flex items-center gap-2.5">
                    <CustomInput
                        id="title"
                        name="title"
                        leftIcon={<Search className="size-5 text-[#667085]"/>}
                        placeholder="Nom du poste"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <CustomInput
                        id="domain"
                        name="domain"
                        placeholder="Domaines de compétences"
                    />

                </div>
                {/*<CustomButton
                >
                    Rechercher
                </CustomButton>*/}
            </div>
        </div>
    );
};

export default MissionPageHeader;