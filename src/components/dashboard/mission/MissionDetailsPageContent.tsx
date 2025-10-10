'use client';

import React from 'react';
import MissionDetailsPageHeader from '@/components/dashboard/mission/MissionDetailsPageHeader';
import MissionDetailsPageData from '@/components/dashboard/mission/MissionDetailsPageData';
import useGetMissionById from '@/hooks/mission/useGetMissionById';
import LoadingBox from '@/components/dashboard/LoadingBox';
import ErrorBox from '@/components/dashboard/ErrorBox';
import NoDataBox from '@/components/dashboard/NoDataBox';

interface MissionDetailsPageContentProps {
  id: string;
}

const MissionDetailsPageContent = ({ id }: MissionDetailsPageContentProps) => {
  const { isPending, isError, data: mission } = useGetMissionById(id);

  return (
    <div className="flex flex-col gap-8 w-full h-full">
      {isPending ? (
        <LoadingBox />
      ) : isError ? (
        <ErrorBox message="Une erreur est survenue lors du chargement de la mission. Veuillez réessayer plus tard." />
      ) : mission ? (
        <>
          <MissionDetailsPageHeader mission={mission} />
          <MissionDetailsPageData mission={mission} />
        </>
      ) : (
        <NoDataBox message="Mission non trouvée." />
      )}
    </div>
  );
};

export default MissionDetailsPageContent;
