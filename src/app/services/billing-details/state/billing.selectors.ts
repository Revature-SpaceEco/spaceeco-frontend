import { createFeatureSelector, createSelector  } from "@ngrx/store";
import { BillingDetails } from "src/app/models/BillingDetails";
import * as fromState from './billing.state';

export const getBillingDetailsState = createFeatureSelector<fromState.State>('billingState');

export const getBilling= createSelector(
  getBillingDetailsState,
  state => {
    let billing: BillingDetails = {
    id: state.id!,
    cardType: state.cardType!,
    cardNumber: state.cardNumber!,
    securityNumber: state.securityNumber!,
    name: state.name!,
    address: state.address!
    }
    return billing;
  }
);
