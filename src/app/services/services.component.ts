import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  client: any;
  constructor() {}

  register(
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ): Observable<any> {
    return this.client.post(`${environment.BACKEND_URL}/register`, {
      firstname,
      lastname,
      email,
      password,
    });
  }
  
  ngOnInit(): void {}
}
