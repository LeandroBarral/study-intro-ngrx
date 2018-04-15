import { Action } from '@ngrx/store';

export enum Types {
  AUTHENTICATE = '[AUTHENTICATION] Authenticate',
  AUTHENTICATED = '[AUTHENTICATION] Authenticated',
  AUTHENTICATE_ERROR = '[AUTHENTICATION] Authenticate Error',
  SIGN_UP = '[AUTHENTICATION] Sign Up',
  SIGN_UP_SUCCESS = '[AUTHENTICATION] Sign Up Success',
  SIGN_UP_ERROR = '[AUTHENTICATION] Sign Up Success',
  SIGN_OUT = '[AUTHENTICATION] Sign Out',
  SIGN_OUT_SUCCESS = '[AUTHENTICATION] Sign Out Success',
  SIGN_OUT_ERROR = '[AUTHENTICATION] Sign Out Error'
}

export class Authenticate implements Action {
  readonly type = Types.AUTHENTICATE;

  constructor(
    public payload: {
      username: string;
      password: string;
    }
  ) {}
}

export class Authenticated implements Action {
  readonly type = Types.AUTHENTICATED;

  constructor(public payload: any) {}
}

export class AuthenticateError implements Action {
  readonly type = Types.AUTHENTICATE_ERROR;

  constructor(public payload: any) {}
}

export class SignUp implements Action {
  readonly type = Types.SIGN_UP;

  constructor(public payload: any) {}
}

export class SignUpSuccess implements Action {
  readonly type = Types.SIGN_UP_SUCCESS;

  constructor(public payload: any) {}
}

export class SignUpError implements Action {
  readonly type = Types.SIGN_UP_ERROR;

  constructor(public payload: any) {}
}

export class SignOut implements Action {
  readonly type = Types.SIGN_OUT;

  constructor(public payload?: any) {}
}

export class SignOutSuccess implements Action {
  readonly type = Types.SIGN_OUT_SUCCESS;

  constructor(public payload?: any) {}
}

export class SignOutError implements Action {
  readonly type = Types.SIGN_OUT_ERROR;

  constructor(public payload?: any) {}
}

export type AuthenticationActions =
  | Authenticate
  | Authenticated
  | AuthenticateError
  | SignUp
  | SignUpSuccess
  | SignUpError
  | SignOut
  | SignOutSuccess
  | SignOutError;
