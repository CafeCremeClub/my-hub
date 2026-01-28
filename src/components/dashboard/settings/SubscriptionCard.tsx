import {useState} from "react";
import {formatDateToFRFormat} from "@/utils/formatDateToFRFormat";
import {GetCurrentSubscriptionResponse} from "@/types/settings/payment/GetCurrentSubscriptionResponse";
import CustomButton from "@/components/custom/CustomButton";
import {BanknoteX} from "lucide-react";
import CancelSubscriptionAlertDialog from "@/components/dashboard/settings/CancelSubscriptionAlertDialog";


interface SubscriptionCardProps {
    subscription: GetCurrentSubscriptionResponse
}

const SubscriptionCard = ({subscription}: SubscriptionCardProps) => {

    const [isCancelDialogOpen, setIsCancelDialogOpen] = useState<boolean>(false);

    return (
        <>
            <CancelSubscriptionAlertDialog
                isOpen={isCancelDialogOpen}
                onClose={() => setIsCancelDialogOpen(false)}
            />

            <div className="w-full max-w-xl border rounded-lg p-6 bg-white">
                <h3 className="text-lg font-semibold mb-2">Abonnement actuel</h3>
                <div className="grid grid-cols-2 gap-3 text-sm text-slate-700 mb-4">
                    <div className="flex flex-col">
                        <span className="text-xs text-slate-400">Statut</span>
                        <span
                            className={`font-medium ${subscription.status === 'active' ? 'text-green-600' : 'text-yellow-600'}`}>{subscription.status}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-slate-400">Début</span>
                        <span className="font-medium">{formatDateToFRFormat(subscription.startDate)}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-slate-400">Fin</span>
                        <span className="font-medium">{formatDateToFRFormat(subscription.endDate)}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-slate-400">Annulé le</span>
                        <span
                            className="font-medium">{subscription.canceledAt ? formatDateToFRFormat(subscription.canceledAt) : "-"}</span>
                    </div>
                </div>
                <CustomButton
                    icon={<BanknoteX/>}
                    className="w-full bg-red-600 border border-red-600 hover:bg-red-700"
                    onClick={() => setIsCancelDialogOpen(true)}
                >
                    Annuler l&#39;abonnement
                </CustomButton>
            </div>
        </>
    )
}

export default SubscriptionCard;