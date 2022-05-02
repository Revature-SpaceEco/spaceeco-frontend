import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BillingDetails } from '../../models/BillingDetails';
import { environment } from '../../../environments/environment';

const URL = environment.BACKEND_URL;

@Injectable({
  providedIn: 'root'
})
export class BillingDetailsService {
  jwt = localStorage.getItem("jwt");
  userId = 1; //placeholder, need to use state
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + this.jwt
    })
  };

  constructor(private http: HttpClient) { }

  // post and get

  addBillingDetails(billing: BillingDetails) {
    return this.http.post<BillingDetails>(URL + "users/" + this.userId + "/billing", billing);
  }

  getBillingDetails(billingId: string) {
    return this.http.get<BillingDetails>(URL + "users/" + this.userId + "/billing" + billingId);
  }
}
