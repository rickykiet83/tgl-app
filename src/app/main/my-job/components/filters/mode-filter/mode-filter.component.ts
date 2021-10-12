import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-mode-filter',
    templateUrl: './mode-filter.component.html',
    styleUrls: ['./mode-filter.component.scss']
})
export class ModeFilterComponent implements OnInit {
    filters: object;
    selectedFilter: string;
    constructor() {
        // Set the defaults
        this.filters = {
            all: 'All',
            air: 'Air'
        };
        this.selectedFilter = 'all';
    }

    ngOnInit(): void {
    }

}
