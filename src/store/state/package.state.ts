import { IFilterPackage, IPackage } from './../../app/shared/interfaces/package.interface';
export interface IPackageState {
    packages: IPackage[];
    filter: Partial<IFilterPackage>;
}

export const initialPackageState: IPackageState = {
    packages: [],
    filter: {
        mode: 'All',
        status: 'All Active'
    }
}

