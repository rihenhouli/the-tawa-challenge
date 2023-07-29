import { technicalErrorMessageType } from "@rihenhouli/ttcsm_common/lib/utils";
import { ImmerReducer } from "immer-reducer";
import PhoneNumber from "./models/PhoneNumber";
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
        phoneNumberData: PhoneNumber | null;
        errorMessage: string | null;
        technicalErrorMessage: technicalErrorMessageType | null;
    };
    phoneNumber: PhoneNumber | null;
    phoneNumberList: Array<PhoneNumber> | null;
};
export declare const initialState: State;
export declare class phoneNumberState extends ImmerReducer<State> {
    addData(phoneNumber: PhoneNumber): void;
    addDataSuccess(): void;
    addDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    updateData(phoneNumber: PhoneNumber): void;
    updateDataSuccess(phoneNumber: PhoneNumber): void;
    updateDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    listData(): void;
    listDataSuccess(phoneNumberList: Array<PhoneNumber>): void;
    listDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    getData(_id: string): void;
    getDataSuccess(phoneNumber: PhoneNumber): void;
    getDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    listDataByUser(user: string): void;
    listDataByUserSuccess(phoneNumber: PhoneNumber[]): void;
    listDataByUserFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    deleteData(id: string): void;
    deleteDataSuccess(): void;
    deleteDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    restoreData(id: string): void;
    restoreDataSuccess(): void;
    restoreDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    reset(): void;
}
export declare const phoneNumberActions: import("immer-reducer").ActionCreators<typeof phoneNumberState>;
export declare const phoneNumberReducerFunction: import("immer-reducer").ImmerReducerFunction<typeof phoneNumberState>;
