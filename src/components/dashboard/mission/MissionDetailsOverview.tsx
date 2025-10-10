import React from 'react';
import { MissionDetails } from '@/types/mission/MissionDetails';

interface MissionDetailsOverviewProps {
  mission: MissionDetails;
}

const MissionDetailsOverview = ({ mission }: MissionDetailsOverviewProps) => {
  return (
    <div className="h-full bg-[#F4F9FF] py-6 px-8 flex flex-col gap-6 rounded-[2.188rem]">
      <p className="font-medium tracking-tighter text-3xl text-[#101828] bricolage-grotesque">
        Fiche de poste
      </p>
      <div className="w-full h-[1px] bg-[#EAECF0]" />

      <div className="flex flex-col gap-3">
        <p className="font-medium text-[#101828] tracking-tighter bricolage-grotesque">
          À propos de l’entreprise
        </p>
        <p className="text-[#475467]">{mission.companyBio}</p>
      </div>

      <div className="w-full h-[1px] bg-[#EAECF0]" />

      <p className="font-medium tracking-tighter text-3xl text-[#101828] bricolage-grotesque">
        Profil recherché
      </p>
      <div className="w-full h-[1px] bg-[#EAECF0]" />

      <div className="flex flex-col gap-3">
        <p className="font-medium text-[#101828] tracking-tighter bricolage-grotesque">
          Domaine d’invervention
        </p>
        <div className="flex flex-wrap gap-3">
          {mission.industry.map((industry, index) => (
            <div
              key={index}
              className="rounded-[0.375rem] px-2 py-0.75 border border-[#D0D5DD] bg-white text-xs text-[#344054]"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="font-medium text-[#101828] tracking-tighter bricolage-grotesque">
          Compétences
        </p>
        <div className="flex flex-wrap gap-3">
          {mission.skills.map((skill, index) => (
            <div
              key={index}
              className="rounded-[0.375rem] px-2 py-0.75 border border-[#D0D5DD] bg-white text-xs text-[#344054]"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-[1px] bg-[#EAECF0]" />

      <p className="font-medium tracking-tighter text-3xl text-[#101828] bricolage-grotesque">
        Informations sur le client
      </p>
      <div className="w-full h-[1px] bg-[#EAECF0]" />

      <div className="flex flex-col gap-3">
        <p className="font-medium text-[#101828] tracking-tighter bricolage-grotesque">
          Nom de l’entreprise
        </p>
        <div className="flex flex-wrap gap-3">
          <div className="rounded-[0.375rem] px-2 py-0.75 border border-[#D0D5DD] bg-white text-xs text-[#344054]">
            {mission.client}
          </div>
        </div>
      </div>
      {mission.linkedIn && (
        <div className="flex flex-col gap-3">
          <p className="font-medium text-[#101828] tracking-tighter bricolage-grotesque">
            Profil LinkedIn
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            <a
              href={mission.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[0.375rem] px-2 py-0.5 border border-[#D0D5DD] bg-white text-xs text-[#0A66C2] flex items-center gap-2"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4.98 3.5C4.98 4.604 4.05 5.5 2.99 5.5C1.93 5.5 1 4.604 1 3.5C1 2.396 1.93 1.5 2.99 1.5C4.05 1.5 4.98 2.396 4.98 3.5ZM.5 24H4.5V8.99H.5V24ZM8.5 8.99H12.24V10.9H12.3C12.92 9.84 14.55 8.73 16.79 8.73C21.11 8.73 22 11.6 22 15.7V24H18V16.5C18 14.76 17.98 12.42 15.27 12.42C12.54 12.42 12.16 14.44 12.16 16.38V24H8.5V8.99Z"
                  fill="#0A66C2"
                />
              </svg>
              <span className="underline">Voir le profil LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MissionDetailsOverview;
