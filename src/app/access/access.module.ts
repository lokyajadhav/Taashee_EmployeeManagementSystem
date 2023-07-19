import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessRoutingModule } from './access-routing.module';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { RegisterUserComponent } from '../register-user/register-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMeterialModule } from '../angular-meterial/angular-meterial.module';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    LoginDialogComponent,
    RegisterUserComponent
  ],
  imports: [
    CommonModule,
    AccessRoutingModule,
    ReactiveFormsModule,
    AngularMeterialModule,
    MatDialogModule
  ]
})
export class AccessModule { }
