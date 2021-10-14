import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { CompanyModel } from './../../../../shared/models/company.model';
import { GetCompanies } from './../../../../../store/actions/company.actions';
import { IAppState } from './../../../../../store/state/app.state';
import { PackageService } from './../../services/package.service';
import { Subject } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { selectCompanyList } from './../../../../../store/selectors/company.selectors';
import { takeUntil } from 'rxjs/operators';

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
        private packageService: PackageService) {
        this.store.dispatch(new GetCompanies());
    }

    async ngOnInit() {
        this.store.pipe(
            select(selectCompanyList),
            takeUntil(this._unsubscribeAll),
            map(companies => companies.map(c => new CompanyModel(c.id, c.name)))
        ).subscribe(companies => this.companies = companies);
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
