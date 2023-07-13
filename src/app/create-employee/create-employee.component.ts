import { Component ,Inject,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog ,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RegisterUserComponent } from '../register-user/register-user.component';
import { EmployeesService } from '../employees.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit{

   constructor(private fb: FormBuilder,private dialogRef: MatDialogRef<CreateEmployeeComponent>, private dialog: MatDialog, private employeeService: EmployeesService, private route: Router, @Inject(MAT_DIALOG_DATA) public editData:any){}
  registerForm!:FormGroup;
  btnC:String="Add Epmloyee";
  ngOnInit(): void {
    this.registerForm=this.fb.group({
      employee_id:['',[Validators.required,Validators.minLength(8),]],
      firstname:['',[Validators.required]],
      lastname:['',Validators.required],
      designation:['',[Validators.required]],
      qualification:['',[Validators.required]],
      age:['',[Validators.required]],
      address:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(8)]]

    })
    
    if(this.editData)
    {
      this.btnC="Edit Employee"
      this.registerForm.controls['employee_id'].setValue(this.editData.employee_id);
      this.registerForm.controls['firstname'].setValue(this.editData.firstname);
      this.registerForm.controls['lastname'].setValue(this.editData.lastname);
      this.registerForm.controls['designation'].setValue(this.editData.designation);
      this.registerForm.controls['qualification'].setValue(this.editData.qualification);
      this.registerForm.controls['age'].setValue(this.editData.age);
      this.registerForm.controls['address'].setValue(this.editData.address);
      this.registerForm.controls['password'].setValue(this.editData.password);
    }
    
  }
  addEmployee()
  {
    if(!this.editData)
    {
      if(this.registerForm.valid)
    {
      this.employeeService.addEmployee(this.registerForm.value).subscribe(
      {
        next:(data)=>{
          alert("Employee Added Successfully!")
        this.registerForm.reset();
        this.dialogRef.close();
        this.route.navigate(['/home'])
        },
        error:()=>
        {
          alert("something went wrong")
        }

      }
      );
    }
    }
    else{
      this.employeeService.updateEmployee(this.registerForm.value).subscribe(
        {
          next:(data)=>{
            alert("Employee Updated Successfully!")
          this.registerForm.reset();
          this.dialogRef.close();
          this.route.navigate(['/home'])
          },
          error:()=>
          {
            alert("something went wrong")
          }
  
        }
        );
    }
  }
}
