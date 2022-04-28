import { EntityState } from "@ngrx/entity";
import { Products } from "src/app/models/Products";
import { adapter } from "./cart-checkout.adapters";

export interface State extends EntityState<Products> {
  // no additional properties
}

export const initialState: State = adapter.getInitialState();
