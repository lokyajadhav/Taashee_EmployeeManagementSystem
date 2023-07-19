import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMeterialModule } from './angular-meterial/angular-meterial.module';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EmployeeInterceptor } from './employee.interceptor';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AccessModule } from './access/access.module';
import { authGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeesListComponent,
    HeaderComponent,
    HomeComponent,
    
  ],
  imports: [
    AccessModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMeterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [

    {

    provide: HTTP_INTERCEPTORS,
    useClass:EmployeeInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
