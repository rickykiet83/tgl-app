import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sortby-filter',
    templateUrl: './sortby-filter.component.html',
    styleUrls: ['./sortby-filter.component.scss']
})
export class SortbyFilterComponent implements OnInit {
    filters: object;
    selectedFilter: string;
    constructor() {
        // Set the defaults
        this.filters = {
            all: 'Mode',
            air: 'Departure Day'
        };
        this.selectedFilter = 'all';
    }

    ngOnInit(): void {
    }

}
