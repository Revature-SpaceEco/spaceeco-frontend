import { createFeatureSelector, createSelector } from "@ngrx/store";
import { selectCurrentRoute } from "../../router/state/router.selectors";
import { adapter } from './product.adapters';
import * as fromState from './product.state'


export const getProductState = createFeatureSelector<fromState.State>('productState');

export const {
    selectAll: selectAllProducts,
    selectEntities: selectProductEntities,
} = adapter.getSelectors(getProductState);

export const selectItem = createSelector(
    selectProductEntities,
    selectCurrentRoute,
    (items, route ) => items[route.params.id]
);