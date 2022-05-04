import { Address } from "./Address";
import { BillingDetails } from "./BillingDetails";
import { UserRole } from "./UserRole";

export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    userRole: UserRole;
    primaryAddress: Address;
    primaryBilling: BillingDetails;
    imageUrl: string;
    qrCode: string;
}
