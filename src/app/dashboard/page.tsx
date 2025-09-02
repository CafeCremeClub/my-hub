import React from 'react';
import MissionPageHeader from "@/components/dashboard/mission/MissionPageHeader";
import MissionPageDataTable from "@/components/dashboard/mission/MissionPageDataTable";

const DashboardPage = () => {
    return (
        <div className="flex flex-col gap-8 w-full h-full">
            <MissionPageHeader />
            <MissionPageDataTable />
        </div>
    );
};

export default DashboardPage;