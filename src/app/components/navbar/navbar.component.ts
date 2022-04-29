import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn!: boolean;

  constructor(private router: Router) { }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }

  ngOnInit(): void {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      const jwtObj = this.getDecodedAccessToken(jwt);
      const now = Date.now();
      // if expired
      if (now > jwtObj.exp*1000) {
        localStorage.removeItem("jwt"); 
        localStorage.removeItem("userId");
        this.loggedIn = false;
      } else {
        this.loggedIn = true;  
      }
    }
  }

  ngDoCheck(): void {
    if (localStorage.getItem("jwt")) {
      this.loggedIn = true;
    }
  }

  logout(): void {
    localStorage.removeItem("jwt");
    localStorage.removeItem("userId");
    this.loggedIn = false;
    this.router.navigate(['/login'])
  }


}
