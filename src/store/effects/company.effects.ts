import { Actions, Effect, ofType } from '@ngrx/effects';
import { ECompanyActions, GetCompanies, GetCompaniesSuccess, GetCompany, GetCompanySuccess } from './../actions/company.actions';
import { Store, select } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs/internal/operators';

import { CompanyService } from './../../app/main/my-job/services/company.service';
import { IAppState } from './../state/app.state';
import { Injectable } from "@angular/core";
import { of } from 'rxjs/internal/observable/of';
import { selectCompanyList } from './../selectors/company.selectors';

@Injectable()
export class CompanyEffects {
    constructor(
        private _actions$: Actions,
        private _store: Store<IAppState>,
        private companyService: CompanyService,
    ) {

    }
    @Effect()
    getCompanies$ = this._actions$.pipe(
        ofType<GetCompanies>(ECompanyActions.GetCompanies),
        switchMap(() => this.companyService.getCompanies()),
        switchMap((companies) => of(new GetCompaniesSuccess(companies)))
    );

    @Effect()
    getCompany$ = this._actions$.pipe(
        ofType<GetCompany>(ECompanyActions.GetCompany),
        map(action => this.companyService.getCompany(action.payload)),
        withLatestFrom(this._store.pipe(select(selectCompanyList))),
        switchMap(([company]) => {
            return of(new GetCompanySuccess(company));
        })
    );
}