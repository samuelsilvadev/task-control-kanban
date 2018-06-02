import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

import { HomeService } from './../services/home.service';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lists$;

  constructor(
    private _homeService: HomeService,
    private _appService: AppService
  ) { }

  ngOnInit() {
    this._appService.changeStateLoader(true);
    this.lists$ = this._homeService.getLists()
      .valueChanges()
      .map(data => {
        setTimeout(() => this._appService.changeStateLoader(false), 500);
        return data.sort((a: any, b: any) => a.order - b.order);
      });
  }
}
