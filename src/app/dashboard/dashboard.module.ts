import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home.component';
import { CardComponent } from './components/card/card.component';

import { HomeService } from './services/home.service';

import {
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatGridListModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule
  ],
  declarations: [
    HomeComponent,
    CardComponent
  ],
  providers: [
    HomeService
  ],
  exports: [HomeComponent]
})
export class DashboardModule { }
