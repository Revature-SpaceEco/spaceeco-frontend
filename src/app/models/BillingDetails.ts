import { Address } from "./Address";

export interface BillingDetails {
  id: number;
  billingCardType: string;
  billingSecurityNumber: number;
  billingName: string;
  billingAddress: Address;
}