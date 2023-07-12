import { Component,OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  EmplolyeeList:any;
  constructor(private employeeService: EmployeesService){}
  ngOnInit(): void {
    this.employeeService.getEmployeesList().subscribe((data)=>
    {
      this.EmplolyeeList=data;
      console.log(this.EmplolyeeList)
    })
  }

}
