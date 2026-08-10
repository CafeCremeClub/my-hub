import React from 'react';
import {MissionDetails} from '@/types/mission/MissionDetails';
import CustomButton from '@/components/custom/CustomButton';
import {FaCircle} from 'react-icons/fa6';
import ApplyForMissionDialog from '@/components/dashboard/mission/ApplyForMissionDialog';
import {actionDeContact, libelleEntreprise} from '@/lib/mission-origin';
// PAYMENT DISABLED - subscription check commented out until paid plan is re-enabled
// import useGetCurrentSubscription from "@/hooks/payment/useGetCurrentSubscription";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
// PAYMENT DISABLED - router no longer needed without payment redirect
// import {useRouter} from "next/navigation";

interface MissionDetailsPageHeaderProps {
    mission: MissionDetails;
}

const MissionDetailsPageHeader = ({
                                      mission,
                                  }: MissionDetailsPageHeaderProps) => {

    // PAYMENT DISABLED - subscription check commented out until paid plan is re-enabled
    // const {isPending, isError} = useGetCurrentSubscription();
    // const router = useRouter();

    const [isApplyDialogOpen, setIsApplyDialogOpen] = React.useState(false);

    const client = mission.client?.trim();
    const contact = actionDeContact(mission);
    const combinedLabel = client ? `${mission.title} • ${client}` : mission.title;

    return (
        <>
            <ApplyForMissionDialog
                isOpen={isApplyDialogOpen}
                onClose={() => setIsApplyDialogOpen(false)}
                missionId={mission.id}
            />
            <div className="flex flex-wrap items-center justify-between gap-2">
                <h1
                    className="font-semibold tracking-tight text-balance text-2xl sm:text-3xl md:text-4xl bricolage-grotesque"
                    title={combinedLabel}
                >
                    <span className="text-[#1734B6]">{mission.title}</span>
                    {client && (
                        <>
              <span
                  className="mx-2 text-[#D0D5DD] text-xl sm:text-2xl md:text-3xl"
                  aria-hidden="true"
              >
                •
              </span>
                            <span className="text-[#667085] font-medium text-xl sm:text-2xl md:text-3xl">
                {client}
              </span>
                        </>
                    )}
                    <span className="sr-only">
            {client ? ` — ${libelleEntreprise(mission)} : ${client}` : ''}
          </span>
                </h1>
                <div className="flex items-center gap-3">
                    <div
                        className="flex justify-center items-center border border-[#D0D5DD] shadow-sm shadow-[#E4E5E73D] h-[2.75rem] px-3.5 text-[#344054] text-sm rounded-[0.5rem] gap-2 font-medium">
                        <FaCircle className="size-2.5 text-[#17B26A]"/>
                        {mission.applications || 0} candidats
                    </div>
                    {/* Sur une mission reperee ailleurs, Cafe Creme ne peut pas
                        recevoir la candidature : elle ne lui appartient pas. La
                        seule action honnete est de renvoyer vers l'annonce. */}
                    {contact.type === 'annonce' ? (
                        <CustomButton
                            onClick={() => window.open(contact.url, '_blank', 'noopener,noreferrer')}
                            className="min-w-40"
                        >
                            Voir l’annonce
                        </CustomButton>
                    ) : (
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <CustomButton
                                onClick={() => {
                                    // PAYMENT DISABLED - subscription gate removed; all consultants can apply for free
                                    // if (isError) {
                                    //     router.push('/dashboard/settings?tab=payment');
                                    //     return;
                                    // }
                                    setIsApplyDialogOpen(true)
                                }}
                                // PAYMENT DISABLED - loading state tied to subscription fetch removed
                                // isLoading={isPending}
                                className="min-w-40"
                            >
                                Postuler directement
                            </CustomButton>
                        </TooltipTrigger>
                        {/* PAYMENT DISABLED - subscription error tooltip commented out */}
                        {/* <TooltipContent
                            className={!isError ? 'hidden' : ''}
                        >
                            <p>
                                Vous devez avoir un abonnement actif pour postuler à cette mission.
                            </p>
                        </TooltipContent> */}
                    </Tooltip>
                    )}
                </div>
            </div>
        </>
    );
};

export default MissionDetailsPageHeader;
