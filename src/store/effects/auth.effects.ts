import { Actions, Effect, ofType } from '@ngrx/effects';
import { EAuthActions, LoginWithToken, LoginWithTokenSuccess } from './../actions/auth.actions';
import { Store, select } from '@ngrx/store';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/internal/operators';

import { IAppState } from './../state/app.state';
import { IAuthenticatedUser } from './../../app/shared/interfaces/auth-user.interface';
import { Injectable } from "@angular/core";
import { JwtHelperService } from '@auth0/angular-jwt';
import { of } from 'rxjs/internal/observable/of';

@Injectable()
export class AuthEffects {
    private jwtHelper = new JwtHelperService();
    constructor(
        private action$: Actions,
        private store: Store<IAppState>,
    ) { }

    @Effect()
    authWithToken$ = this.action$.pipe(
        ofType<LoginWithToken>(EAuthActions.LoginWithToken),
        map(action => action.payload),
        tap(token => {
            const userProfile: IAuthenticatedUser = this.jwtHelper.decodeToken(token);
            this.store.dispatch(new LoginWithTokenSuccess(userProfile));
        }),
    );
}