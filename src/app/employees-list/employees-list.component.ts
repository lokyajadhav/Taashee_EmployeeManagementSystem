import { AfterViewInit, Component,OnInit, ViewChild } from '@angular/core';
import { EmployeesService } from '../employees.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';


@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit , AfterViewInit{
  EmplolyeeList:any;
  displayedColumns: string[] = ['employee_id', 'firstname',  'designation','Actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private employeeService: EmployeesService, private router: Router, private dialog: MatDialog){}
  ngOnInit(): void {
    this.getEmployeesList();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getEmployeesList()
  {
    this.employeeService.getEmployeesList().subscribe((data)=>
    {
      this.EmplolyeeList=data;
     this.dataSource=new MatTableDataSource<any>(this.EmplolyeeList);
     this.dataSource.paginator=this.paginator;
     this.dataSource.sort=this.sort;
      console.log(this.EmplolyeeList)
    })
  }
  goToEmployeeDetails(employeeId: String) {
    this.router.navigate(['/employeeDetails', employeeId]);
  }
  goToEmployeeDelete(employeeId: string) {
    this.employeeService.deleteEmployee(employeeId).subscribe(
    {
      next:(res)=>
      {
        
      this.getEmployeesList();
      alert("Employee Removed Successfully!")
      },
      error:()=>{
        alert('Something Went Wrong!');
      }
    })
  }
  ngAfterViewInit(): void {
    
  }
  getEditData(row:any)
  {
    const dialogRef = this.dialog.open(CreateEmployeeComponent,{
      width:'34%',
      data:row
      
    });
  }
  

}
