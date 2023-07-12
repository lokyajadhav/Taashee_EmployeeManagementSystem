import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  getEmployeesList()
  {
    return this.http.get("http://localhost:8080/getEmployees")
  }
}
