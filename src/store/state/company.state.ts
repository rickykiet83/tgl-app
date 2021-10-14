import { ICompany } from '../../app/shared/interfaces/company.interface';
export interface ICompanyState {
    companies: ICompany[];
    selectedCompany: ICompany;
}

export const initialCompanyState: ICompanyState = {
    companies: [],
    selectedCompany: null,
}
