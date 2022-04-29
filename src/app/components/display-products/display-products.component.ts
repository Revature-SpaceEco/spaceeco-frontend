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
  user!: Observable<User[]>;
  userRole!: Observable<UserRole[]>;
  product: any;


  constructor(private http: HttpClient, private router: Router) { }


  getProducts(){
    this.products = this.http.get<Product[]>('http://localhost:8080/products');
  }

  getProductById(){
    this.product = this.http.get<Product>('http://localhost:8080/products/:id');
  }

  selectProduct(productId: number){
    this.router.navigate(['/products', productId]);
  }


  ngOnInit(): void {
    this.getProducts();
    // console.log(this.getProducts);

    this.getProductById();
  }

}
