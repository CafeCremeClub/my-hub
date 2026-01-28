"use client";

import React, {useState} from 'react';
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import type {PaymentMethodResult} from '@stripe/stripe-js';
import CustomButton from "@/components/custom/CustomButton";
import {CreditCard} from "lucide-react";
import useAddPaymentMethod from "@/hooks/payment/useAddPaymentMethod";
import useCreateSubscription from "@/hooks/payment/useCreateSubscription";
import {toast} from "sonner";
import {useQueryClient} from "@tanstack/react-query";

interface PaymentFormSectionProps {
    onPaymentSuccess?: () => void;
}

const PaymentFormSection = ({onPaymentSuccess}: PaymentFormSectionProps) => {

    const stripe = useStripe();
    const elements = useElements();

    const queryClient = useQueryClient();
    const {
        isPending: isAddingPaymentMethod,
        mutateAsync: addPaymentMethodAsync
    } = useAddPaymentMethod();
    const {
        isPending: isCreatingSubscription,
        mutateAsync: createSubscriptionAsync
    } = useCreateSubscription();

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        if (loading) return;

        setLoading(true);

        try {
            const cardElement = elements.getElement(CardElement);
            if (!cardElement) {
                toast.error("Impossible de récupérer les informations de la carte", {
                    position: 'bottom-right',
                    className: '!bg-[#DF1C41] !text-white'
                });
                return;
            }

            const result = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement
            }) as PaymentMethodResult;

            const {error, paymentMethod} = result;

            if (error) {
                toast.error("Erreur lors de la création du moyen de paiement", {
                    position: 'bottom-right',
                    className: '!bg-[#DF1C41] !text-white'
                });
                setLoading(false);
                return;
            }

            if (!paymentMethod || !paymentMethod.id) {
                toast.error("Moyen de paiement invalide", {
                    position: 'bottom-right',
                    className: '!bg-[#DF1C41] !text-white'
                });
                return;
            }

            // Send the paymentMethod id to the backend to attach/store it
            await addPaymentMethodAsync({paymentMethodId: paymentMethod.id});
            // After successfully adding the payment method on the server, create the subscription
            await createSubscriptionAsync();

            await queryClient.invalidateQueries({
                queryKey: ['current-subscription'],
                exact: false,
                refetchType: "all"
            });

            if (onPaymentSuccess) {
                onPaymentSuccess();
            }

            toast.success('Abonnement créé avec succès', {
                description: "Merci pour votre confiance ! Vous pouvez maintenant profiter de toutes les fonctionnalités premium.",
                position: 'bottom-right',
                className:
                    '!bg-[#CBF5E5] !text-[#176448] !border !border-[#CBF5E5]',
                descriptionClassName: '!text-[#176448] !text-xs',
            });
        } catch (err) {
            console.log('Payment flow error:', err);
            toast.error("Une erreur est survenue lors du paiement", {
                position: 'bottom-right',
                className: '!bg-[#DF1C41] !text-white'
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <CardElement className="p-3 border rounded-md"/>
            <CustomButton
                type="submit"
                icon={<CreditCard/>}
                disabled={loading || !stripe}
                isLoading={loading || isAddingPaymentMethod || isCreatingSubscription}
            >
                Payer 9.90€ / mois
            </CustomButton>
        </form>
    );
};

export default PaymentFormSection;