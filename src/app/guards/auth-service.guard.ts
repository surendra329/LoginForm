import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authServiceGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const token = localStorage.getItem('token');

  if (token === 'Active') {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
  
};
