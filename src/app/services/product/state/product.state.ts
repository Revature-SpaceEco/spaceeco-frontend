import { EntityState } from "@ngrx/entity";
import { Product } from "../../../models/Product";
import { adapter } from "./product.adapters";

export interface State extends EntityState<Product> {

}

export const initialState: State = adapter.getInitialState();

