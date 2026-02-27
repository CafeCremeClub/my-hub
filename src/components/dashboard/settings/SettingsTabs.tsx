'use client';

import React, {useEffect} from 'react';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import {SettingTabs} from '@/types/settings/SettingTabs';
import {SettingTabsKey} from '@/types/settings/SettingTabsKey';

const TABS: SettingTabs[] = [
    {
        key: 'profile',
        label: 'Profil',
    },
    {
        key: 'payment',
        label: 'Paiement',
    }
];

const DEFAULT_TAB = 'profile';

interface SettingsTabsProps {
    onTabChange?: (tab: SettingTabsKey) => void;
}

const SettingsTabs = ({onTabChange}: SettingsTabsProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const tab = searchParams.get('tab');

    useEffect(() => {
        if (!tab || !TABS.some((t) => t.key === tab)) {
            const params = new URLSearchParams(searchParams.toString());
            params.set('tab', DEFAULT_TAB);
            router.replace(`${pathname}?${params.toString()}`);
        }
        // eslint-disable-next-line
    }, [tab, pathname]);

    const handleTabChange = (value: SettingTabsKey) => {
        const params = new URLSearchParams(searchParams.toString());
        onTabChange?.(value);
        params.set('tab', value);
        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="flex items-center gap-1 bg-[#F4F9FF] border border-[#EAECF0] p-1 rounded-[0.625rem]">
            {TABS.map((tabItem) => (
                <button
                    key={tabItem.key}
                    onClick={() => handleTabChange(tabItem.key)}
                    className={`px-3 py-2 rounded-[0.375rem] text-sm font-medium transition-colors cursor-pointer ${
                        tab === tabItem.key
                            ? 'bg-white text-[#344054] shadow-lg shadow-[#1018280F]'
                            : 'text-[#667085] hover:bg-white'
                    }`}
                >
                    {tabItem.label}
                </button>
            ))}
        </div>
    );
};

export default SettingsTabs;
