import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
  const authService=inject(AuthService)
  if(authService.getToken() !==null)
  {
    const role=route.data['role'];
    if(role==="ADMIN")
    {
      return true;
    }
    else
    {
      alert("you are not authorized!")
      return false;
    }
  }
  router.navigate(['/home'])
  return false;
};
