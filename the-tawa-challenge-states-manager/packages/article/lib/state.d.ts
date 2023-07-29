import { technicalErrorMessageType } from "@rihenhouli/ttcsm_common/lib/utils";
import { ImmerReducer } from "immer-reducer";
import Article from "./models/Article";
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
        articleData: Article | null;
        errorMessage: string | null;
        technicalErrorMessage: technicalErrorMessageType | null;
    };
    article: Article | null;
    articleList: Array<Article> | null;
};
export declare const initialState: State;
export declare class articleState extends ImmerReducer<State> {
    addData(article: Article): void;
    addDataSuccess(): void;
    addDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    publishData(id: string): void;
    publishDataSuccess(): void;
    publishDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    updateData(article: Article): void;
    updateDataSuccess(article: Article): void;
    updateDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    getData(id: string): void;
    getDataSuccess(article: Article): void;
    getDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    listData(): void;
    listDataSuccess(articleList: Array<Article>): void;
    listDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    deleteData(id: string): void;
    deleteDataSuccess(): void;
    deleteDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    restoreData(id: string): void;
    restoreDataSuccess(): void;
    restoreDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    reset(): void;
}
export declare const articleActions: import("immer-reducer").ActionCreators<typeof articleState>;
export declare const articleReducerFunction: import("immer-reducer").ImmerReducerFunction<typeof articleState>;
