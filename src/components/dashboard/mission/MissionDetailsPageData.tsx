import React, {useState} from 'react';
import {useSearchParams} from "next/navigation";
import {MissionTabsKey} from "@/types/mission/MissionTabsKey";
import MissionNavigationTabs from "@/components/dashboard/mission/MissionNavigationTabs";
import MissionDetailsOverview from "@/components/dashboard/mission/MissionDetailsOverview";
import MissionDetailsProfile from "@/components/dashboard/mission/MissionDetailsProfile";
import MissionDetailsClient from "@/components/dashboard/mission/MissionDetailsClient";
import {MissionDetails} from "@/types/mission/MissionDetails";

interface MissionDetailsPageDataProps {
    mission: MissionDetails
}

const MissionDetailsPageData = ({mission}: MissionDetailsPageDataProps) => {

    const searchParams = useSearchParams();
    const tabParam = searchParams.get("tab") as MissionTabsKey;
    const [currentTab, setCurrentTab] = useState<MissionTabsKey>(tabParam || "overview");

    return (
        <div className="flex flex-col gap-8 w-full h-full">
            <MissionNavigationTabs
                onTabChange={(tab) => setCurrentTab(tab)}
            />

            <div className="h-full">
                {
                    currentTab === "overview" ? <MissionDetailsOverview mission={mission}/> : null
                }
                {
                    currentTab === "profile" ? <MissionDetailsProfile mission={mission}/> : null
                }
                {
                    currentTab === "client" ? <MissionDetailsClient/> : null
                }
            </div>

        </div>
    );
};

export default MissionDetailsPageData;