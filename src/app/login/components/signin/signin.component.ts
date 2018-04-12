import { Component, OnInit } from '@angular/core';

import { EmailPasswordCredentials } from './../../types/email-password-credentials.interface';
import { AuthService } from './../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  data: EmailPasswordCredentials = {} as EmailPasswordCredentials;

  constructor(public snackBar: MatSnackBar, private _auth: AuthService) { }

  ngOnInit() { }

  signIn() {
    this._auth.signInServer(this.data)
      .subscribe(
        (success) => {
          this.snackBar.open('Login done successfully', null, {
            duration: 2000,
          });
        },
        (error) => {
          this.snackBar.open('Something is wrong, try again!', error, {
            duration: 5000,
          });
        });
  }

}
