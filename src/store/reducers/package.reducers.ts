import { EPackageActions, PackageActions } from './../actions/package.actions';
import { IPackageState, initialPackageState } from './../state/package.state';

export const packageReducers = (
    state = initialPackageState,
    action: PackageActions
): IPackageState => {
    switch (action.type) {
        case EPackageActions.GetPackages: {
            return {
                ...state,
                packages: [],
            };
        }

        case EPackageActions.GetPackagesSuccess: {
            return {
                ...state,
                packages: action.payload
            };
        }

        case EPackageActions.FilterPackages: {
            return {
                ...state,
                filter: action.payload,
                packages: [],
            };
        }

        case EPackageActions.PackagesFiltered: {
            return {
                ...state,
                packages: action.payload
            };
        }

        case EPackageActions.SortPackages: {
            return {
                ...state,
                sortBy: action.payload,
                packages: [],
            };
        }

        case EPackageActions.PackagesSorted: {
            return {
                ...state,
                packages: action.payload
            };
        }

        default:
            return state;
    }
}