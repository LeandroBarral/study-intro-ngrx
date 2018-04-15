import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/skip';

import * as actions from './authentication.actions';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthenticationEffects {
  @Effect()
  signIn$: Observable<Action> = this.actions$
    .ofType(actions.Types.AUTHENTICATE)
    .map((action: actions.Authenticate) => action.payload)
    .switchMap(payload => {
      return this.amadeusService
        .postSignIn(payload.username, payload.password)
        .map((res: any) => {
          // console.log('res', res);
          if (res && res.user_token) {
            return new actions.Authenticated(res);
          } else {
            return new actions.AuthenticateError(res);
          }
        })
        .catch(err =>
          Observable.of(
            new actions.AuthenticateError({ message: err.statusText })
          )
        );
    });

  constructor(
    private actions$: Actions,
    private amadeusService: AuthenticationService
  ) {}
}
