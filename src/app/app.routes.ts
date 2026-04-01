import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [

  {
    path : "",
    redirectTo : "home",
    pathMatch : "full"
  },
  {
    path : "home",
    // component  : Home
    loadComponent : () => import("./home/home").then(m => m.Home)

  },
  {
    path : "restaurant",
    loadComponent : () => import("./restaurant/restaurant").then(m => m.Restaurant)

  },
  {
    path : "todo",
    loadComponent : () => import("./todo/todo").then(m => m.Todo)

  },
  {
    path : "**",
    loadComponent : () => import("./error/error").then(m => m.Error)

  }
];



// eager routing 
// lazy loading