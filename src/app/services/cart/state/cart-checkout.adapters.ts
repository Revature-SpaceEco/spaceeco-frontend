import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { Product } from "src/app/models/Product";

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();
