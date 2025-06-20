import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CustomersComponent } from './pages/customers/customers.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'customers', component: CustomersComponent }, // Placeholder
      { path: 'products', component: DashboardComponent }, // Placeholder
      { path: 'orders', component: DashboardComponent }, // Placeholder
      { path: 'reports', component: DashboardComponent }, // Placeholder
      { path: 'settings', component: DashboardComponent }, // Placeholder
    ]
  },
  { path: '**', redirectTo: '' }
];
