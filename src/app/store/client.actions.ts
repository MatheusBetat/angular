import {Action} from "@ngrx/store";

export enum ClientActionTypes {
  LOGIN = '[client] Login',
  LOGIN_SUCCESS = '[client] Login Success',
  LOGIN_FAILURE = '[client] Login Failure',
  LOGOUT = '[client] Logout',
}

export class LogIn implements Action {
  readonly type = ClientActionTypes.LOGIN;

}
export class LogInSuccess implements Action {
  readonly type = ClientActionTypes.LOGIN_SUCCESS;
}

export class LogInFailure implements Action {
  readonly type = ClientActionTypes.LOGIN_FAILURE;
}

export class LogOut implements Action {
  readonly type = ClientActionTypes.LOGOUT;
}

export type All =
  | LogIn
  | LogInSuccess
  | LogInFailure
  | LogOut;
