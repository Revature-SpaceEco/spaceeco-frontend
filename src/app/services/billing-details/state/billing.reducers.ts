import { Action, createReducer, on } from "@ngrx/store";
import * as fromState from "./billing.state";
import * as fromActions from "./billing.actions";

export const billingReducer = createReducer(
  fromState.initialState,
  on(fromActions.addBillingDetails, (state, {billingDetails}) => {
    return {
      ...state,
      cardType: billingDetails.cardType,
      cardNumber: billingDetails.cardNumber,
      securityNumber: billingDetails.securityNumber,
      name: billingDetails.name,
      address: billingDetails.address
    }
  }),
  on(fromActions.clearBillingDetails, state => {
    return {
      ...state,
      ...fromState.initialState,
    }
  }),
);


export function reducer(state: fromState.State | undefined, action: Action): fromState.State {
    return billingReducer(state, action);
  }
