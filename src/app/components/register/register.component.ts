import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import { AuthService } from '../../services/auth/auth.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { switchMap } from 'rxjs/operators';
import { UserDTO } from 'src/app/models/UserDTO';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

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

  register() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).pipe(
        switchMap(response => {
          console.log(response);
          const dialogRef = this.dialog.open(QrDialog, {
            data: response,
          });
          return dialogRef.afterClosed();
        })
      ).subscribe({
        error: (err) => { console.log(err); },
        complete: () => {
          this.route.navigate(['/login']); 
        }
      });
    }
  }

}

@Component({
  selector: 'qr-dialog',
  templateUrl: 'qr-dialog.html',
  styleUrls: ['./register.component.css'],
})
export class QrDialog {
    qrCode: string;

    constructor(@Inject(MAT_DIALOG_DATA) public data: UserDTO) {}

    ngOnInit() {
      this.qrCode = this.data.qrCode;
      console.log(this.qrCode);
    }
}
