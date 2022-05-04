import { Address } from "../../../models/Address";

export interface State {
    cardType: string | null;
    cardNumber: number | null;
    securityNumber: number | null;
    name: string | null;
    address: Address | null;
}

export const initialState: State = {
    cardType: null,
    cardNumber: null,
    securityNumber: null,
    name: null,
    address: null,
};
