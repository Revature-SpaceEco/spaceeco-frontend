import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { CartCheckoutService } from 'src/app/services/cart/cart-checkout.service';
import { ProductService} from '../../services/product/product.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

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
    private snackBarService: SnackbarService
    ) {}

  ngOnInit(): void {
    this.item$ = this.productService.getCurrentProduct();
  }

  addItem(item: Product) {
    this.cartService.addItem(item);
    this.snackBarService.success(`${item.name} successfully added to cart.`);
  }
}
