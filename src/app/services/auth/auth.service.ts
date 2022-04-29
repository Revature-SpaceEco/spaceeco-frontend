import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

const url = environment.BACKEND_URL;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string, totp: number ): Observable<any> {
    return this.httpClient.post<any>(
      url + '/authenticate',
      {
        username: username,
        password: password,
        totp: totp
      },
      { observe: 'response' }
    );
  }

  register(data: any): Observable<any> {
    return this.httpClient.post(url + '/users', data, { responseType: 'text' });
  }
}
