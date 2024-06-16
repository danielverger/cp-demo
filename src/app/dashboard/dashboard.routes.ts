import { Routes } from '@angular/router';
import { categoriesRoutes } from '../categories/categories.routes';

export const dashboardRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dashboard.component').then(c => c.DashboardComponent),
    children: [
      {
        path: 'users',
        loadChildren: () =>
          import('../users/users.routes').then(r => r.usersRoutes),
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('../categories/categories.routes').then(
            r => r.categoriesRoutes
          ),
      },
    ],
  },
];
