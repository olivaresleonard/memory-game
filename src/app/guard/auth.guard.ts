import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const name = localStorage.getItem('name');

  if(!name && route.url[0]?.path === 'memory-game') {
    return router.navigate(['/']).then();
  }

  return true;
};
