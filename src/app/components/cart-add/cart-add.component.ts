import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Products } from 'src/app/models/Products';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'cart-add',
  templateUrl: './cart-add.component.html',
  styleUrls: ['./cart-add.component.css']
})
export class CartAddComponent implements OnInit {

  // productRouteId: any;
  // currentProduct: Products;
  // productService: any;
  
  constructor(productService: ProductServiceService, route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   this.productRouteId = params.get('id');
    // })
    // this.productService.getProductById().subscribe(product) =>{
    //   this.currentProduct = product;
    // }
  }

}
