import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private fb: FormBuilder,private dialogRef: MatDialogRef<RegisterUserComponent>, private dialog: MatDialog, private router: Router, private employeeService: EmployeesService, private authService: AuthService){}
  registerForm!:FormGroup;
  ngOnInit(): void {
    this.registerForm=this.fb.group({
      username:['',[Validators.required,Validators.minLength(8),]],
      email:['',[Validators.required,Validators.email]],
     
      mobile:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
      password:['',[Validators.required,Validators.minLength(8)]]

    })
    
  }
  Register(){
    this.employeeService.register(this.registerForm.value).subscribe(
      {
       next:(data:any)=>{
         console.log(data);
         this.registerForm.reset();
         this.dialogRef.close();
         alert("Registration Successfull!")
         const dialogRef = this.dialog.open(LoginDialogComponent,{
           width:'34%'
           
         });
       
       },
       error:(res)=>
       {
         alert("something went wrong");

       }
      }
     )
    

  }
  

}
