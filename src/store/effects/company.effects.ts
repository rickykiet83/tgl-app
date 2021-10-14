import { Actions, Effect, ofType } from '@ngrx/effects';
import { ECompanyActions, GetCompanies, GetCompaniesSuccess } from './../actions/company.actions';

import { CompanyService } from './../../app/main/my-job/services/company.service';
import { IAppState } from './../state/app.state';
import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { of } from 'rxjs/internal/observable/of';
import { switchMap } from 'rxjs/internal/operators/switchMap';

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
}