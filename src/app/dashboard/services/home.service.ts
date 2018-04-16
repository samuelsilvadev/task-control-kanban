import { TABLES_NAME } from './../../tables';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

  constructor(private _db: AngularFireDatabase) { }

  getLists() {
    return this._db.list('lists');
  }
}
