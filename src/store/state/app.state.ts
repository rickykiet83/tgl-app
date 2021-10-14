import { ICompanyState } from './company.state';
import { RouterReducerState } from '@ngrx/router-store';
import { initialCompanyState } from './company.state';

export interface IAppState {
    routers?: RouterReducerState;
    companies: ICompanyState
}

export const initialAppState: IAppState = {
    companies: initialCompanyState,
}

export function getInitialState(): IAppState {
    return initialAppState;
}