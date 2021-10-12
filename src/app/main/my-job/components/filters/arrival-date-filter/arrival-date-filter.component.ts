import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-arrival-date-filter',
    templateUrl: './arrival-date-filter.component.html',
    styleUrls: ['./arrival-date-filter.component.scss']
})
export class ArrivalDateFilterComponent implements OnInit {
    filters: object;
    selectedFilter: string;
    constructor() {
        // Set the defaults
        this.filters = {
            nextDay: 'Arrival Day',
            next2Weeks: 'Next 2 weeks'
        };
        this.selectedFilter = 'nextDay';
    }

    ngOnInit(): void {
    }

}
