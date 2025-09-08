import React from 'react';
import {MissionDetails} from "@/types/mission/MissionDetails";

interface MissionDetailsPageHeaderProps {
    mission: MissionDetails;
}

const MissionDetailsPageHeader = ({mission}: MissionDetailsPageHeaderProps) => {
    return (
        <div className="flex">
            <p className="font-semibold tracking-tighter text-4xl text-[#1734B6] bricolage-grotesque">
                {mission.client}
            </p>
        </div>
    );
};

export default MissionDetailsPageHeader;