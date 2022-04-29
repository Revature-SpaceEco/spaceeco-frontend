import { Category} from "./Category";
import { Seller } from "./Seller";


export interface Product{
    id: number;
    name: string;
    description: string;
    cost: number;
    category: Category;
    image: string;
    sellerInfo: Seller;
}