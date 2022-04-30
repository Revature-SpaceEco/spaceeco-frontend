import { Address } from "./Address";

export interface BillingDetails {
  id: number;
  billingCardType: string;
  billingCardNumber: number;
  billingSecurityNumber: number;
  billingName: string;
  billingAddress: Address;
}