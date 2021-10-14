import { Component, OnDestroy, OnInit } from '@angular/core';
import { GetCompanies, GetCompany } from './../../../../../store/actions/company.actions';
import { Store, select } from '@ngrx/store';
import { selectCompanyList, selectSelectedCompany } from './../../../../../store/selectors/company.selectors';
import { takeUntil, tap } from 'rxjs/operators';

import { CompanyModel } from './../../../../shared/models/company.model';
import { GetPackages } from './../../../../../store/actions/package.actions';
import { IAppState } from './../../../../../store/state/app.state';
import { Subject } from 'rxjs';
import { map } from 'rxjs/internal/operators';

@Component({
    selector: 'app-company-list',
    templateUrl: './company-list.component.html',
    styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit, OnDestroy {
    companies: CompanyModel[] = [];
    selectedCompany: CompanyModel;

    protected _unsubscribeAll: Subject<any> = new Subject();

    constructor(private store: Store<IAppState>) {
        this.store.dispatch(new GetCompanies());
    }

    async ngOnInit() {
        this.store.pipe(
            select(selectCompanyList),
            takeUntil(this._unsubscribeAll),
            map(companies => companies.map(c => new CompanyModel(c.id, c.name))),
            tap(companies => this.companies = companies),
            tap((companies) => this.store.dispatch(new GetCompany(companies[0].id)))
        ).subscribe();

        this.store.pipe(
            select(selectSelectedCompany),
            takeUntil(this._unsubscribeAll),
            tap((company) => this.store.dispatch(new GetPackages(company.id)))
        ).subscribe();
    }

    onSelectedCompany(event: Event) {
        const companyId = (event.target as HTMLSelectElement).value;
        this.selectedCompany = this.companies.find(c => c.id === companyId);
        this.store.dispatch(new GetPackages(this.selectedCompany.id));
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

}
