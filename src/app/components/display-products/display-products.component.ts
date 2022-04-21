import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from 'src/app/models/Products';
import { User } from 'src/app/models/User';
import { UserRole } from 'src/app/models/UserRole';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {
  products!: Observable<Products[]>;
  user!: Observable<User[]>;
  userRole!: Observable<UserRole[]>;
  product: any;


  constructor(private http: HttpClient) { }

  
  getProducts(){
    this.products = this.http.get<Products[]>('http://localhost:8080/products');
  }
  
  getProductById(){
    this.product = this.http.get<Products>('http://localhost:8080/products/:id');
  }
  
  
  ngOnInit(): void {
    this.getProducts();
    console.log(this.getProducts);
  }

}
