import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import { AuthService } from '../../services/auth/auth.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  qrimage: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: Router,
    private snackbar: SnackbarService,
    private dialog: MatDialog
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

  onSubmit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(QrDialog);

    dialogRef.afterClosed().subscribe(() => {
      this.register();
    })
  }

  register() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe({
        next: (res) => {
          this.snackbar.success(res);
          this.qrimage = JSON.parse(res)[1];
          
          // this.qrimage=res.
          // log the user in automatically after registration process
          const un = this.registerForm.value.username;
          const pw = this.registerForm.value.password;
          // this.login(un, pw);
        },
        error: (err) => {
          this.snackbar.error(err.error);
        },
      });
    }
  }

  // login(username: string, password: string,) {
  //   this.authService.login(username, password).subscribe({
  //     next: (res) => {
  //       localStorage.setItem('jwt', res.body.jwt);
  //       this.route.navigate(['/profile']);
  //     },
  //     error: (e) => {
  //       console.log(e);
  //     },
  //   });
  // }
}

@Component({
  selector: 'qr-dialog',
  templateUrl: 'qr-dialog.html',
})
export class QrDialog {}
