import { Product } from "./Product";
import { Address } from "./Address";
import { Payment } from "./Payment";

export interface Order {
  id: number;
  orderProducts: Product[];
  orderDate: number;
  orderStatus: string;
  shippingAddress: Address;
  orderPayment: Payment;
}