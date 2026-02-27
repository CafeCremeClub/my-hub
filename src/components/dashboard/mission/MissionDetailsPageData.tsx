import React from 'react';
import MissionDetailsOverview from '@/components/dashboard/mission/MissionDetailsOverview';
import {MissionDetails} from '@/types/mission/MissionDetails';

interface MissionDetailsPageDataProps {
    mission: MissionDetails;
}

const MissionDetailsPageData = ({mission}: MissionDetailsPageDataProps) => {
    return (
        <div className="flex flex-col gap-8 w-full h-full">
            <MissionDetailsOverview mission={mission}/>
        </div>
    );
};

export default MissionDetailsPageData;
