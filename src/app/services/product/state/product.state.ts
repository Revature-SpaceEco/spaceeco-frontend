import { EntityState } from "@ngrx/entity";
import { Products } from "../../../models/Products";
import { adapter } from "./product.adapters";

export interface State extends EntityState<Products> {

}

export const initialState: State = adapter.getInitialState();
export function State(arg0: string) {
  throw new Error("Function not implemented.");
}

