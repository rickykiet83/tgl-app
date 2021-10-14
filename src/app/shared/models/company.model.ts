import { ICompany } from "../interfaces/company.interface";
import { IPackage } from "../interfaces/package.interface";
import { StringBaseModel } from "./base.model";

export class CompanyModel extends StringBaseModel implements ICompany {

    constructor(_id: string, public name: string) {
        super(_id);
    }
    packages: IPackage[];
}