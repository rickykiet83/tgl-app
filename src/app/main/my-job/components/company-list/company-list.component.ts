import { Component, OnInit } from '@angular/core';

import { CompanyService } from '../../services/company.service';
import { ICompany } from './../../../../shared/interfaces/company.interface';
import { PackageService } from './../../services/package.service';

@Component({
    selector: 'app-company-list',
    templateUrl: './company-list.component.html',
    styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
    companies: ICompany[] = [];
    selectedCompany: ICompany;

    constructor(private companyService: CompanyService, private packageService: PackageService) { }

    async ngOnInit() {
        this.companies = await this.getCompanies();
        this.selectedCompany = this.companies[0];
        this.packageService.getPackagesByCompanyId(this.selectedCompany.id);
    }

    async getCompanies() {
        return this.companyService.getCompanies();
    }

    onSelectedCompany(event: Event) {
        const companyId = (event.target as HTMLSelectElement).value;
        this.selectedCompany = this.companies.find(c => c.id === companyId);
        this.packageService.getPackagesByCompanyId(this.selectedCompany.id);
    }

}
