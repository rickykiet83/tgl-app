import { Component, OnInit } from '@angular/core';

import { IAppState } from 'store/state';
import { ISortPackage } from './../../../../../shared/interfaces/package.interface';
import { SortPackages } from './../../../../../../store/actions/package.actions';
import { SortTypes } from './../../../../../shared/types/sort.type';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-sortby-filter',
    templateUrl: './sortby-filter.component.html',
    styleUrls: ['./sortby-filter.component.scss']
})
export class SortbyFilterComponent implements OnInit {
    orders: SortTypes[] = [];
    selectedOrder: SortTypes;

    private sortByPackage: Partial<ISortPackage>;
    constructor(
        private store: Store<IAppState>,
    ) {
        this.orders = [
            'Mode',
            'Departure Date',
            'Arrival Date',
            'Origin Port',
            'Destination Port',
            'Transit Port'
        ];

        this.selectedOrder = 'Mode';
    }

    ngOnInit(): void {
    }

    onSortByChanged(sortType: SortTypes) {
        this.sortByPackage = {
            sortBy: sortType
        }
        this.store.dispatch(new SortPackages(this.sortByPackage));
    }

}
