import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './login/components/signin/signin.component';
import { HomeComponent } from './dashboard/components/home.component';

const appRoutes: Routes =
  [
    {
      path: '',
      component: SigninComponent
    },
    {
      path: 'home',
      component: HomeComponent
    }
  ];

export const ROUTES: ModuleWithProviders = RouterModule.forRoot(appRoutes);
