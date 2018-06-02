import { AppService } from './app.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  showLoader = false;

  constructor(private _appService: AppService) {
  }

  ngAfterViewInit() {
    this._appService.getStateLoader()
      .subscribe((data: boolean) => {
        this.showLoader = data;
      });
  }


}
