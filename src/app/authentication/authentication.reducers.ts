import * as fromRoot from '../app.reducer';
import * as fromSignIn from './sign-in/sign-in.reducer';
import * as actions from './authentication.actions';

import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
  ActionReducer
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({ keys: ['authentication'], rehydrate: true })(
    reducer
  );
}

export interface State extends fromRoot.State {
  authentication: AuthenticationState;
}

export interface AuthenticationState {
  signIn: fromSignIn.SignInState;
}

export const reducers: ActionReducerMap<AuthenticationState> = {
  signIn: fromSignIn.reducer
};

export const getAuthenticationState = createFeatureSelector<
  AuthenticationState
>('authentication');

export const getUserIsAuthenticated = createSelector(
  getAuthenticationState,
  state => state.signIn.authenticated
);

export const getUser = createSelector(
  getAuthenticationState,
  state => state.signIn.user
);

export const getUserToken = createSelector(
  getAuthenticationState,
  state => state.signIn.user_token
);
