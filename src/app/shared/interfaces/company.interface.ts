import { IPackages } from "./package.interface";

export interface ICompany {
    id: string,
    name: string
    packages: IPackages[],
}