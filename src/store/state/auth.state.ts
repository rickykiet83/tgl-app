import { IAuthenticatedUser } from './../../app/shared/interfaces/auth-user.interface';

export interface IAuthState {
    isAuthenticated: boolean;
    token: string;
    authenticatedUser: IAuthenticatedUser;
}

export const initialAuthState: IAuthState = {
    isAuthenticated: false,
    token: null,
    authenticatedUser: null,
};