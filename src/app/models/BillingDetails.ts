import { Address } from "./Address";

export interface BillingDetails {
  cardType: string;
  cardNumber: number;
  securityNumber: number;
  name: string;
  address: Address;
}
