import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full' },
    {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.routes').then(r => r.dashboardRoutes)},
    {path: 'login', loadComponent: () => import('./auth/login/login.component').then(r => r.LoginComponent)},
    {path: 'forgot', loadComponent: () => import('./auth/login/login.component').then(r => r.LoginComponent)},
];
