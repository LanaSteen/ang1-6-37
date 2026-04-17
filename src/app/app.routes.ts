import { Routes } from '@angular/router';
import { Home } from './home/home';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    // component  : Home
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: 'restaurant',
    loadComponent: () => import('./restaurant/restaurant').then((m) => m.Restaurant),
    canActivate : [authGuard]
  },
  {
    path: 'todo',
    loadComponent: () => import('./todo/todo').then((m) => m.Todo),
  },
  {
    path: 'details',
    loadComponent: () => import('./details/details').then((m) => m.Details),
  },
  {
    path: 'restaurantApi',
    loadComponent: () => import('./restaurant-api/restaurant-api').then((m) => m.RestaurantApi),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login').then((m) => m.Login),
  },
  {
    path: 'details/:id',
    loadComponent: () => import('./details/details').then((m) => m.Details),
  },
{
    path: 'loginapi',
    loadComponent: () => import('./login-api/login-api').then((m) => m.LoginApi),
  },
  
  {
    path: '**',
    loadComponent: () => import('./error/error').then((m) => m.Error),
  },
];

// eager routing
// lazy loading
