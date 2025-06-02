// src/app/guards/auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const auth = inject(Auth);
  return new Promise(resolve => {
    auth.onAuthStateChanged(user => {
      if (user && user.emailVerified) resolve(true);
      else {
        router.navigate(['/login']);
        resolve(false);
      }
    });
  });
};
