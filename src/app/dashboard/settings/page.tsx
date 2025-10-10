import React, { Suspense } from 'react';
import SettingsPageContent from '@/components/dashboard/settings/SettingsPageContent';

const SettingsPage = () => {
  return (
    <Suspense>
      <SettingsPageContent />
    </Suspense>
  );
};

export default SettingsPage;
