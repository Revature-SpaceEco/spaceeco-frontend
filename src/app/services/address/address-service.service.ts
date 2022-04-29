import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from '../../models/Address';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const URL = environment.BACKEND_URL;

@Injectable({
  providedIn: 'root'
})
export class AddressServiceService {
  userId= localStorage.getItem('userId');
  jwt = localStorage.getItem("jwt");

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + this.jwt,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding, X-Auth-Token'
    })
  };
  httpOptions2 = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + this.jwt,
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  postAddress(address: Address) {
    return this.http.post<Address>(URL + "/users/" + this.userId +'/address', address); 
  }

  getAddress(): Observable<Address> {
    console.log("get address call", this.jwt);
    return this.http.get<Address>(URL + '/users/' + this.userId + '/address', this.httpOptions2);
  }

  // getOrder(){
  //   console.log("GET orders!");
  //   this.http.get<any>(URL + '/users/' + this.userId + '/orders/1', this.httpOptions)
  //   .subscribe(data => console.log("calling get order", data))
  // }

  putAddress(address: Address) {
    return this.http.put<Address>(URL + '/users/' + this.userId +'/address', address);
  }
}
