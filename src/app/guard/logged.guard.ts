import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

/**
 * @description guard for logged
 * @param route
 * @param state
 */
export const loggedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const name = localStorage.getItem('name');

  if(name && route.url[0]?.path !== 'home' && route.url[0]?.path !== 'memory-game') {
    return router.navigate(['memory-game']).then();
  }

  return true;
};
