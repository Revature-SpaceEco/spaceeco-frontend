import { Address } from "../../../models/Address";

export interface State {
    id: number | null;
    cardType: string | null;
    cardNumber: number | null;
    securityNumber: number | null;
    name: string | null;
    address: Address | null;
}

export const initialState: State = {
    id: null,
    cardType: null,
    cardNumber: null,
    securityNumber: null,
    name: null,
    address: null,
};
