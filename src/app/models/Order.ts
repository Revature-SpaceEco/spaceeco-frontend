import { Products } from "./Products";
import { Address } from "./Address";
import { Payment } from "./Payment";

export interface Order {
  id: number;
  orderProducts: Products[];
  orderDate: number;
  orderStatus: string;
  shippingAddress: Address;
  orderPayment: Payment;
}