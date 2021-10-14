import { IPackage } from './../../app/shared/interfaces/package.interface';
export interface IPackageState {
    packages: IPackage[];
}

export const initialPackageState: IPackageState = {
    packages: [],
}

