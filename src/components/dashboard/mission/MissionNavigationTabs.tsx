import React, { useEffect } from 'react';
import { MissionTabsKey } from '@/types/mission/MissionTabsKey';
import { MissionTabs } from '@/types/mission/MissionTabs';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const TABS: MissionTabs[] = [
  {
    key: 'overview',
    label: 'Fiche de poste',
  },
  {
    key: 'profile',
    label: 'Profil',
  },
  {
    key: 'client',
    label: 'Client',
  },
];

const DEFAULT_TAB: MissionTabsKey = 'overview';

interface MissionTabsState {
  onTabChange?: (tab: MissionTabsKey) => void;
}

const MissionNavigationTabs = ({ onTabChange }: MissionTabsState) => {
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

  const handleTabChange = (value: MissionTabsKey) => {
    const params = new URLSearchParams(searchParams.toString());
    onTabChange?.(value);
    params.set('tab', value);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-1 border-b border-b-[#EAECF0]">
      {TABS.map((tabItem) => (
        <button
          key={tabItem.key}
          onClick={() => handleTabChange(tabItem.key)}
          className={`px-3 pb-3 text-sm font-medium transition-colors cursor-pointer ${
            tab === tabItem.key
              ? 'text-[#1B55F5] border-b-2 border-b-[#1B55F5]'
              : 'text-[#667085] border-b-2 border-b-transparent'
          }`}
        >
          {tabItem.label}
        </button>
      ))}
    </div>
  );
};

export default MissionNavigationTabs;
