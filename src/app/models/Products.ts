import { Categories } from "./Categories";
import { User } from "./User";


export interface Products{
    productId: number;
    productName: string;
    productDescription: string;
    productCost: number;
    categories: Categories[];
    productImage: string;
    productSellerId: User[];
}