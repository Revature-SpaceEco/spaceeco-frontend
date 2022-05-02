import { Action, createReducer, on } from "@ngrx/store";
import * as fromState from './cart-checkout.state';
import * as fromActions from './cart-checkout.actions';
import { adapter } from "./cart-checkout.adapters";

export const cartReducer = createReducer(
  fromState.initialState,
  on(fromActions.addItemToCart, (state, {item}) => {
    return adapter.addOne(item, state);
  }),
  on(fromActions.clearCart, (state) => {
    return adapter.removeAll(state);
  }),
  on(fromActions.removeFromCart, (state, item) => {
    return adapter.removeOne(item.item.id, state);
  })
);

export function reducer(state: fromState.State | undefined, action: Action): fromState.State {
  return cartReducer(state, action);
}
