import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { User } from 'src/app/models/User';
import { UserRole } from 'src/app/models/UserRole';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {
  products!: Observable<Product[]>;

  constructor(
    private productService: ProductService,
    private router: Router,
    ) { }


  getProducts(){
    this.productService.loadProductsFromApi();
    this.products = this.productService.selectAllProducts();
  }

  selectProduct(productId: number){
    this.router.navigate(['/products', productId]);
  }

  ngOnInit(): void {
    this.getProducts();

  }

}
