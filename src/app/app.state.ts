import { ActionReducerMap } from "@ngrx/store";
import { CartReducers, CartState } from "./services/cart/state";

export interface AppState {
  cartState: CartState.State
}

export const reducers: ActionReducerMap<AppState> = {
  cartState: CartReducers.cartReducer
}
