import { IFilterPackage, IPackage, ISortPackage } from './../../app/shared/interfaces/package.interface';
export interface IPackageState {
    packages: IPackage[];
    filter: Partial<IFilterPackage>;
    sortBy: Partial<ISortPackage>;
}

export const initialPackageState: IPackageState = {
    packages: [],
    filter: {},
    sortBy: {
        sortBy: 'Mode'
    }
}

