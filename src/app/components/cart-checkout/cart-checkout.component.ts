import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/models/Products';
import { CartCheckoutService } from 'src/app/services/cart-checkout.service';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent implements OnInit {


  cart:Products[]=[];
  
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

  removeProductFromCart(item:Products){
    // const idx = this.cart.findIndex(product=>product==item);

    // if(idx > -1) {
    //   this.cart[idx] = 

    // }
  }
}
