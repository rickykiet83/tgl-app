import { Actions, Effect, ofType } from '@ngrx/effects';
import { EPackageActions, FilterPackages, FilteredPackages, GetPackages, GetPackagesSuccess, PackagesSorted, SortPackages } from './../actions/package.actions';
import { map, switchMap } from 'rxjs/internal/operators';

import { IAppState } from './../state/app.state';
import { Injectable } from "@angular/core";
import { PackageService } from './../../app/main/my-job/services/package.service';
import { Store } from '@ngrx/store';
import { of } from 'rxjs/internal/observable/of';

@Injectable()
export class PackageEffects {
    constructor(
        private actions$: Actions,
        private store: Store<IAppState>,
        private packageService: PackageService,
    ) { }

    @Effect()
    getPackages$ = this.actions$.pipe(
        ofType<GetPackages>(EPackageActions.GetPackages),
        map(action => action.payload),
        switchMap((companyId) => this.packageService.getPackagesByCompanyId(companyId)),
        switchMap((packages) => of(new GetPackagesSuccess(packages)))
    );

    @Effect()
    filterPackages$ = this.actions$.pipe(
        ofType<FilterPackages>(EPackageActions.FilterPackages),
        map(action => action.payload),
        map((filter) => this.packageService.filterPackage(filter)),
        switchMap((packages) => of(new FilteredPackages(packages)))
    )

    @Effect()
    sortPackages$ = this.actions$.pipe(
        ofType<SortPackages>(EPackageActions.SortPackages),
        map(action => action.payload),
        map((sort) => this.packageService.sortData(sort)),
        switchMap((packages) => of(new PackagesSorted(packages)))
    )

}