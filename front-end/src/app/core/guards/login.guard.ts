import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

export const loginGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isAutenticado()) {
    return true;
  } else {
    console.warn('Acesso negado. Redirecionando para login.');
    router.navigate(['/']);
    return false;
  }
};
