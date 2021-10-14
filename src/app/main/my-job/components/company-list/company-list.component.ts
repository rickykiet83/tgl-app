import { ActionsSubject, Store, select } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ECompanyActions, GetCompanies, GetCompany } from './../../../../../store/actions/company.actions';
import { filter, takeUntil, tap } from 'rxjs/operators';

import { CompanyModel } from './../../../../shared/models/company.model';
import { IAppState } from './../../../../../store/state/app.state';
import { PackageService } from './../../services/package.service';
import { Subject } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { selectCompanyList } from './../../../../../store/selectors/company.selectors';
import { switchMap } from 'rxjs/internal/operators/switchMap';

@Component({
    selector: 'app-company-list',
    templateUrl: './company-list.component.html',
    styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit, OnDestroy {
    companies: CompanyModel[] = [];
    selectedCompany: CompanyModel;

    protected _unsubscribeAll: Subject<any> = new Subject();

    constructor(
        private store: Store<IAppState>,
        private actionsSubject$: ActionsSubject,
        private packageService: PackageService) {
        this.store.dispatch(new GetCompanies());
    }

    async ngOnInit() {
        this.store.pipe(
            select(selectCompanyList),
            takeUntil(this._unsubscribeAll),
            map(companies => companies.map(c => new CompanyModel(c.id, c.name)))
        ).subscribe(companies => {
            this.companies = companies;
            this.store.dispatch(new GetCompany(this.companies[0].id));
        });
    }

    onSelectedCompany(event: Event) {
        const companyId = (event.target as HTMLSelectElement).value;
        this.selectedCompany = this.companies.find(c => c.id === companyId);
        this.packageService.getPackagesByCompanyId(this.selectedCompany.id);
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

}
