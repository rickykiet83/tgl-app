import { Component, OnInit } from '@angular/core';

import { CompanyService } from '../../services/company.service';
import { ICompany } from './../../../../shared/interfaces/company.interface';

@Component({
    selector: 'app-company-list',
    templateUrl: './company-list.component.html',
    styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
    companies: ICompany[] = [];
    selectedCompany: ICompany;

    constructor(private companyService: CompanyService) { }

    async ngOnInit() {
        this.companies = await this.getCompanies();
        this.selectedCompany = this.companies[0];
    }

    async getCompanies() {
        return this.companyService.getCompanies();
    }

}
