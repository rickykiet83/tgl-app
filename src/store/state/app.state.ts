import { IAuthState, initialAuthState } from './auth.state';
import { IPackageState, initialPackageState } from './package.state';

import { ICompanyState } from './company.state';
import { RouterReducerState } from '@ngrx/router-store';
import { initialCompanyState } from './company.state';

export interface IAppState {
    routers?: RouterReducerState;
    auth: IAuthState,
    companies: ICompanyState;
    packages: IPackageState;
}

export const initialAppState: IAppState = {
    auth: initialAuthState,
    companies: initialCompanyState,
    packages: initialPackageState
}

export function getInitialState(): IAppState {
    return initialAppState;
}