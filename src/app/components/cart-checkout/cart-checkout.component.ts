import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../models/Product';
import { CartCheckoutService } from '../../services/cart/cart-checkout.service';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent implements OnInit {

  currentStep: number;
  cart:Product[]=[];
  itemsObservable: Observable<Product[]>
  shippingCost: number = 1.00;
  subTotal: number;


  constructor(
    private cartCheckoutService: CartCheckoutService) {
      this.itemsObservable = this.cartCheckoutService.getCart();

      this.itemsObservable.subscribe((items) => {
        items.forEach(item => this.cart.push(item))
      })
      this.cartCheckoutService.getSubTotal().subscribe(sub =>
        this.subTotal = sub
      );
    }

  ngOnInit(): void {
    this.currentStep = 1;  
  }

  // completeCheckout(order: Order) {
  //   this.cartCheckoutService.completeCheckout(order);
  // }
  
  // convert to ngrx selector
  // calculateSubTotal() {
  //   let sum = 0;
  //   this.cart.forEach(item => sum += item.cost);
  //   // this.subTotal = `$${sum.toFixed(2)}`;
  // }

  goToNextStep(step: number) {
    this.currentStep = step;
  }


}
