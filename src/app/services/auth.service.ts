import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {


  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string): Observable<any>{
    return this.httpClient.post(`
      ${environment.BACKEND_URL}/authenticate`,
      {
        'username': username,
        'password': password
      },
      {'observe':'response'}
    )
  }
}
