import { Routes } from '@angular/router';
import { EmployeeCreateComponentComponent } from './employee-create-component/employee-create-component.component';
import { EmployeeListComponentComponent } from './employee-list-component/employee-list-component.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    
    {path: 'employees/create',component: EmployeeCreateComponentComponent},
    {path: 'employees', component: EmployeeListComponentComponent},
    

    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
];
