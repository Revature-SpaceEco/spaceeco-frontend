import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { Products } from "src/app/models/Products";


export const adapter: EntityAdapter<Products> = createEntityAdapter<Products>();
