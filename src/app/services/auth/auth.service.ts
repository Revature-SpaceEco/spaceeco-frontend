import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserDTO, RegisterDTO } from 'src/app/models/UserDTO';

const url = environment.BACKEND_URL;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string, mfaCode: number ): Observable<any> {
    return this.httpClient.post<any>(
      url + '/authenticate',
      {
        username: username,
        password: password,
        mfaCode: mfaCode
      },
      { observe: 'response' }
    );
  }

  register(registerDTO: RegisterDTO): Observable<UserDTO> {
    return this.httpClient.post<UserDTO>(url + '/users', registerDTO);
  }
}
