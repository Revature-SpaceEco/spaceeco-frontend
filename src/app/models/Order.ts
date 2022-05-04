import { Product } from "./Product";
import { Address } from "./Address";
import { Payment } from "./Payment";
import { User } from "./User";

export interface Order {
  id: number;
  buyer: User;
  items: Product[];
  orderDate: number;
  orderStatus: string;
  shippingAddressId: Address;
  payment: Payment;
}