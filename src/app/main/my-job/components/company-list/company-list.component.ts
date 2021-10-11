import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-company-list',
    templateUrl: './company-list.component.html',
    styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
    companies: object;
    selectedCompany: string;
    constructor() {
        // Set the defaults
        this.companies = {
            nick: 'NickScali Furniture',
            advance: 'Advanced Furniture'
        };
        this.selectedCompany = 'nick';
    }

    ngOnInit(): void {
    }

}
