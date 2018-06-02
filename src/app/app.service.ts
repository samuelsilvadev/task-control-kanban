import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AppService {

  private _statusLoader: Subject<Boolean>;
  private _internStateControl = false;

  constructor() {
    this._statusLoader = new Subject<Boolean>();
  }

  getStateLoader() {
    return this._statusLoader.asObservable();
  }

  changeStateLoader(state: boolean) {
    if (this._internStateControl !== state) {
      this._statusLoader.next(state);
    }
    this._internStateControl = state;
  }

}
