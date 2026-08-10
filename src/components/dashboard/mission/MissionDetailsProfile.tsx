import React from 'react';
import { NON_COMMUNIQUE } from '@/lib/mission-origin';
import { MissionDetails } from '@/types/mission/MissionDetails';

interface MissionDetailsPageData {
  mission: MissionDetails;
}

const MissionDetailsProfile = ({ mission }: MissionDetailsPageData) => {
  return (
    <div className="h-full bg-[#F4F9FF] py-6 px-8 flex flex-col gap-6 rounded-[2.188rem]">
      <p className="font-medium tracking-tighter text-3xl text-[#101828] bricolage-grotesque">
        Profil recherché
      </p>
      <div className="w-full h-[1px] bg-[#EAECF0]" />

      <div className="flex flex-col gap-3">
        <p className="font-medium text-[#101828] tracking-tighter bricolage-grotesque">
          Domaine d’invervention
        </p>
        <div className="flex flex-wrap gap-3">
          {!mission.industry?.length && (
            <p className="text-xs text-[#667085] italic">{NON_COMMUNIQUE}</p>
          )}
          {(mission.industry ?? []).map((industry, index) => (
            <div
              key={index}
              className="rounded-[0.375rem] px-2 py-0.75 border border-[#D0D5DD] bg-white text-xs text-[#344054]"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>

      {/*<div className="flex flex-col gap-3">
                <p className="font-medium text-[#101828] tracking-tighter bricolage-grotesque">
                    Niveau d’expérience
                </p>
                <div className="flex flex-wrap gap-3">
                    <div
                        className="rounded-[0.375rem] px-2 py-0.75 border border-[#D0D5DD] bg-white text-xs text-[#344054]">
                        Expert
                    </div>
                </div>
            </div>*/}

      <div className="flex flex-col gap-3">
        <p className="font-medium text-[#101828] tracking-tighter bricolage-grotesque">
          Compétences
        </p>
        <div className="flex flex-wrap gap-3">
          {!mission.skills?.length && (
            <p className="text-xs text-[#667085] italic">{NON_COMMUNIQUE}</p>
          )}
          {(mission.skills ?? []).map((skill, index) => (
            <div
              key={index}
              className="rounded-[0.375rem] px-2 py-0.75 border border-[#D0D5DD] bg-white text-xs text-[#344054]"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MissionDetailsProfile;
