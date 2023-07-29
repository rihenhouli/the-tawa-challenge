import { technicalErrorMessageType } from "@rihenhouli/ttcsm_common/lib/utils";
import { ImmerReducer } from "immer-reducer";
import User from "./models/User";
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
        userData: User | null;
        errorMessage: string | null;
        technicalErrorMessage: technicalErrorMessageType | null;
    };
    user: User | null;
    userList: Array<User> | null;
};
export declare const initialState: State;
export declare class userState extends ImmerReducer<State> {
    addData(user: User): void;
    addDataSuccess(): void;
    addDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    confirmData(id: string): void;
    confirmDataSuccess(): void;
    confirmDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    updateData(user: User): void;
    updateDataSuccess(user: User): void;
    updateDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    getData(id: string): void;
    getDataSuccess(user: User): void;
    getDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    listData(): void;
    listDataSuccess(userList: Array<User>): void;
    listDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    deleteData(id: string): void;
    deleteDataSuccess(): void;
    deleteDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    restoreData(id: string): void;
    restoreDataSuccess(): void;
    restoreDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    reset(): void;
}
export declare const userActions: import("immer-reducer").ActionCreators<typeof userState>;
export declare const userReducerFunction: import("immer-reducer").ImmerReducerFunction<typeof userState>;
