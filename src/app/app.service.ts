import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AppService {

  private _statusLoader: Subject<Boolean>;

  constructor() {
    this._statusLoader = new Subject<Boolean>();
  }

  getStateLoader() {
    return this._statusLoader.asObservable();
  }

  changeStateLoader(state: boolean) {
    this._statusLoader.next(state);
  }

}
