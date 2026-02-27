import React from 'react';
import {
    AlertDialog,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from "@/components/ui/alert-dialog";
import CustomButton from "@/components/custom/CustomButton";
import {useQueryClient} from "@tanstack/react-query";
import useCancelSubscription from "@/hooks/payment/useCancelSubscription";
import {toast} from "sonner";

interface CancelSubscriptionAlertDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

const CancelSubscriptionAlertDialog = ({isOpen, onClose}: CancelSubscriptionAlertDialogProps) => {


    const queryClient = useQueryClient();
    const {
        isPending: isCancelingSubscription,
        mutateAsync: cancelSubscriptionAsync
    } = useCancelSubscription();

    const handleCancelSubscription = async () => {
        try {
            await cancelSubscriptionAsync();
            await queryClient.invalidateQueries({
                queryKey: ['current-subscription'],
                exact: false,
                refetchType: "all"
            });

            onClose();

            toast.success("Abonnement annulé avec succès", {
                position: 'bottom-right',
                className:
                    '!bg-[#CBF5E5] !text-[#176448] !border !border-[#CBF5E5]'
            });
        } catch (error) {
            console.log("Erreur lors de l'annulation de l'abonnement :", error);
            toast.error("Erreur lors de l'annulation de l'abonnement", {
                position: 'bottom-right',
                className: '!bg-[#DF1C41] !text-white'
            });
        }
    }

    return (
        <AlertDialog
            open={isOpen}
            onOpenChange={onClose}
        >
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Êtes-vous sûr de vouloir annuler votre abonnement ?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        En annulant votre abonnement, vous perdrez l&#39;accès aux
                        fonctionnalités premium à la fin de votre période de
                        facturation actuelle. Voulez-vous continuer ?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <CustomButton
                        className="bg-white border border-gray-200 shadow-none text-secondary-foreground hover:bg-gray-100"
                        onClick={onClose}
                    >
                        Annuler
                    </CustomButton>
                    <CustomButton
                        className="min-w-32 bg-red-500 border border-red-600 shadow-none hover:bg-red-600"
                        isLoading={isCancelingSubscription}
                        disabled={isCancelingSubscription}
                        onClick={handleCancelSubscription}
                    >
                        Confirmer
                    </CustomButton>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default CancelSubscriptionAlertDialog;