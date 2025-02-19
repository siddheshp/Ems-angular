import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { DepartmentComponent } from './components/department.component';

export const routes: Routes = [
  { path: 'departments', component: DepartmentComponent },
  { path: '', redirectTo: 'departments', pathMatch: 'full' } // Default route
];

export const appRoutingProviders = [provideRouter(routes)];
