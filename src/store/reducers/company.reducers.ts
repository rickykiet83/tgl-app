import { CompanyActions, ECompanyActions } from './../actions';

import { ICompanyState } from './../state/company.state';
import { initialCompanyState } from './../state';

export const companyReducers = (
    state = initialCompanyState,
    action: CompanyActions
): ICompanyState => {
    switch (action.type) {
        case ECompanyActions.GetCompaniesSuccess: {
            return {
                ...state,
                companies: action.payload
            };
        }

        case ECompanyActions.GetCompanySuccess: {
            return {
                ...state,
                selectedCompany: action.payload
            };
        }

        default:
            return state;
    }
}