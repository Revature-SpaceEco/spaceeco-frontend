import { createAction, props } from "@ngrx/store";
import { BillingDetails } from "src/app/models/BillingDetails";

export const addBillingDetails = createAction('[Billing Details] Add Billing Details Information', props<{billingDetails: BillingDetails}>());

export const clearBillingDetails = createAction('[Billing Details] Clear Billing Details Information');
