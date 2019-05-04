import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'connect',
    component: AppComponent
  },
  {
    path: 'me',
    component: AppComponent
  },
  {
    path: 'discover',
    component: AppComponent
  }
];
