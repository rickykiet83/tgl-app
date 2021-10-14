import { IFilterPackage, IPackage, ISortPackage } from './../../app/shared/interfaces/package.interface';

import { Action } from '@ngrx/store';

export enum EPackageActions {
    GetPackages = '[Package] Get Packages',
    GetPackagesSuccess = '[Package] Get Packages Success',
    FilterPackages = '[Package] Filter Package',
    PackagesFiltered = '[Package] Packages Filtered',
    SortPackages = '[Package] Sort Packages',
    PackagesSorted = '[Package] Packages Sorted',
}

export class GetPackages implements Action {
    public readonly type = EPackageActions.GetPackages;
    constructor(public payload: string) { }
}

export class GetPackagesSuccess implements Action {
    public readonly type = EPackageActions.GetPackagesSuccess;
    constructor(public payload: IPackage[]) { }
}

export class FilterPackages implements Action {
    public readonly type = EPackageActions.FilterPackages;
    constructor(public payload: Partial<IFilterPackage>) { }
}

export class FilteredPackages implements Action {
    public readonly type = EPackageActions.PackagesFiltered;
    constructor(public payload: IPackage[]) { }
}

export class SortPackages implements Action {
    public readonly type = EPackageActions.SortPackages;
    constructor(public payload: Partial<ISortPackage>) { }
}

export class PackagesSorted implements Action {
    public readonly type = EPackageActions.PackagesSorted;
    constructor(public payload: IPackage[]) { }
}

export type PackageActions = GetPackages | GetPackagesSuccess | FilterPackages | FilteredPackages
    | SortPackages | PackagesSorted;
