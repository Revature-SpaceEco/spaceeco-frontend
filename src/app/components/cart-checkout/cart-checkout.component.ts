import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartCheckoutService } from '../../services/cart/cart-checkout.service';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent implements OnInit {


  cart:Product[]=[];

  constructor(private cartCheckoutService: CartCheckoutService) { }

  ngOnInit(): void {
    this.addProductsToCart();
    console.log(this.cart);
  }

  addProductsToCart(){

    this.cartCheckoutService.addProductsToCart()
    .subscribe(products=>{
      products.forEach(product=>this.cart.push(product))
    })
  }

  removeProductFromCart(item:Product){
    // const idx = this.cart.findIndex(product=>product==item);

    // if(idx > -1) {
    //   this.cart[idx] =

    // }
  }
}
