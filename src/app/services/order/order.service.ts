import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../../models/Order';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  jwt = localStorage.getItem("jwt");
  userId = 1; //placeholder, need to save uId in localStorage, then get
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + this.jwt
    })
  };
  URL = environment.BACKEND_URL +  "/users/" + this.userId + "/orders";

  constructor(private http: HttpClient) { }

  //get
  getAllOrders() {
    return this.http.get<Order[]>(this.URL)
  }
  // post
  addOrder(order: Order) {
    return this.http.post<Order>(this.URL, order);
  }
}
