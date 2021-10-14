import { Action } from '@ngrx/store';
import { ICompany } from './../../app/shared/interfaces/company.interface';

export enum ECompanyActions {
    GetCompanies = '[Company] Get Companies',
    GetCompaniesSuccess = '[Company] Get Companies Success',
    GetCompany = '[Company] Get Company',
    GetCompanySuccess = '[Company] Get Company Success',
}

export class GetCompanies implements Action {
    public readonly type = ECompanyActions.GetCompanies;
}

export class GetCompaniesSuccess implements Action {
    public readonly type = ECompanyActions.GetCompaniesSuccess;
    constructor(public payload: ICompany[]) { }
}

export class GetCompany implements Action {
    public readonly type = ECompanyActions.GetCompany;
    constructor(public payload: string) { }
}

export class GetCompanySuccess implements Action {
    public readonly type = ECompanyActions.GetCompanySuccess;
    constructor(public payload: ICompany) { }
}

export type CompanyActions = GetCompanies | GetCompaniesSuccess | GetCompany | GetCompanySuccess;
