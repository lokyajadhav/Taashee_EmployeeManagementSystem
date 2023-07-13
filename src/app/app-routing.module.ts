import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HomeComponent } from './home/home.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  {
    path:'addEmployee',component: CreateEmployeeComponent
  },
  {path:'updateEmployee',component: UpdateEmployeeComponent},
  {path:'getEmployees', component: EmployeesListComponent},
  {path:'employeeDetails/:employee_id',component: EmployeeDetailsComponent},
  {path:'home', component: HomeComponent},
  {path:'registerUser',component: RegisterUserComponent},
  {path:'**',redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
