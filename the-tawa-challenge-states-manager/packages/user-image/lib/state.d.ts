import { technicalErrorMessageType } from "@rihenhouli/ttcsm_common/lib/utils";
import { ImmerReducer } from "immer-reducer";
import UserImage from "./models/UserImage";
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
        userImageData: UserImage | null;
        errorMessage: string | null;
        technicalErrorMessage: technicalErrorMessageType | null;
    };
    userImage: UserImage | null;
    userImageList: Array<UserImage> | null;
};
export declare const initialState: State;
export declare class userImageState extends ImmerReducer<State> {
    uploadData(userImage: FormData): void;
    uploadDataSuccess(): void;
    uploadDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    downloadData(filename: string): void;
    downloadDataSuccess(): void;
    downloadDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    updateData(userImage: UserImage): void;
    updateDataSuccess(userImage: UserImage): void;
    updateDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    getData(id: string): void;
    getDataSuccess(userImage: UserImage): void;
    getDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    listData(): void;
    listDataSuccess(userImageList: Array<UserImage>): void;
    listDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    listDataByUser(user: string): void;
    listDataByUserSuccess(userImageList: Array<UserImage>): void;
    listDataByUserFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    deleteData(id: string): void;
    deleteDataSuccess(): void;
    deleteDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    restoreData(id: string): void;
    restoreDataSuccess(): void;
    restoreDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    reset(): void;
}
export declare const userImageActions: import("immer-reducer").ActionCreators<typeof userImageState>;
export declare const userImageReducerFunction: import("immer-reducer").ImmerReducerFunction<typeof userImageState>;
