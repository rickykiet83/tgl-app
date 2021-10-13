import * as shortId from 'shortid';

import { BaseModel, StringBaseModel } from "./base.model";

export interface ICompany {
    id: string,
    name: string
}

export class CompanyModel extends StringBaseModel implements ICompany {

    constructor(public name: string, _id?: string,) {
        super(_id);
    }
}