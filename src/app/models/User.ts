import { UserRole } from "./UserRole";

export interface User {
    userId: number;
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    userRole: UserRole;
}
