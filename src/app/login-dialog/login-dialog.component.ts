import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterUserComponent } from '../register-user/register-user.component';
import { EmployeesService } from '../employees.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent  implements OnInit{
  constructor(private fb: FormBuilder,private dialogRef: MatDialogRef<LoginDialogComponent>, private router: Router,private dialog: MatDialog,private employeeService: EmployeesService, private authService: AuthService ){}
  loginForm!: FormGroup;
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:['',[Validators.required, Validators.minLength(5)]],
      password:['',[Validators.required, Validators.minLength(8)]]
    })
    
  }
  Login()
    {
      this.employeeService.login(this.loginForm.value).subscribe(
       {
        next:(data:any)=>{
          console.log(data);
          this.authService.setRole(data.user.role);
          this.authService.setToken(data.jwtToken);
          this.loginForm.reset();
          this.dialogRef.close();
        },
        error:(res)=>
        {
          alert("Invalid credentials! Please check your username and password!");

        }
       }
      )
    }
    onClose() {
      this.dialogRef.close();
      const dialogRef = this.dialog.open(RegisterUserComponent,{
        width:'34%'
        
      });

        
      };
}
