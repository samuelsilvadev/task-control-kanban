import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home.component';
import { CardComponent } from './components/card/card.component';
import { DiagAddListComponent } from './components/diag-add-list/diag-add-list.component';
import { DiagAddCardComponent } from './components/card/diag-add-card/diag-add-card.component';

import { HomeService } from './services/home.service';

import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatGridListModule,
  MatDialogModule,
  MatInputModule,
} from '@angular/material';
import { FormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule
  ],
  declarations: [
    HomeComponent,
    CardComponent,
    DiagAddListComponent,
    DiagAddCardComponent
  ],
  providers: [
    HomeService
  ],
  exports: [HomeComponent],
  entryComponents: [DiagAddListComponent, DiagAddCardComponent]
})
export class DashboardModule { }
