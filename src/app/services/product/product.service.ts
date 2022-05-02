import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Product } from '../../models/Product';
import { ProductSelectors, ProductActions } from './state';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // products!: Observable<Products[]>;
  // user!: Observable<User[]>;
  // userRole!: Observable<UserRole[]>;

    http: HttpClient;

  constructor(httpClient: HttpClient, private store: Store<AppState>) {
    this.http = httpClient;
  }

  loadProductsFromApi() {
    this.store.dispatch(ProductActions.loadProducts());
  }

  getProductById(id: number){
    return this.http.get<Product>(`http://localhost:8080/products/${id}`);
    }

  getAllProducts(){
    return this.http.get<Product[]>(`http://localhost:8080/products`);
  }

  selectAllProducts(){
    return this.store.select(ProductSelectors.selectAllProducts);
  }

  getCurrentProduct() {
    return this.store.select(ProductSelectors.selectItem);
  }

}
