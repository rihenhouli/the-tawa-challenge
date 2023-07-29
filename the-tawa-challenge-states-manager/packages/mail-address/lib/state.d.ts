import { technicalErrorMessageType } from "@rihenhouli/ttcsm_common/lib/utils";
import { ImmerReducer } from "immer-reducer";
import MailAddress from "./models/MailAddress";
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
        mailAddressData: MailAddress | null;
        errorMessage: string | null;
        technicalErrorMessage: technicalErrorMessageType | null;
    };
    mailAddress: MailAddress | null;
    mailAddressList: Array<MailAddress> | null;
};
export declare const initialState: State;
export declare class mailAddressState extends ImmerReducer<State> {
    addData(mailAddress: MailAddress): void;
    addDataSuccess(): void;
    addDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    updateData(mailAddress: MailAddress): void;
    updateDataSuccess(mailAddress: MailAddress): void;
    updateDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    listData(): void;
    listDataSuccess(mailAddressList: Array<MailAddress>): void;
    listDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    getData(_id: string): void;
    getDataSuccess(mailAddress: MailAddress): void;
    getDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    getDataByValue(email: string): void;
    getDataByValueSuccess(mailAddress: MailAddress): void;
    getDataByValueFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    declineData(email: string): void;
    declineDataSuccess(): void;
    declineDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    listDataByUser(user: string): void;
    listDataByUserSuccess(mailAddress: MailAddress[]): void;
    listDataByUserFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    deleteData(id: string): void;
    deleteDataSuccess(): void;
    deleteDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    restoreData(id: string): void;
    restoreDataSuccess(): void;
    restoreDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    reset(): void;
}
export declare const mailAddressActions: import("immer-reducer").ActionCreators<typeof mailAddressState>;
export declare const mailAddressReducerFunction: import("immer-reducer").ImmerReducerFunction<typeof mailAddressState>;
