import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatTableModule
  ]
})
export class AngularMeterialModule { }
