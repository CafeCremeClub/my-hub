"use client";

import React, {useState} from 'react';
import {useSearchParams} from "next/navigation";
import SettingsTabs from "@/components/dashboard/settings/SettingsTabs";
import {SettingTabsKey} from "@/types/settings/SettingTabsKey";
import SettingsProfileContent from "@/components/dashboard/settings/SettingsProfileContent";
import SettingsPasswordContent from "@/components/dashboard/settings/SettingsPasswordContent";

const SettingsPageContent = () => {

    const searchParams = useSearchParams();
    const tabParam = searchParams.get("tab") as SettingTabsKey;
    const [currentTab, setCurrentTab] = useState<SettingTabsKey>(tabParam || "profile");

    return (
        <div className="flex flex-col gap-8 w-full h-full">
            <p className="font-semibold tracking-tighter text-4xl text-[#1734B6] bricolage-grotesque">
                Paramètres
            </p>

            <SettingsTabs
                onTabChange={(tab) => setCurrentTab(tab)}
            />

            <div className="h-full">
                {
                    currentTab === "profile" ?
                        <SettingsProfileContent/> : null
                }
                {
                    currentTab === "password" ?
                        <SettingsPasswordContent/> : null
                }
                {currentTab === "email" && <p>Contenu de l&#39;email</p>}
                {currentTab === "notifications" && <p>Contenu des notifications</p>}
            </div>
        </div>
    );
};

export default SettingsPageContent;