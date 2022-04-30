import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BillingDetails } from 'src/app/models/BillingDetails';
import { environment } from 'src/environments/environment';

const URL = environment.BACKEND_URL;

@Injectable({
  providedIn: 'root'
})
export class BillingDetailsService {
  jwt = localStorage.getItem("jwt");
  userId = 1; //placeholder, need to save uId in localStorage, then get
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

}
