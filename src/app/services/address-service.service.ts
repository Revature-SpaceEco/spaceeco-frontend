import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from '../models/Address';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const URL = environment.BACKEND_URL;

@Injectable({
  providedIn: 'root'
})
export class AddressServiceService {

  constructor(private http: HttpClient) 
  { }
  userId : number = 1; //not final, get actually user ID in final

  postAddress(address: Address) {
    return this.http.post<Address>(URL + "/address/users/" + this.userId , address); //fix to pass in actually users ID.
  }

  getAddress(): Observable<Address> {
    return this.http.get<Address>(URL + '/address/users/' + this.userId);
  }

  putAddress(address: Address){
    return this.http.put<Address>(URL + '/address/users/' + this.userId, address);
  }
}
