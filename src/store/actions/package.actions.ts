import { Action } from '@ngrx/store';
import { IPackage } from './../../app/shared/interfaces/package.interface';

export enum EPackageActions {
    GetPackages = '[Package] Get Packages',
    GetPackagesSuccess = '[Package] Get Packages Success',
}

export class GetPackages implements Action {
    public readonly type = EPackageActions.GetPackages;
    constructor(public payload: string) { }
}

export class GetPackagesSuccess implements Action {
    public readonly type = EPackageActions.GetPackagesSuccess;
    constructor(public payload: IPackage[]) { }
}


export type PackageActions = GetPackages | GetPackagesSuccess;
