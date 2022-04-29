import { createAction, props } from "@ngrx/store";
import { Product } from "../../../models/Product";

export const loadProducts = createAction('[API] Load Products from API');
export const loadProductsSuccess = createAction('[API] Load Products from API Success', props<{ catalogue: Product[] }>());
export const loadProductsFail = createAction('[API] Load Products from API Fail', props<{ message: string }>());
