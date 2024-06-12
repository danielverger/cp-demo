import { Routes } from "@angular/router";
import { UsersListComponent } from './users-list/users-list.component';

export const usersRoutes: Routes = [
  {path: '', loadComponent: () => import('./users-list/users-list.component').then(c => c.UsersListComponent),
    // children: [{
    // path: 'users',  loadChildren: () => import('./../users/users.routes').then(r => r.heroesRoutes)
    // }]
  }
]
