import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { IAppState } from 'store/state';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { isLoggedIn } from './../../../store/selectors/auth.selectors';
import { map } from 'rxjs/internal/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanLoad {
    constructor(
        private store: Store<IAppState>,
        private router: Router,
    ) { }
    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.store.pipe(
            select(isLoggedIn),
            map(auth => {
                if (!auth) {
                    window.location.href = 'https://tglkiet.b2clogin.com/tglkiet.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_signup_in&client_id=471875df-8670-4c2b-ae95-98fc189cb220&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A4200&scope=openid&response_type=id_token&prompt=login';
                    return false;
                }
                return true;
            })
        );
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.store.pipe(
            select(isLoggedIn),
            map(auth => {
                if (!auth) {
                    window.location.href = 'https://tglkiet.b2clogin.com/tglkiet.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_signup_in&client_id=471875df-8670-4c2b-ae95-98fc189cb220&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A4200&scope=openid&response_type=id_token&prompt=login';
                    return false;
                }
                return true;
            })
        );
    }

}
