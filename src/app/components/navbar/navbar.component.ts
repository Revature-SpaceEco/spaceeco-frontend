import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
  loggedIn!: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("jwt")) {
      this.loggedIn = true;
    }
    console.log(this.loggedIn);
  }

  ngDoCheck(): void {
    if (localStorage.getItem("jwt")) {
      this.loggedIn = true;
    }
  }
  logout(): void {
    localStorage.removeItem("jwt");
    this.loggedIn = false;
    this.router.navigate(['/login'])
  }


}
