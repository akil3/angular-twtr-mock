import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: ContentComponent
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
    path: 'messages',
    component: AppComponent
  },
  {
    path: 'settings',
    component: AppComponent
  },
  {
    path: 'compose',
    component: AppComponent
  },
  {
    path: 'discover/:id',
    component: AppComponent
  }
];
