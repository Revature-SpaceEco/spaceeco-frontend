import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService} from '../../services/product/product.service';

@Component({
  selector: 'cart-add',
  templateUrl: './cart-add.component.html',
  styleUrls: ['./cart-add.component.css']
})
export class CartAddComponent implements OnInit {
  productService: ProductService;
  product: any;
  public productId: any;

  constructor(productService: ProductService, private route: ActivatedRoute) {this.productService = productService}

  ngOnInit(): void {

    let id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.productId = id;

    this.productService.getProductById(this.productId).subscribe((product) => {
     this.product = product;
   })



    console.log(this.product)
  }
}