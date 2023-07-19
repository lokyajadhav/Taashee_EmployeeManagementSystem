import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }
  requestHeader=new   HttpHeaders({"No-Auth": "True"})
  getEmployeesList()
  {
    return this.http.get("http://localhost:8080/getEmployees")
  }
  getEmployee(employee_id:string)
  {
    
    return this.http.get(`http://localhost:8080/getEmployeeDetails/${employee_id}`);
  }
  deleteEmployee(employee_id:string)
  {
    return this.http.delete(`http://localhost:8080/deleteEmployee/${employee_id}`);
  }
  addEmployee(employeeData: any)
  {
    return this.http.post("http://localhost:8080/addEmployees",employeeData);
  }
  updateEmployee(employeeData: any)
  {
    return this.http.put("http://localhost:8080/updateEmployee",employeeData);
  }
  login(loginData: any)
  {
    return this.http.post("http://localhost:8080/authenticate",loginData,{headers:this.requestHeader});
  }
  register(Data: any)
  {
    return this.http.post("http://localhost:8080/register",Data,{headers:this.requestHeader});
  }
}
