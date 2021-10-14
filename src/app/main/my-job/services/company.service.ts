import { HttpClient } from '@angular/common/http';
import { ICompany } from './../../../shared/interfaces/company.interface';
import { Injectable } from '@angular/core';

@Injectable(
    { providedIn: 'root' }
)
export class CompanyService {
    companies: ICompany[] = [];
    constructor(
        private _httpClient: HttpClient
    ) { }

    /**
    * Get companies
    *
    * @returns {Promise<ICompany[]>}
    */
    getCompanies(): Promise<ICompany[]> {
        return new Promise((resolve, reject) => {
            this._httpClient.get<ICompany[]>('api/companies')
                .subscribe((response) => {
                    this.companies = response;
                    resolve(response);
                }, reject);
        });
    }
}
