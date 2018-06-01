import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showLoader = false;

  constructor(private _appService: AppService) {
  }

  ngOnInit() {
    this._appService.getStateLoader()
      .subscribe((data: boolean) => {
        this.showLoader = data;
      });
  }
}
