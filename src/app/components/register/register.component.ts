import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: any = {
    firstname: null,
    lastname: null,
    email: null,
    password: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor() {}
  //constructor(private authService: ServicesComponent) {}
  ngOnInit(): void {}
  onSubmit(): void {
    //  const { firstname, lastname, email, password } = this.form;
    //  this.authService.register(firstname, lastname, email, password).subscribe({
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
}
