import { CompanyModel } from './../../../shared/models/company.model';
import { HttpClient } from '@angular/common/http';
import { ICompany } from './../../../shared/interfaces/company.interface';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';

@Injectable()
export class CompanyService {
    companies: CompanyModel[] = [];
    constructor(
        private _httpClient: HttpClient
    ) { }

    /**
    * Get companies
    *
    * @returns {Promise<CompanyModel[]>}
    */
    getCompanies(): Promise<CompanyModel[]> {
        return new Promise((resolve, reject) => {
            this._httpClient.get<ICompany[]>('api/companies').pipe(
                map(response => response.map(company => new CompanyModel(company.id, company.name)))
            )
                .subscribe((response) => {
                    this.companies = response;
                    resolve(response);
                }, reject);
        });
    }
}
