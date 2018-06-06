import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home.component';
import { CardComponent } from './components/card/card.component';
import { DiagAddListComponent } from './components/diag-add-list/diag-add-list.component';

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

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
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
    DiagAddListComponent
  ],
  providers: [
    HomeService
  ],
  exports: [HomeComponent],
  entryComponents: [DiagAddListComponent]
})
export class DashboardModule { }
