import { BillingDetails } from "./BillingDetails";

export interface Payment {
    id: number;
    billingDetails: BillingDetails;
    status: string;
}