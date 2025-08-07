import React from 'react';
import Sidebar from "@/components/dashboard/Sidebar";


interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout = ({children}: DashboardLayoutProps) => {
    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar/>
            <div className="p-8 w-full overflow-y-auto">
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;