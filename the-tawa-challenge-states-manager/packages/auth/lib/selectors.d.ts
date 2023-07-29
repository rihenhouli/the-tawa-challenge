import { States } from './index';
import UserLoggedIn from './models/UserLoggedIn';
export declare function getAuthState(states: States): import("./state").State;
export declare function getLoggedInUser(states: States): UserLoggedIn | null;
export declare function getLogInState(states: States): {
    loading: boolean;
    success: boolean;
    errorMessage: string | null;
};
export declare function getLogOutState(states: States): {
    loading: boolean;
    success: boolean;
    errorMessage: string | null;
};
