import { ActionReducerMap } from "@ngrx/store";
import { IAppState } from './../state/app.state';
import { companyReducers } from './company.reducers';
import { packageReducers } from './package.reducers';
import { routerReducer } from "@ngrx/router-store";

export const appReducers: ActionReducerMap<IAppState> = {
    routers: routerReducer,
    companies: companyReducers,
    packages: packageReducers
}