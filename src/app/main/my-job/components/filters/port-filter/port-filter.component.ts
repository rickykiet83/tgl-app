import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-port-filter',
    templateUrl: './port-filter.component.html',
    styleUrls: ['./port-filter.component.scss']
})
export class PortFilterComponent implements OnInit {
    filters: object;
    selectedFilter: string;
    constructor() {
        // Set the defaults
        this.filters = {
            nextDay: 'Senzhen Day',
            next2Weeks: 'Melbourne'
        };
        this.selectedFilter = 'nextDay';
    }

    ngOnInit(): void {
    }

}
