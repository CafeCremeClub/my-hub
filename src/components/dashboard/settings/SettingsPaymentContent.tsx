import React from 'react';
import useGetCurrentSubscription from '@/hooks/payment/useGetCurrentSubscription';
import SubscriptionCard from "@/components/dashboard/settings/SubscriptionCard";
import SettingsPaymentContentSkeleton from "@/components/dashboard/settings/SettingsPaymentContentSkeleton";
import PaymentFormSection from "@/components/dashboard/settings/PaymentFormSection";

const SettingsPaymentContent = () => {
    const {data, isPending, isError} = useGetCurrentSubscription();

    if (isPending) {
        return (
            <div className="flex justify-center items-center gap-6">
                <SettingsPaymentContentSkeleton/>
            </div>
        );
    }

    if (isError || !data) {
        return (
            <div className="flex justify-center items-center gap-6">
                <div className="w-full max-w-xl">
                    <h3 className="text-lg font-semibold mb-3">Gérer le mode de paiement</h3>
                    <PaymentFormSection/>
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center gap-6">
            {
                data ? (
                    <SubscriptionCard subscription={data}/>
                ) : null
            }
        </div>
    );
};

export default SettingsPaymentContent;