import { ActionReducerMap } from "@ngrx/store";
import { IAppState } from './../state/app.state';
import { authReducers } from './auth.reducers';
import { companyReducers } from './company.reducers';
import { packageReducers } from './package.reducers';
import { routerReducer } from "@ngrx/router-store";

export const appReducers: ActionReducerMap<IAppState> = {
    routers: routerReducer,
    auth: authReducers,
    companies: companyReducers,
    packages: packageReducers
}