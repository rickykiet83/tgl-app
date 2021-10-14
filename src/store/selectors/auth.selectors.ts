import { IAppState } from 'store/state';
import { createSelector } from '@ngrx/store';

export const selectAuthState = (state: IAppState) => state.auth;

export const authState = createSelector(
    selectAuthState,
    state => state
);

export const isLoggedIn = createSelector(
    selectAuthState,
    state => state.isAuthenticated
);
