import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Mission } from '@/types/mission/Mission';
import { MissionDetails } from '@/types/mission/MissionDetails';
import { estAgregee } from '@/lib/mission-origin';

/**
 * Dit d'où vient la mission, en un coup d'œil.
 *
 * MyHub promet aux consultants des missions off-market. Une partie du catalogue
 * est repérée sur des sources publiques : les mélanger sans le dire viderait la
 * promesse de son sens, et noierait les missions du réseau dans la masse.
 *
 * Le parti pris d'affichage suit cette hiérarchie : les missions du réseau sont
 * mises en avant, les missions repérées ailleurs sont signalées sobrement.
 */
export default function MissionOriginBadge({
  mission,
  className = '',
}: {
  mission: Partial<Mission> & Partial<MissionDetails>;
  className?: string;
}) {
  if (estAgregee(mission)) {
    return (
      <Badge
        variant="secondary"
        className={`border rounded-full py-1 font-normal bg-[#F2F4F7] border-[#D0D5DD] text-[#475467] ${className}`}
        title="Annonce publiée sur une plateforme publique, repérée pour vous."
      >
        Repérée ailleurs
      </Badge>
    );
  }

  return (
    <Badge
      variant="default"
      className={`border rounded-full py-1 font-normal bg-[#ECFDF3] border-[#ABEFC6] text-[#067647] ${className}`}
      title="Mission du réseau Café Crème, non diffusée publiquement."
    >
      Réseau Café Crème
    </Badge>
  );
}
