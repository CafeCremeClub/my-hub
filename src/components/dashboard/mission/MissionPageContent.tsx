"use client";

import React, {useState} from 'react';
import MissionPageHeader from "@/components/dashboard/mission/MissionPageHeader";
import MissionPageDataTable from "@/components/dashboard/mission/MissionPageDataTable";

const MissionPageContent = () => {

    const [page, setPage] = useState<number>(1);

    // Filter params
    const [title, setTitle] = useState<string>("")
    const [skills, setSkills] = useState<string[]>([]);

    return (
        <div className="flex flex-col gap-8 w-full h-full">
            <MissionPageHeader
                title={title}
                setTitle={setTitle}
                skills={skills}
                setSkills={setSkills}
            />
            <MissionPageDataTable
                page={page}
                title={title}
                skills={skills}
                setPage={setPage}
            />
        </div>
    );
};

export default MissionPageContent;