import { createAction, props } from "@ngrx/store";
import { Products } from "../../../models/Products";

export const loadProducts = createAction('[API] Load Products from API');
export const loadProductsSuccess = createAction('[API] Load Products from API Success', props<{ catalogue: Products[] }>());
export const loadProductsFail = createAction('[API] Load Products from API Fail', props<{ message: string }>());
