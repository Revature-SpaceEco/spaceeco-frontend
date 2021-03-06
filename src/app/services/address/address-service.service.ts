import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from '../../models/Address';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/User';

const URL = environment.BACKEND_URL;

@Injectable({
  providedIn: 'root'
})
export class AddressServiceService {
  userId= localStorage.getItem('userId');
  jwt = localStorage.getItem("jwt");

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding, X-Auth-Token'
    })
  };

  httpOptions2 = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  postAddress(address: any): Observable<Address> {
    console.log("address " + address.addressLineOne);
    return this.http.post<Address>(URL + "/users/" + this.userId +'/address', address); 
  }

  getAddress(): Observable<Address> {
    
    return this.http.get<Address>(URL + '/users/' + this.userId + '/address', this.httpOptions2);
  }


  putAddress(address: Address) {
    return this.http.put<Address>(URL + '/users/' + this.userId +'/address', address);
  }
}
