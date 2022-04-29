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
  jwt = localStorage.getItem("jwt");
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + this.jwt
    })
  };

  constructor(private http: HttpClient)
  { }
  userId : number = 1; //not final, get actually user ID in final

  postAddress(address: Address) {
    return this.http.post<Address>(URL + "/address/users/" + this.userId , address); //fix to pass in actually users ID.
  }

  getAddress(): Observable<Address> {
    console.log(this.jwt)
    return this.http.get<Address>(URL + '/users/' + this.userId + '/address',  
    {
      'headers': {
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      }
    }
);
  }

  putAddress(address: Address){
    return this.http.put<Address>(URL + '/address/users/' + this.userId, address);
  }
}
