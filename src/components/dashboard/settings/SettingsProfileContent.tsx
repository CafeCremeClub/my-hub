import React from 'react';
import useGetMe from '@/hooks/auth/useGetMe';
import SettingsProfileContentSkeleton from '@/components/dashboard/settings/SettingsProfileContentSkeleton';
import ErrorBox from '@/components/dashboard/ErrorBox';
import UpdateProfileForm from '@/components/dashboard/profile/UpdateProfileForm';

const SettingsProfileContent = () => {
  const { isPending, isError, data } = useGetMe();

  if (isPending) {
    return <SettingsProfileContentSkeleton />;
  }

  if (isError || !data) {
    return (
      <ErrorBox message="Une erreur est survenue lors du chargement de vos informations. Veuillez réessayer plus tard." />
    );
  }

  return <UpdateProfileForm data={data} />;
};

export default SettingsProfileContent;
