import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setRole(role:string)
  {
    localStorage.setItem("role",role);
  }
  getRole()
  {
    return localStorage.getItem("role");
  }
  setToken(jwtToken: string)
  {
    localStorage.setItem("jwtToken",jwtToken);
  }
  getToken()
  {
    return localStorage.getItem("jwtToken");
  }
  clear()
  {
    localStorage.clear();
  }
  public isLoggedIn()
  {
    return this.getRole() && this.getToken();
  }
  
}
