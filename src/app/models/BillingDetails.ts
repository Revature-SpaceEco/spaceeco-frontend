import { Address } from "./Address";

export interface BillingDetails {
  id: number;
  cardType: string;
  cardNumber: number;
  securityNumber: number;
  name: string;
  address: Address;
}
