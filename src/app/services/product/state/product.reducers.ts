import { Action, createReducer, on } from "@ngrx/store";
import * as fromState from './product.state';
import * as fromActions from './product.actions';
import { adapter } from "./product.adapters"

export const productReducer = createReducer(
    fromState.initialState,
    on(fromActions.loadProductsSuccess, (state, { catalogue }) => {
        return adapter.setAll(catalogue, state);
    })
);

export function reducer(state: fromState.State | undefined, action: Action): fromState.State {
    return productReducer(state, action);
}