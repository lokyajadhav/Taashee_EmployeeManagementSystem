import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { AuthService } from '../auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {

  constructor(public dialog: MatDialog, private authService: AuthService, private router:Router) {} 
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
    isLoggedIn()
    {
     return  this.authService.isLoggedIn()
    }
    getRole()
    {
      return this.authService.getRole();
    }
    logout()
    {
      this.authService.clear();
      alert("Successfully LoggedOut!! ");
      this.router.navigate(['/home']);
    }
}
