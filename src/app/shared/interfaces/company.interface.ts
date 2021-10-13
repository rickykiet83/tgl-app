import { IPackages } from './job.interface';

export interface ICompany {
    id: string,
    name: string
    packages: IPackages[],
}