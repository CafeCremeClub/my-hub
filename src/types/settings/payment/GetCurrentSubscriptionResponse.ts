export interface GetCurrentSubscriptionResponse {
    id: string;
    stripeSubscriptionId: string;
    status: string;
    stripePlanId: string;
    startDate: string;
    endDate: string;
    canceledAt: string | null;
}