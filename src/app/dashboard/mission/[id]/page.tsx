import React, {use} from 'react';
import MissionDetailsPageContent from "@/components/dashboard/mission/MissionDetailsPageContent";


interface MissionDetailsPageProps {
    params: Promise<{
        id: string;
    }>
}

const MissionDetailsPage = ({params}: MissionDetailsPageProps) => {

    const {id} = use(params)

    return (
        <MissionDetailsPageContent id={id}/>
    );
};

export default MissionDetailsPage;