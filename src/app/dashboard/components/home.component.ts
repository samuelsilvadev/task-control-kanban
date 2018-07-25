import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { MatDialog } from '@angular/material';

import { DiagAddListComponent } from './diag-add-list/diag-add-list.component';

import { AuthService } from './../../login/services/auth.service';
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
    private _authService: AuthService,
    private _appService: AppService,
    private _router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this._appService.changeStateLoader(true);
    this.lists$ = this._homeService.getLists()
      .valueChanges()
      .map(data => {
        setTimeout(() => this._appService.changeStateLoader(false), 500);
        return data.sort((a: any, b: any) => a.order - b.order);
      }).map(data => {
        window.localStorage.setItem('QTDE_LIST', JSON.stringify(data.length || 0));
        return data;
      });
  }

  signOut() {
    this._authService.signOut()
      .subscribe(() => {
        this._router.navigate(['']);
      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DiagAddListComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
