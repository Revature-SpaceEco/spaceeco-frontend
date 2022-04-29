import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

interface Role {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  roles: Role[] = [
    { value: 1, viewValue: 'ROLE_BUYER' },
    { value: 2, viewValue: 'ROLE_SELLER' },
    { value: 3, viewValue: 'ROLE_ADMIN' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      userRole: [{ id: 1, role: 'ROLE_BUYER' }],
    });
  }

  onSubmit(): void {
    //  const { username, firstName, lastName, email, password } = this.form;
    //  this.authService.register(username, firstName, lastName, email, password).subscribe({
    //    next: (data) => {
    //      console.log(data);
    //      this.isSuccessful = true;
    //      this.isSignUpFailed = false;
    //    },
    //    error: (err) => {
    //      this.errorMessage = err.error.message;
    //      this.isSignUpFailed = true;
    //    },
    //  });
  }

  register() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe({
        next: (res) => {
          alert(res);

          // log the user in automatically after registration process
          const un = this.registerForm.value.username;
          const pw = this.registerForm.value.password;
          this.login(un, pw);
        },
        error: (err) => {
          alert(err.error);
        },
      });
    }
  }

  login(username: string, password: string) {
    this.authService.login(username, password).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('jwt', res.body.jwt);
        this.route.navigate(['/profile']);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
