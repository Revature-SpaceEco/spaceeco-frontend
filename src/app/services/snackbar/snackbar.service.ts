import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private _snackBar: MatSnackBar) {}

  error(message: string) {
    return this._snackBar.open(message, undefined, {
      panelClass: ['snackbar-error'],
      duration: 3000,
      verticalPosition: 'top',
    });
  }

  success(message: string) {
    return this._snackBar.open(message, undefined, {
      panelClass: ['snackbar-success'],
      duration: 3000,
      verticalPosition: 'top',
    });
  }

  info(message: string) {
    return this._snackBar.open(message, undefined, {
      panelClass: ['snackbar-info'],
      duration: 3000,
      verticalPosition: 'top',
    });
  }
}
