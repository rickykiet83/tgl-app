import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-status-filter',
    templateUrl: './status-filter.component.html',
    styleUrls: ['./status-filter.component.scss']
})
export class StatusFilterComponent implements OnInit {
    filters: object;
    selectedFilter: string;
    constructor() {
        // Set the defaults
        this.filters = {
            all: 'All Active',
            origin: 'At Origin (Job Added)'
        };
        this.selectedFilter = 'all';
    }

    ngOnInit(): void {
    }

}
