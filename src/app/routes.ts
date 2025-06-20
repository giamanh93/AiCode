import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            // Redirect to a default page
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
            {
                path: 'dashboard',
                loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
            },
            {
                path: 'customers',
                loadComponent: () => import('./pages/customers/customers.component').then(m => m.CustomersComponent)
            }
            // Add other routes here
        ]
    }
]; 