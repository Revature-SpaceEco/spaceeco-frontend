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
  shippingCost: number = 0;
  subTotal: number = 0.00;


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
<<<<<<< Updated upstream
    this.currentStep = 1;
=======
    this.currentStep = 1; 
>>>>>>> Stashed changes
  }

  goToNextStep(step: number) {
    this.currentStep = step;
    if(step > 1) {
      this.shippingCost = 1;
    }
  }
}
