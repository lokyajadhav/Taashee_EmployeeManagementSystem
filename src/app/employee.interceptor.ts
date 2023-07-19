import { Injectable } from '@angular/core';
import {catchError} from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class EmployeeInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(request.headers.get("No-Auth") ==="True")
    {
      return next.handle(request.clone())
    }
    const token  =this.authService.getToken();
    request= this.addToken(request,token);

    return next.handle(request).pipe(
      catchError(
        (err:HttpErrorResponse)=>{
          if(err.status == 401)
          {
           alert("Invalid credentials! Please check your username and password!")
            this.router.navigate(['/home']);
          }
          else if(err.status==403)
          {
            alert("you are not allowed to perform this operation!")
          }
          return throwError("something went wrong!");
        }
      )
    )


  }

  private addToken(request:HttpRequest<any>, token: any)
  {
    return request.clone({
      setHeaders:{
        Authorization: `Bearer ${token}`
      }
    })
  }
}
