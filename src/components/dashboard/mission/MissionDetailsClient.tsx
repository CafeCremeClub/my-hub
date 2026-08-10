import React from 'react';
import MissionOriginBadge from '@/components/dashboard/mission/MissionOriginBadge';
import {
  entrepriseAffichee,
  estAgregee,
  libelleEntreprise,
} from '@/lib/mission-origin';
import { MissionDetails } from '@/types/mission/MissionDetails';

interface MissionDetailsProps {
  mission: MissionDetails;
}

const MissionDetailsClient = ({ mission }: MissionDetailsProps) => {
  return (
    <div className="h-full bg-[#F4F9FF] py-6 px-8 flex flex-col gap-6 rounded-[2.188rem]">
      <p className="font-medium tracking-tighter text-3xl text-[#101828] bricolage-grotesque">
        {estAgregee(mission)
          ? 'Qui publie cette mission'
          : 'Informations sur le client'}
      </p>
      <div className="w-full h-[1px] bg-[#EAECF0]" />

      <div className="flex flex-col gap-3">
        <p className="font-medium text-[#101828] tracking-tighter bricolage-grotesque">
          {libelleEntreprise(mission)}
        </p>
        <div className="flex flex-wrap gap-3 items-center">
          <div className="rounded-[0.375rem] px-2 py-0.75 border border-[#D0D5DD] bg-white text-xs text-[#344054]">
            {entrepriseAffichee(mission)}
          </div>
          <MissionOriginBadge mission={mission} />
        </div>
        {/* Dire ce que le consultant regarde vraiment : la source expose
            l'intermediaire qui republie, pas l'entreprise chez qui il
            travaillera. */}
        {estAgregee(mission) && (
          <p className="text-xs text-[#667085]">
            Annonce repérée sur une plateforme publique. L’entreprise ci-dessus
            est celle qui publie l’annonce, elle n’est pas nécessairement le
            client final.
          </p>
        )}
      </div>

      {/*<div className="flex flex-col gap-3">
                <p className="font-medium text-[#101828] tracking-tighter bricolage-grotesque">
                    Secteur d’activité
                </p>
                <div className="flex flex-wrap gap-3">
                    <div
                        className="rounded-[0.375rem] px-2 py-0.75 border border-[#D0D5DD] bg-white text-xs text-[#344054]">
                        Banque et Assurance
                    </div>
                </div>
            </div>*/}
    </div>
  );
};

export default MissionDetailsClient;
