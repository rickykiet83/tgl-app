import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { filter, takeUntil } from 'rxjs/operators';

import { FormControl } from '@angular/forms';
import { IPackages } from './../../shared/interfaces/package.interface';
import { PackageService } from './services/package.service';
import { Subject } from 'rxjs/internal/Subject';
import { fuseAnimations } from '@fuse/animations';

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

    packages: IPackages[] = [];

    // Private
    private _unsubscribeAll: Subject<any> = new Subject();

    constructor(private packageService: PackageService) {
        // Set the defaults
        this.searchInput = new FormControl('');
    }

    ngOnInit(): void {
        this.packageService.onPackagesChanged.pipe(
            takeUntil(this._unsubscribeAll)
        ).subscribe(packages => this.packages = packages)
    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

}
