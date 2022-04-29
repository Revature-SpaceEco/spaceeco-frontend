import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/Product';
import { User } from '../../models/User';
import { UserRole } from '../../models/UserRole';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // products!: Observable<Products[]>;
  // user!: Observable<User[]>;
  // userRole!: Observable<UserRole[]>;

    http: HttpClient;

  constructor(httpClient: HttpClient) {
    this.http = httpClient;
   }

   getProductById(id: number){
     return this.http.get<Product>(`http://localhost:8080/products/${id}`);
    }


}
