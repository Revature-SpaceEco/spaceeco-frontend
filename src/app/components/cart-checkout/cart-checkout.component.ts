import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from 'src/app/models/Products';
import { Order } from '../../models/Order';
import { CartCheckoutService } from '../../services/cart/cart-checkout.service';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent implements OnInit {


  cart:Products[]=[];
  itemsObservable: Observable<Products[]>
  subTotal: string;


  constructor(
    private cartCheckoutService: CartCheckoutService) {
      this.itemsObservable = this.cartCheckoutService.getCart();

      this.itemsObservable.subscribe((items) => {
        items.forEach(item => this.cart.push(item))
      })
    }

  ngOnInit(): void {
    this.calculateSubTotal();
  }

  // completeCheckout(order: Order) {
  //   this.cartCheckoutService.completeCheckout(order);
  // }

  calculateSubTotal() {
    let sum = 0;
    this.cart.forEach(item => sum += item.productCost);
    this.subTotal = `$${sum.toFixed(2)}`;
  }

  clearCart(){
    this.cartCheckoutService.clearCart();
  }

}
