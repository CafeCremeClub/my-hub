import React from 'react';
import {MissionDetails} from "@/types/mission/MissionDetails";

interface MissionDetailsOverviewProps {
    mission: MissionDetails
}

const MissionDetailsOverview = ({mission}: MissionDetailsOverviewProps) => {
    return (
        <div className="h-full bg-[#F4F9FF] py-6 px-8 flex flex-col gap-6 rounded-[2.188rem]">
            <p className="font-medium tracking-tighter text-3xl text-[#101828] bricolage-grotesque">
                Fiche de poste
            </p>
            <div className="w-full h-[1px] bg-[#EAECF0]"/>

            <div className="flex flex-col gap-3">
                <p className="font-medium text-[#101828] tracking-tighter bricolage-grotesque">
                    À propos de l’entreprise
                </p>
                <p className="text-[#475467]">
                    {mission.companyBio}
                </p>
            </div>

            {/*<div className="flex flex-col gap-3">
                <p className="text-[#101828] font-semibold text-lg">
                    Détails de la mission
                </p>
                <p className="text-[#475467]">
                    Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet
                    pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae
                    malesuada fringilla. Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo
                    consectetur convallis risus.
                </p>
            </div>*/}
        </div>
    );
};

export default MissionDetailsOverview;