import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {

  constructor(public dialog: MatDialog) {} 
   ngOnInit(): void {
    
  }
  openDialog() {
    const dialogRef = this.dialog.open(LoginDialogComponent,{
      width:'34%'
      
    });
    
   
  }
  openDialogForEmpAdding()
    {
      const dialogRef = this.dialog.open(CreateEmployeeComponent,{
        width:'34%'
        
      });
    }
}
