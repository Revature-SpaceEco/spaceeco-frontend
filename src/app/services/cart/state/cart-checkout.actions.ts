import { createAction, props } from "@ngrx/store";
import { Products } from "src/app/models/Products";

export const addItemToCart = createAction('[Cart] Add Item to Cart', props<{item: Products}>());

export const clearCart = createAction('[Cart] Items Cleared from Cart');
