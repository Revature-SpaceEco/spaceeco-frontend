import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const URL = environment.BACKEND_URL;

@Injectable({
  providedIn: 'root'
})
export class AddressServiceService {

  constructor(private http: HttpClient) 
  { }
  userId : number = 1;

  postAddress(address: any) {
    return this.http.post<any>(URL + "/address/users/" + this.userId , address); //fix to pass in actually users ID.
  }

  getAddress(): Observable<any> {
    return this.http.get<any>(URL + 'address/users/' + this.userId);
  }

  putAddress(address: any){
    return this.http.put<any>(URL + 'address/users/' + this.userId, address);
  }
}
