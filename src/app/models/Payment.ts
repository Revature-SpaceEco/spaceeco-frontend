import { BillingDetails } from "./BillingDetails";

export interface Payment {
    id: number;
    paymentStatus: string;
    paymentBillingDetails: BillingDetails;
}