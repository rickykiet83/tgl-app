import { AuthActions, EAuthActions } from './../actions/auth.actions';
import { IAuthState, initialAuthState } from './../state/auth.state';

export const authReducers = (
    state = initialAuthState,
    action: AuthActions
): IAuthState => {
    switch (action.type) {
        case EAuthActions.LoginWithToken: {
            return {
                ...state,
                token: action.payload
            };
        }
        case EAuthActions.LoginWithTokenSuccess: {
            return {
                ...state,
                authenticatedUser: action.payload
            };
        }

        default:
            return state;
    }
}