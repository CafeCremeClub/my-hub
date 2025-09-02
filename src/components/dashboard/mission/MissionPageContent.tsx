"use client";

import React, {useState} from 'react';
import MissionPageHeader from "@/components/dashboard/mission/MissionPageHeader";
import MissionPageDataTable from "@/components/dashboard/mission/MissionPageDataTable";

const MissionPageContent = () => {

    const [page, setPage] = useState<number>(1);
    const [title, setTitle] = useState<string>("")

    return (
        <div className="flex flex-col gap-8 w-full h-full">
            <MissionPageHeader
                title={title}
                setTitle={setTitle}
            />
            <MissionPageDataTable
                page={page}
                title={title}
                setPage={setPage}
            />
        </div>
    );
};

export default MissionPageContent;