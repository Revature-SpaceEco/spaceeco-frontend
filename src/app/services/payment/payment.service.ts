import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from 'src/app/models/Payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  url: string = "http://localhost:8081";

  constructor(
    private http: HttpClient,
  ) { }

  addPayment(payment: Payment){
    //complete this code to add a payment
  }
  //
}
