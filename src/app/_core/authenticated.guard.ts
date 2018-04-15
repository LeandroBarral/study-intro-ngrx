import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../app.reducer';
import * as fromAuth from '../authentication/authentication.reducers';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  constructor(private store: Store<fromAuth.State>, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const userIsAuthenticated$ = this.store.pipe(
      select(fromAuth.getUserIsAuthenticated)
    );

    userIsAuthenticated$.subscribe(isAuthenticated => {
      if (!isAuthenticated) {
        this.router.navigate(['/auth/sign-in']);
      }
    });

    return userIsAuthenticated$;
  }
}
