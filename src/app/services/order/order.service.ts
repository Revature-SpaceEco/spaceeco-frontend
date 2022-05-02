import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../../models/Order';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  userId = localStorage.getItem('userId');
  URL = environment.BACKEND_URL +  "/users/" + this.userId + "/orders";

  constructor(private http: HttpClient) { }

  //get
  getCreatedOrder() {
    return this.http.get<Order>(this.URL)
  }
  // post
  addOrder(order: Order) {
    return this.http.post<Order>(this.URL, order);
  }
}
