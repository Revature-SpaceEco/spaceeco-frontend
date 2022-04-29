import { Categories } from "./Categories";
import { Seller } from "./Seller";


export interface Products{
    productId: number;
    productName: string;
    productDescription: string;
    productCost: number;
    categories: Categories[];
    productImage: string;
    sellerInfo: Seller[];
}