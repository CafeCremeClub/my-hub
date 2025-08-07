import React from 'react';
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import DashboardPageDataTable from "@/components/dashboard/DashboardPageDataTable";

const DashboardPage = () => {
    return (
        <div className="flex flex-col gap-8 w-full">
            <DashboardPageHeader />
            <DashboardPageDataTable />
        </div>
    );
};

export default DashboardPage;