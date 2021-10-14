import { Component, OnInit } from '@angular/core';

import { FilterPackages } from './../../../../../../store/actions/package.actions';
import { IAppState } from 'store/state';
import { IFilterPackage } from './../../../../../shared/interfaces/package.interface';
import { StatusTypes } from './../../../../../shared/types/status.type';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-status-filter',
    templateUrl: './status-filter.component.html',
    styleUrls: ['./status-filter.component.scss']
})
export class StatusFilterComponent implements OnInit {
    selectedFilter: StatusTypes;
    filterList: StatusTypes[] = [];

    private filterPackage: Partial<IFilterPackage>;
    constructor(
        private store: Store<IAppState>,
    ) {
        // Set the defaults
        this.filterList = [
            'All Active',
            'At Origin (Job Added)',
            'At Transit Port', 'Departed', 'Freight Check in at Origin', 'Awaiting Arrival at Destination', 'Customs Clearance', 'At Transit Port', 'In Transit to Arrival', 'Destination Stop-off', 'At final Destination', 'Invoices not settled', 'Completed'
        ];
        this.selectedFilter = 'All Active';
    }

    ngOnInit(): void {
    }

    onFilterChanged(filter: StatusTypes) {
        this.filterPackage = {
            status: filter,
        }
        this.store.dispatch(new FilterPackages(this.filterPackage));
    }

}
