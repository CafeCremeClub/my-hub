"use client";

import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface StripeContextProps {
    children: React.ReactNode;
}

const StripeContext: React.FC<StripeContextProps> = ({children}) => {
    return (
        <Elements
            stripe={stripePromise}
            options={{
                locale: "fr"
            }}
        >
            {children}
        </Elements>
    );
};

export default StripeContext;