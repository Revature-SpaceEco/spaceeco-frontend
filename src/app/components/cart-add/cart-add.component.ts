import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from 'src/app/models/Products';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'cart-add',
  templateUrl: './cart-add.component.html',
  styleUrls: ['./cart-add.component.css']
})
export class CartAddComponent implements OnInit {

  product: any;
  constructor(productService: ProductServiceService) { this.product = productService.getProductById}

  ngOnInit(): void {
    console.log(this.product)
  }
}
