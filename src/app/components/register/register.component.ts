import { Component, OnInit } from '@angular/core';

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
  roles: Role[] = [
    { value: 1, viewValue: 'admin' },
    { value: 2, viewValue: 'buyer' },
    { value: 3, viewValue: 'seller' },
  ];

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
