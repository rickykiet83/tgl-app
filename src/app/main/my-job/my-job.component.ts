import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { filter, map, takeUntil } from 'rxjs/operators';

import { FormControl } from '@angular/forms';
import { IAppState } from './../../../store/state/app.state';
import { IPackage } from './../../shared/interfaces/package.interface';
import { PackageModel } from './../../shared/models/package.model';
import { PackageService } from './services/package.service';
import { Subject } from 'rxjs/internal/Subject';
import { fuseAnimations } from '@fuse/animations';
import { selectPackageList } from './../../../store/selectors/package.selectors';

@Component({
    selector: 'app-my-job',
    templateUrl: './my-job.component.html',
    styleUrls: ['./my-job.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class MyJobComponent implements OnInit, OnDestroy {

    searchInput: FormControl;
    jobItems: any[] = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
    ];

    packages: PackageModel[] = [];

    // Private
    private _unsubscribeAll: Subject<any> = new Subject();

    constructor(
        private store: Store<IAppState>,
        private packageService: PackageService) {
        // Set the defaults
        this.searchInput = new FormControl('');
    }

    ngOnInit(): void {
        this.store.pipe(
            select(selectPackageList),
            takeUntil(this._unsubscribeAll),
            map(packages => packages.map(p => new PackageModel(p.id, p)))
        ).subscribe(packages => this.packages = packages);
    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

}
