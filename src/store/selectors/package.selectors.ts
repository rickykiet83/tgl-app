import { IAppState } from 'store/state';
import { IPackageState } from './../state/package.state';
import { createSelector } from '@ngrx/store';
const selectPackages = (state: IAppState) => state.packages;

export const selectPackageList = createSelector(
    selectPackages,
    (state: IPackageState) => state.packages
)
