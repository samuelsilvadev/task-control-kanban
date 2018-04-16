import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatGridListModule } from '@angular/material/grid-list';

import { HomeComponent } from './components/home.component';

import { HomeService } from './services/home.service';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule
  ],
  declarations: [HomeComponent],
  providers: [HomeService],
  exports: [HomeComponent]
})
export class DashboardModule { }
