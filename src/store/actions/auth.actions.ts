import { Action } from "@ngrx/store";
import { IAuthenticatedUser } from './../../app/shared/interfaces/auth-user.interface';

export enum EAuthActions {
    LoginWithToken = '[Login] Login With Token',
    LoginWithTokenSuccess = '[Login] Login With Token Success',
}

export class LoginWithToken implements Action {
    readonly type = EAuthActions.LoginWithToken;
    constructor(public payload: string) { }
}

export class LoginWithTokenSuccess implements Action {
    readonly type = EAuthActions.LoginWithTokenSuccess;
    constructor(public payload: IAuthenticatedUser) { }
}


export type AuthActions = LoginWithToken | LoginWithTokenSuccess;