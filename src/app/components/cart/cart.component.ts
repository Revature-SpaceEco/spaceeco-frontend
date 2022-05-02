import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { CartCheckoutService } from 'src/app/services/cart/cart-checkout.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() cart: Product[];
  @Output() nextStep = new EventEmitter<number>();
  currentCart: Product[];

  constructor(private cartCheckoutService: CartCheckoutService) {
}
  
  ngOnInit(): void {
    this.currentCart = this.cart.slice();
  }

  clearCart(){
    this.cartCheckoutService.clearCart();
  }

  proceedToBilling() {
    this.nextStep.emit(2);
  }

  removeFromCart(item: Product) {
    this.cartCheckoutService.removeFromCart(item);
    let index = this.currentCart.indexOf(item);
    this.currentCart.splice(index, 1);
    console.log(this.currentCart);
  }
}