import { Category} from "./Category";
import { Seller } from "./Seller";


export interface Product{
    id: number;
    name: string;
    description: string;
    cost: number;
    categories: Category;
    image: string;
    seller: Seller;
}