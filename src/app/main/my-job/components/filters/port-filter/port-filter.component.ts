import { Component, OnInit } from '@angular/core';

import { FilterPackages } from './../../../../../../store/actions/package.actions';
import { IAppState } from 'store/state';
import { IFilterPackage } from './../../../../../shared/interfaces/package.interface';
import { PortTypes } from 'app/shared/types/port.type';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-port-filter',
    templateUrl: './port-filter.component.html',
    styleUrls: ['./port-filter.component.scss']
})
export class PortFilterComponent implements OnInit {
    selectedFilter: PortTypes;
    filterList: PortTypes[] = [];

    private filterPackage: Partial<IFilterPackage>;
    constructor(
        private store: Store<IAppState>,
    ) {
        // Set the defaults
        this.filterList = [
            'Senzhen', 'Melbourne', 'Sydney', 'Ho Chi Minh', 'Singapore', 'Samarang', 'NingBo'
        ];
        this.selectedFilter = 'Senzhen';
    }

    ngOnInit(): void {
    }

    onFilterChanged(filter: PortTypes) {
        this.filterPackage = {
            port: filter,
        }
        this.store.dispatch(new FilterPackages(this.filterPackage));
    }

}
