import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Products } from 'src/app/models/Products';
import { CartCheckoutService } from 'src/app/services/cart/cart-checkout.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart:Products[]=[];
  @Output() nextStep = new EventEmitter<number>();

  constructor(private cartCheckoutService: CartCheckoutService) { }
  
  ngOnInit(): void {
  }

  clearCart(){
    this.cartCheckoutService.clearCart();
  }

  proceedToBilling() {
    this.nextStep.emit(2);
  }
}