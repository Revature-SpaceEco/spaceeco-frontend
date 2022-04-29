import { createFeatureSelector, createSelector  } from "@ngrx/store";
import { selectCurrentRoute } from "../../router/state/router.selectors";
import { adapter } from './cart-checkout.adapters';
import * as fromState from './cart-checkout.state';

export const getCartState = createFeatureSelector<fromState.State>('cartState');

export const {
    selectAll: selectAllItems,
    selectTotal: selectItemCount,
    selectEntities: selectItemEntities,
} = adapter.getSelectors(getCartState);

export const selectItem = createSelector(
    selectItemEntities,
    selectCurrentRoute,
    (items, route ) => items[route.params.id]
);

export const selectRouteId = createSelector(
    selectCurrentRoute,
    route => route.params.id
);

export const selectSubTotal = createSelector(
    selectAllItems,
    items => {
        let sum = 0;
        items.forEach(item => sum += item.cost)
        return sum;
    }
);
