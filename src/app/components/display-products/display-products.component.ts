import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from 'src/app/models/Products';
import { User } from 'src/app/models/User';
import { UserRole } from 'src/app/models/UserRole';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {
  products!: Observable<Products[]>;
  user!: Observable<User[]>;
  userRole!: Observable<UserRole[]>;


  constructor(private http: HttpClient) { }

  
  getProducts(){
    this.products = this.http.get<Products[]>('http://localhost:8080/products');
  }
  
  
  
  ngOnInit(): void {
    this.getProducts();
    console.log(this.getProducts);
  }

}
