<<<<<<< HEAD
import { HttpClient, HttpHeaders } from '@angular/common/http';
=======
import { HttpClient } from '@angular/common/http';
>>>>>>> b77640b55640e1fd8e285e37903ae286200cb966
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const url = environment.BACKEND_URL;

@Injectable({
  providedIn: 'root',
})
export class UserService {

  userId = localStorage.getItem('userId');
  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding, X-Auth-Token'
    })
  }; 

  getUserById(): Observable<any> {
    return this.httpClient.get<any>(url + '/users/' + this.userId,
                                   this.httpOptions);
  }

}
