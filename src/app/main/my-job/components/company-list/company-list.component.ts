import { Component, OnInit } from '@angular/core';

import { CompanyModel } from './../../../../shared/models/company.model';

@Component({
    selector: 'app-company-list',
    templateUrl: './company-list.component.html',
    styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
    companies: CompanyModel[] = [];
    selectedCompany: CompanyModel;
    constructor() {
        // Set the defaults
        this.companies.push(
            new CompanyModel('NickScali Furniture'),
            new CompanyModel('Advanced Furniture'),
            new CompanyModel('Bed & Dream'),
        );
        this.selectedCompany = this.companies[0];
    }

    ngOnInit(): void { }

}
