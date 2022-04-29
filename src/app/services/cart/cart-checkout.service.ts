import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../../models/Cart';
import { Product } from '../../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartCheckoutService {
  
  url: string = "http://localhost:8081";
  
  constructor(private http:HttpClient) { }

  addProductsToCart():Observable<Product[]>{
    return this.http.get<Product[]>(this.url+"/products");
  }

  // removeProductFromCart(item: Products):boolean{
  //   this.http.delete(`${this.url}/cart/${}`) 
  // }
}
