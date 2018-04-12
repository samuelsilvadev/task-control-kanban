import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './login/components/signin/signin.component';

const appRoutes: Routes =
  [
    {
      path: '',
      component: SigninComponent
    }
  ];

export const ROUTES: ModuleWithProviders = RouterModule.forRoot(appRoutes);
