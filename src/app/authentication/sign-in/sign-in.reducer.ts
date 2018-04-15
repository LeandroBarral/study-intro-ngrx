import * as actions from '../authentication.actions';
import { AuthenticationState } from '../authentication.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface SignInState {
  loading: boolean;
  errorMessage?: string;
  authenticated: boolean;
  user_token?: string;
  user?: any;
}

const initialState: SignInState = {
  loading: false,
  authenticated: false
};

export function reducer(
  state = initialState,
  action: actions.AuthenticationActions
): SignInState {
  switch (action.type) {
    case actions.Types.AUTHENTICATE: {
      return {
        ...state,
        loading: true
      };
    }

    case actions.Types.AUTHENTICATED: {
      return {
        ...state,
        loading: false,
        authenticated: true,
        user_token: action.payload.user_token,
        user: action.payload.user,
        errorMessage: null
      };
    }

    case actions.Types.SIGN_OUT_SUCCESS:
    case actions.Types.AUTHENTICATE_ERROR: {
      return {
        ...initialState,
        errorMessage: action.payload.message
      };
    }

    default: {
      return state;
    }
  }
}

export const getAuthState = createFeatureSelector<AuthenticationState>(
  'authentication'
);

export const getState = createSelector(getAuthState, state => state.signIn);

export const getLoading = createSelector(getState, state => state.loading);

export const getErrorMessage = createSelector(getState, state => state.errorMessage);
