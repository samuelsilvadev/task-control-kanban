import { EmailPasswordCredentials } from './../types/email-password-credentials.interface';
import { Injectable } from '@angular/core';

import { AngularFireAuth, AUTH_PROVIDERS } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { fromPromise } from 'rxjs/observable/fromPromise';

@Injectable()
export class AuthService {

  constructor(
    private _afAuth: AngularFireAuth,
    private _db: AngularFireDatabase) { }

  public signInServer(data: EmailPasswordCredentials) {
    return fromPromise(this._emailLogin(data));
  }

  public signOut() {
    return fromPromise(this._afAuth.auth.signOut());
  }

  private _emailLogin(credentials: EmailPasswordCredentials) {
    return this._afAuth.auth
      .signInWithEmailAndPassword(credentials.email, credentials.password);
  }

}
