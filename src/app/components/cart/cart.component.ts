import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartCheckoutService } from 'src/app/services/cart/cart-checkout.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() cart: Product[];
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