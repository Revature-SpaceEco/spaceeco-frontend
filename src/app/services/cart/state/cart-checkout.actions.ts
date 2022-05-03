import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/models/Product";

export const addItemToCart = createAction('[Cart] Add Item to Cart', props<{item: Product}>());

export const clearCart = createAction('[Cart] Items Cleared from Cart');

export const removeFromCart = createAction('[Cart] Remove Item from Cart', props<{item: Product}>());
