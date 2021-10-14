import { IAppState } from './../state/app.state';
import { ICompanyState } from './../state/company.state';
import { createSelector } from '@ngrx/store';
const selectCompanies = (state: IAppState) => state.companies;

export const selectCompanyList = createSelector(
    selectCompanies,
    (state: ICompanyState) => state.companies
)

export const selectSelectedCompany = createSelector(
    selectCompanies,
    (state: ICompanyState) => state.selectedCompany
)