import { Actions, Effect, ofType } from '@ngrx/effects';
import { ECompanyActions, GetCompanies, GetCompaniesSuccess, GetCompany, GetCompanySuccess } from './../actions/company.actions';
import { EPackageActions, GetPackages, GetPackagesSuccess } from './../actions/package.actions';
import { Store, select } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs/internal/operators';

import { CompanyService } from './../../app/main/my-job/services/company.service';
import { IAppState } from './../state/app.state';
import { Injectable } from "@angular/core";
import { PackageService } from './../../app/main/my-job/services/package.service';
import { of } from 'rxjs/internal/observable/of';
import { selectCompanyList } from './../selectors/company.selectors';

@Injectable()
export class PackageEffects {
    constructor(
        private _actions$: Actions,
        private _store: Store<IAppState>,
        private packageService: PackageService,
    ) { }

    @Effect()
    getPackages$ = this._actions$.pipe(
        ofType<GetPackages>(EPackageActions.GetPackages),
        map(action => action.payload),
        switchMap((companyId) => this.packageService.getPackagesByCompanyId(companyId)),
        switchMap((packages) => of(new GetPackagesSuccess(packages)))
    );

}