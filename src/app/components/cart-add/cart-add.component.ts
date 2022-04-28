import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Products } from 'src/app/models/Products';
import { CartCheckoutService } from 'src/app/services/cart/cart-checkout.service';
import { ProductServiceService } from '../../services/product/product-service.service';

@Component({
  selector: 'cart-add',
  templateUrl: './cart-add.component.html',
  styleUrls: ['./cart-add.component.css']
})
export class CartAddComponent implements OnInit {
  item$: Observable<Products | undefined> ;

  constructor(
    private productService: ProductServiceService,
    private cartService: CartCheckoutService,
    ) {}

  ngOnInit(): void {

    this.item$ = this.cartService.getProductIdSelector();

  //   this.productService.getProductById(this.product.productId).subscribe((product) => {
  //     this.product = product;
  // })


  }

  addItem(item: Products) {
    this.cartService.addItem(item);
  }

}
