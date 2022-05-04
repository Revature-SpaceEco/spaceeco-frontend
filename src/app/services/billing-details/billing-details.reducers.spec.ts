// import { BillingDetails } from "./../../models/BillingDetails";
// import { initialState, State } from "./state/billing.state";
// import * as fromReducer from './state/billing.reducers';
// import { addBillingDetails, clearBillingDetails } from "./state/billing.actions";


// describe('BillingReducer', () => {
//     let billingDetails: BillingDetails;

//     beforeEach(() => {
//         billingDetails = {
//             cardType: "test",
//             cardNumber: 1,
//             securityNumber: 1,
//             name: "name",
//             address: {
//                 id: 1,
//                 addressLineOne: "address",
//                 addressLineTwo: "address two",
//                 city: "city",
//                 state: "state",
//                 country: "country",
//                 zip: "312321",
//                 solarSystem: "solar system",
//                 planet: "planet",
//             },
//         }
//     });

//     describe('initial state', () => {
//         it('should return the initial state', () => {

//             const action = {
//                 type: 'Unknown'
//             };

//             const state = fromReducer.billingReducer(initialState, action)

//             expect(state).toBe(initialState);
//         })
//     });

//     describe('addBillingDetails action', () => {
//         it('should add billing information', () => {
//             const expectedState: State = {
//                 ...billingDetails,
//             }

//             const action = addBillingDetails({ billingDetails: billingDetails });
//             const state = fromReducer.billingReducer(initialState, action);

//             expect(state).toEqual(expectedState);
//             expect(state).not.toBe(initialState);
//         })
//     });


//     describe('clearBillingDetails action', () => {
//         it('should clear the current billing details', () => {
//             const currentState: State = {
//                 ...billingDetails,
//             }

//             const action = clearBillingDetails();
//             const state = fromReducer.billingReducer(currentState, action);

//             expect(state).toEqual(initialState);
//             expect(state).not.toBe(currentState);
//         })
//     })

// })