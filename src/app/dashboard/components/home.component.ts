import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

import { HomeService } from './../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lists$;

  constructor(
    private _homeService: HomeService,
  ) { }

  ngOnInit() {
    this.lists$ = this._homeService.getLists().valueChanges();
  }
}
