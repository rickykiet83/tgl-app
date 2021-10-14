import { ICompany } from "../interfaces/company.interface";
import { IPackage } from "../interfaces/package.interface";
import { StringBaseModel } from "./base.model";

export class CompanyModel extends StringBaseModel implements ICompany {

    constructor(id: string = null, public name: string) {
        super(id);
    }
    packages: IPackage[];
}