import { createFeatureSelector } from "@ngrx/store";
import { adapter } from './product.adapters';
import * as fromState from './product.state'




export const getProductState = createFeatureSelector<fromState.State>('productState');

export const {
    selectAll: selectAllProducts,
} = adapter.getSelectors(getProductState);
