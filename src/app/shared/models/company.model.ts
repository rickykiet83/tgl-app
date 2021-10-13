import { ICompany } from "../interfaces/company.interface";
import { StringBaseModel } from "./base.model";

export class CompanyModel extends StringBaseModel implements ICompany {

    constructor(_id: string, public name: string) {
        super(_id);
    }
}