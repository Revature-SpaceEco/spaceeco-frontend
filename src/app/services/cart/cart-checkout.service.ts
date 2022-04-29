import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Cart } from '../../models/Cart';
import { Order } from '../../models/Order';
import { Product } from '../../models/Product';
import { CartActions } from './state';
import { CartSelectors }  from '../../services/cart/state';
import { selectCurrentRoute,  } from '../router/state/router.selectors';
import { selectRouteId } from './state/cart-checkout.selectors';
import { ProductSelectors } from '../product/state';

@Injectable({
  providedIn: 'root'
})
export class CartCheckoutService {

  url: string = "http://localhost:8081";

  constructor(
    private http: HttpClient,
    private store: Store<AppState>
    ) { }

  addItem(item: Product) {
    this.store.dispatch(CartActions.addItemToCart({item: item}));
  }

  getCart() {
    return this.store.select(CartSelectors.selectAllItems);
  }

  clearCart() {
    this.store.dispatch(CartActions.clearCart());
  }

  getProductIdSelector() {
    return this.store.select(ProductSelectors.selectItem);
  }

  getSubTotal() {
    return this.store.select(CartSelectors.selectSubTotal);
  }

  getCurrentRoute() {
    return this.store.select(selectCurrentRoute);
  }

  getRouteId() {
    return this.store.select(selectRouteId);
  }

  // completeCheckout(order: Order) {
  //   this.http.post<Order>(`${this.string}/orders`);
  //   this.clearCart();
  // }
}
