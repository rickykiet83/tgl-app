import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-departure-date-filter',
    templateUrl: './departure-date-filter.component.html',
    styleUrls: ['./departure-date-filter.component.scss']
})
export class DepartureDateFilterComponent implements OnInit {
    filters: object;
    selectedFilter: string;
    constructor() {
        // Set the defaults
        this.filters = {
            nextDay: 'Departure Day',
            next2Weeks: 'Next 2 weeks'
        };
        this.selectedFilter = 'nextDay';
    }

    ngOnInit(): void {
    }

}
