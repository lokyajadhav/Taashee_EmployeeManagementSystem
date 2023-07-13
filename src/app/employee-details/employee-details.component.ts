import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit{
  EmployeeDetails!:any;
   id!:string;
  constructor(private route: ActivatedRoute, private employeeService: EmployeesService){}
  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      this.id = params['employee_id'];
      // Use the ID as needed
    });
    this.EmployeeDetails=this.employeeService.getEmployee(this.id).subscribe((data)=>{
      this.EmployeeDetails=data;
      console.log(this.EmployeeDetails);
    })
  }

  }


