import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    this.authService
      .login(username, password)
      .subscribe({
        next: (v) => {
          console.log(v)
          localStorage.setItem('jwt', v.body.jwt);
        },
        error: (e) => {
          console.log(e)
        },
      });
    form.reset();
  }

}
