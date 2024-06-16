import { Routes } from '@angular/router';
import { CategoriesListComponent } from './categories-list/categories-list.component';

export const categoriesRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./categories-list/categories-list.component').then(
        c => c.CategoriesListComponent
      ),
    // children: [{
    // path: 'users',  loadChildren: () => import('./../users/users.routes').then(r => r.heroesRoutes)
    // }]
  },
];
