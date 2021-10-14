import { ActivatedRouteSnapshot, Params, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { IFilterPackage, IPackage, ISortPackage } from './../../../shared/interfaces/package.interface';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PackageModel } from './../../../shared/models/package.model';

@Injectable({
    providedIn: 'root'
})
export class PackageService {
    private packages: IPackage[] = [];
    private routeParams: Params;
    onPackagesChanged: BehaviorSubject<PackageModel[]> = new BehaviorSubject([]);
    constructor(
        private _httpClient: HttpClient
    ) { }

    /**
    * Get companies
    *
    * @returns {Promise<IPackage[]>}
    */
    getPackagesByCompanyId(companyId: string): Promise<IPackage[]> {
        return new Promise((resolve, reject) => {
            this._httpClient.get<IPackage[]>('api/packages')
                .subscribe((response) => {
                    this.packages = response.filter(p => p.companyId === companyId);
                    this.onPackagesChanged.next(this.Packages);
                    resolve(this.packages);
                }, reject);
        });
    }

    getPackages(): Promise<IPackage[]> {
        return new Promise((resolve, reject) => {
            this._httpClient.get<IPackage[]>('api/packages')
                .subscribe((response) => {
                    this.packages = response;
                    this.onPackagesChanged.next(this.Packages);
                    resolve(this.packages);
                }, reject);
        });
    }

    filterPackage(filter: Partial<IFilterPackage>): IPackage[] {
        let packages = this.packages;

        if (!!filter.mode && filter.mode !== 'All')
            packages = packages.filter(p => p.mode === filter.mode.toString());
        else if (!!filter.mode && filter.mode === 'All')
            packages = packages.filter(p => p.mode !== filter.mode.toString());

        if (!!filter.status && filter.status !== 'All Active')
            packages = packages.filter(p => p.status === filter.status);
        else if (!!filter.status && filter.status === 'All Active')
            packages = packages.filter(p => p.status !== filter.status);

        if (!!filter.port && filter.port !== 'Registered')
            packages = packages.filter(p => p.originPort === filter.port ||
                p.destinationPort === filter.port);
        else if (!!filter.port && filter.port !== 'Registered')
            packages = packages.filter(p => p.originPort !== filter.port ||
                p.destinationPort !== filter.port);


        return packages;
    }

    sortData(sort: Partial<ISortPackage>): IPackage[] {
        return this.packages.sort((a, b) => {
            let propertyA: number | string | Date = '';
            let propertyB: number | string | Date = '';

            switch (sort.sortBy) {
                case 'Mode':
                    [propertyA, propertyB] = [a.mode, b.mode];
                    break;
                case 'Arrival Date':
                    [propertyA, propertyB] = [a.arrivalDate, b.arrivalDate];
                    break;
                case 'Departure Date':
                    [propertyA, propertyB] = [a.departureDate, b.departureDate];
                    break;
                case 'Destination Port':
                    [propertyA, propertyB] = [a.destinationPort, b.destinationPort];
                    break;
                case 'Origin Port':
                    [propertyA, propertyB] = [a.originPort, b.originPort];
                    break;
                case 'Transit Port':
                    [propertyA, propertyB] = [a.transitPort, b.transitPort];
                    break;

                default:
                    [propertyA, propertyB] = [a.mode, b.mode];
                    break;
            }
            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

            return (valueA < valueB ? - 1 : 1)
        });
    }

    get Packages(): PackageModel[] {
        return this.packages.map(p => new PackageModel(p.id, p));
    }
}
