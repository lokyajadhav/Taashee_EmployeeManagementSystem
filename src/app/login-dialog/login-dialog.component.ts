import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterUserComponent } from '../register-user/register-user.component';


@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent  implements OnInit{
  constructor(private fb: FormBuilder,private dialogRef: MatDialogRef<LoginDialogComponent>, private router: Router,private dialog: MatDialog){}
  loginForm!: FormGroup;
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
    
  }
  Login()
    {
      console.log('login successfull')
    }
    onClose() {
      this.dialogRef.close();
      const dialogRef = this.dialog.open(RegisterUserComponent,{
        width:'34%'
        
      });

        
      };
}
