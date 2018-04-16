import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { EmailPasswordCredentials } from './../../types/email-password-credentials.interface';
import { AuthService } from './../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  data: EmailPasswordCredentials = {} as EmailPasswordCredentials;
  signInForm = new FormGroup({
    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    passwordFormControl: new FormControl('', [Validators.required])
  });

  constructor(
    public snackBar: MatSnackBar,
    private _auth: AuthService,
    private _router: Router
  ) { }

  signIn() {
    this._auth.signInServer(this.data)
      .subscribe(
        (success) => {
          this.snackBar.open('Login done successfully', null, {
            duration: 2000,
          });
          this._router.navigate(['home']);
        },
        (error) => {
          this.snackBar.open('Something is wrong, try again! \n' + error, null, {
            duration: 5000,
          });
        });
  }
}
