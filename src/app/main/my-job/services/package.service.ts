import { ActivatedRouteSnapshot, Params, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { IPackages } from './../../../shared/interfaces/package.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class PackageService {
    packages: IPackages[] = [];
    onPackagesChanged: BehaviorSubject<IPackages[]> = new BehaviorSubject([]);
    routeParams: Params;
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
    * @returns {Promise<IPackages[]>}
    */
    getPackagesByCompanyId(companyId: string): Promise<IPackages[]> {
        return new Promise((resolve, reject) => {
            this._httpClient.get<IPackages[]>('api/packages')
                .subscribe((response) => {
                    this.packages = response.filter(p => p.companyId === companyId);
                    this.onPackagesChanged.next(this.packages);
                    resolve(this.packages);
                }, reject);
        });
    }

    getPackages(): Promise<IPackages[]> {
        return new Promise((resolve, reject) => {
            this._httpClient.get<IPackages[]>('api/packages')
                .subscribe((response) => {
                    this.packages = response;
                    this.onPackagesChanged.next(this.packages);
                    resolve(this.packages);
                }, reject);
        });
    }
}
