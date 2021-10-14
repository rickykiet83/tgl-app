import { ActivatedRouteSnapshot, Params, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { IFilterPackage, IPackage } from './../../../shared/interfaces/package.interface';

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

    // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IPackages[] | Observable<IPackages[]> | Promise<IPackages[]> {
    //     this.routeParams = route.params;
    //     return new Promise((resolve, reject) => {
    //         Promise.all([
    //             this.getPackages()
    //         ]).then(([packages]) => {
    //             resolve(packages);
    //         })
    //     })
    // }

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
            packages = this.packages.filter(p => p.mode === filter.mode.toString());

        if (!!filter.status && filter.status !== 'All Active')
            packages = this.packages.filter(p => p.status === filter.status);

        if (!!filter.port && filter.port !== 'Registered')
            packages = this.packages.filter(p => p.originPort === filter.port ||
                p.destinationPort === filter.port);


        return packages;
    }

    get Packages(): PackageModel[] {
        return this.packages.map(p => new PackageModel(p.id, p));
    }
}
