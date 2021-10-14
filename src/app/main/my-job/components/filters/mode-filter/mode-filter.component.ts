import { Component, OnInit } from '@angular/core';

import { FilterPackages } from './../../../../../../store/actions/package.actions';
import { IAppState } from 'store/state';
import { IFilterPackage } from './../../../../../shared/interfaces/package.interface';
import { ModeTypes } from 'app/shared/types/mode.type';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-mode-filter',
    templateUrl: './mode-filter.component.html',
    styleUrls: ['./mode-filter.component.scss']
})
export class ModeFilterComponent implements OnInit {
    selectedFilter: ModeTypes;
    filterList: ModeTypes[] = [];

    private filterPackage: Partial<IFilterPackage>;

    constructor(
        private store: Store<IAppState>,
    ) {
        // Set the defaults
        this.selectedFilter = 'All';

        this.filterList = [
            'All',
            'Air',
            'Rail',
            'Sea',
            'Transport',
            'Warehouse'
        ]
    }

    ngOnInit(): void {
    }

    onFilterChanged(filter: ModeTypes) {
        this.filterPackage = {
            mode: filter,
        }
        this.store.dispatch(new FilterPackages(this.filterPackage));
    }

}
