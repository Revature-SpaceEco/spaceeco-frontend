import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../models/Products';
import { User } from '../models/User';
import { UserRole } from '../models/UserRole';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  // products!: Observable<Products[]>;
  // user!: Observable<User[]>;
  // userRole!: Observable<UserRole[]>;
  // id: any;
    product: any;
    http: HttpClient;

  constructor(httpClient: HttpClient) {
    this.http = httpClient;
    this.product = this.http.get<Products>('http://localhost:8080/products/:id');
   }

   getProductById(){return this.product}


}
