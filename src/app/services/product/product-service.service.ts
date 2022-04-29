import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Products } from '../../models/Products';
import { User } from '../../models/User';
import { UserRole } from '../../models/UserRole';
import { ProductSelectors, ProductActions } from './state';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
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
    return this.http.get<Products>(`http://localhost:8080/products/${id}`);
    }

  getAllProducts(){
    return this.http.get<Products[]>(`http://localhost:8080/products`);
  }
}
