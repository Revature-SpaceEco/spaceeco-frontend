import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private client: HttpClient, private router: Router) {}

  register(
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): Observable<any> {
    return this.client.post<User>(`${environment.BACKEND_URL}/register`, {
      username,
      firstName,
      lastName,
      email,
      password,
    });
  }
}
