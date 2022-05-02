import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/Product';
import { CartCheckoutService } from '../../services/cart/cart-checkout.service';
import { ProductService} from '../../services/product/product.service';

@Component({
  selector: 'cart-add',
  templateUrl: './cart-add.component.html',
  styleUrls: ['./cart-add.component.css']
})
export class CartAddComponent implements OnInit {
  item$: Observable<Product | undefined> ;

  constructor(
    private productService: ProductService,
    private cartService: CartCheckoutService,
    ) {}

  ngOnInit(): void {
    this.item$ = this.cartService.getProductIdSelector();
    this.cartService.getRouteId().subscribe(
      route => console.log(route)
    );
  }

  addItem(item: Product) {
    this.cartService.addItem(item);
  }
}
