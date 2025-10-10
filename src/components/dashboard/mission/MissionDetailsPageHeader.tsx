import React from 'react';
import { MissionDetails } from '@/types/mission/MissionDetails';
import CustomButton from '@/components/custom/CustomButton';
import { FaCircle } from 'react-icons/fa6';
import ApplyForMissionDialog from '@/components/dashboard/mission/ApplyForMissionDialog';

interface MissionDetailsPageHeaderProps {
  mission: MissionDetails;
}

const MissionDetailsPageHeader = ({
  mission,
}: MissionDetailsPageHeaderProps) => {
  const [isApplyDialogOpen, setIsApplyDialogOpen] = React.useState(false);

  return (
    <>
      <ApplyForMissionDialog
        isOpen={isApplyDialogOpen}
        onClose={() => setIsApplyDialogOpen(false)}
        missionId={mission.id}
      />
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-semibold tracking-tighter text-4xl text-[#1734B6] bricolage-grotesque">
          {mission.client}
        </p>
        <div className="flex items-center gap-3">
          <div className="flex justify-center items-center border border-[#D0D5DD] shadow-sm shadow-[#E4E5E73D] h-[2.75rem] px-3.5 text-[#344054] text-sm rounded-[0.5rem] gap-2 font-medium">
            <FaCircle className="size-2.5 text-[#17B26A]" />
            {mission.applications || 0} candidats
          </div>
          <CustomButton onClick={() => setIsApplyDialogOpen(true)}>
            Postuler directement
          </CustomButton>
        </div>
      </div>
    </>
  );
};

export default MissionDetailsPageHeader;
