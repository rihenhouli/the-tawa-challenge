import { ImmerReducer } from "immer-reducer";
import UserLoggedIn from "./models/UserLoggedIn";
export type State = {
    login: {
        loading: boolean;
        success: boolean;
        errorMessage: string | null;
    };
    logout: {
        loading: boolean;
        success: boolean;
        errorMessage: string | null;
    };
    userLoggedIn: null | UserLoggedIn;
};
export declare const initialState: State;
export interface loginParam {
    login: string;
    password: string;
}
export declare class authState extends ImmerReducer<State> {
    login(payload: loginParam): void;
    loginFailure(payload: string): void;
    loginSuccess(user: UserLoggedIn): void;
    logout(): void;
    logoutFailure(errorMessage: string): void;
    logoutSuccess(): void;
    setLoggedInUser(user: UserLoggedIn): void;
}
export declare const authActions: import("immer-reducer").ActionCreators<typeof authState>;
export declare const authReducerFunction: import("immer-reducer").ImmerReducerFunction<typeof authState>;
