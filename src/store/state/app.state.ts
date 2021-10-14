import { IPackageState, initialPackageState } from './package.state';

import { ICompanyState } from './company.state';
import { RouterReducerState } from '@ngrx/router-store';
import { initialCompanyState } from './company.state';

export interface IAppState {
    routers?: RouterReducerState;
    companies: ICompanyState;
    packages: IPackageState;
}

export const initialAppState: IAppState = {
    companies: initialCompanyState,
    packages: initialPackageState
}

export function getInitialState(): IAppState {
    return initialAppState;
}