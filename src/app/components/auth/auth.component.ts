import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  @ViewChild('errorMsg') errorMsg: ElementRef;

  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    this.authService
      .login(username, password)
      .subscribe({
        next: (v) => {
          localStorage.setItem('jwt', v.body.jwt);
          localStorage.setItem('userId', v.body.userId);
          this.router.navigate(['/profile']);
        },
        error: (e) => {
          if (e.status == 403) {
            this.errorMsg.nativeElement.style.display = 'block';
          }
        },
      });
    form.reset();
  }

}
