import { EntityState } from "@ngrx/entity";
import { Product } from "src/app/models/Product";
import { adapter } from "./cart-checkout.adapters";

export interface State extends EntityState<Product> {
  // no additional properties
}

export const initialState: State = adapter.getInitialState();
