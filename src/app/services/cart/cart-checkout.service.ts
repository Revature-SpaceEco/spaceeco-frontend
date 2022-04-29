import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../../models/Cart';
import { Products } from '../../models/Products';

@Injectable({
  providedIn: 'root'
})
export class CartCheckoutService {
  
  url: string = "http://localhost:8081";
  
  constructor(private http:HttpClient) { }

  addProductsToCart():Observable<Products[]>{
    return this.http.get<Products[]>(this.url+"/products");
  }

  // removeProductFromCart(item: Products):boolean{
  //   this.http.delete(`${this.url}/cart/${}`) 
  // }
}
