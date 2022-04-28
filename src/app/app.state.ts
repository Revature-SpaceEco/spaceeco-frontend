import { routerReducer, RouterReducerState } from "@ngrx/router-store";
import { ActionReducerMap } from "@ngrx/store";
import { CartReducers, CartState } from "./services/cart/state";
import { ProductReducers, ProductState } from "./services/product/state";

export interface AppState {
  cartState: CartState.State,
  router: RouterReducerState<any>,
  productState: ProductState.State,
}

export const reducers: ActionReducerMap<AppState> = {
  cartState: CartReducers.cartReducer,
  router: routerReducer,
  productState: ProductReducers.productReducer
}
