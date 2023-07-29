import { technicalErrorMessageType } from "@rihenhouli/ttcsm_common/lib/utils";
import { ImmerReducer } from "immer-reducer";
import UserPassword from "./models/UserPassword";
export type State = {
    getObject: {
        loading: boolean;
        success: boolean;
        errorMessage: string | null;
        technicalErrorMessage: technicalErrorMessageType | null;
    };
    setObject: {
        loading: boolean;
        success: boolean;
        userPasswordData: UserPassword | null;
        errorMessage: string | null;
        technicalErrorMessage: technicalErrorMessageType | null;
    };
    userPassword: UserPassword | null;
    userPasswordList: Array<UserPassword> | null;
};
export declare const initialState: State;
export declare class userPasswordState extends ImmerReducer<State> {
    addData(userPassword: UserPassword): void;
    addDataSuccess(): void;
    addDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    resetData(email: string): void;
    resetDataSuccess(): void;
    resetDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    listData(): void;
    listDataSuccess(userPasswordList: Array<UserPassword>): void;
    listDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    listDataByUser(user: string): void;
    listDataByUserSuccess(userPasswordList: Array<UserPassword>): void;
    listDataByUserFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    reset(): void;
}
export declare const userPasswordActions: import("immer-reducer").ActionCreators<typeof userPasswordState>;
export declare const userPasswordReducerFunction: import("immer-reducer").ImmerReducerFunction<typeof userPasswordState>;
