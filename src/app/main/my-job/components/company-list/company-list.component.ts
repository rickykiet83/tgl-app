import { Component, OnInit } from '@angular/core';

import { CompanyModel } from './../../../../shared/models/company.model';
import { CompanyService } from '../../services/company.service';
import { HttpClient } from '@angular/common/http';
import { ICompany } from './../../../../shared/interfaces/company.interface';
import { Observable } from 'rxjs/internal/Observable';

@Component({
    selector: 'app-company-list',
    templateUrl: './company-list.component.html',
    styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
    companies: CompanyModel[] = [];
    selectedCompany: CompanyModel;
    constructor(private companyService: CompanyService) {
    }

    async ngOnInit() {
        this.companies = await this.getCompanies();
        this.selectedCompany = this.companies[0];
    }

    async getCompanies() {
        return this.companyService.getCompanies();
    }

}
