import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Cart } from '../../models/Cart';
import { Products } from '../../models/Products';
import { CartActions } from './state';

@Injectable({
  providedIn: 'root'
})
export class CartCheckoutService {

  url: string = "http://localhost:8081";

  constructor(
    private http: HttpClient,
    private store: Store<AppState>
    ) { }

  addItem(item: Products) {
    this.store.dispatch(CartActions.addItemToCart({item: item}));
  }

  addProductsToCart():Observable<Products[]>{
    return this.http.get<Products[]>(this.url+"/products");
  }

  // removeProductFromCart(item: Products):boolean{
  //   this.http.delete(`${this.url}/cart/${}`)
  // }
}
