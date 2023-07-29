import { technicalErrorMessageType } from "@rihenhouli/ttcsm_common/lib/utils";
import { ImmerReducer } from "immer-reducer";
import ArticleSection from "./models/ArticleSection";
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
        articleSectionData: ArticleSection | null;
        errorMessage: string | null;
        technicalErrorMessage: technicalErrorMessageType | null;
    };
    articleSection: ArticleSection | null;
    articleSectionList: Array<ArticleSection> | null;
};
export declare const initialState: State;
export declare class articleSectionState extends ImmerReducer<State> {
    addData(articleSection: ArticleSection): void;
    addDataSuccess(): void;
    addDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    updateData(articleSection: ArticleSection): void;
    updateDataSuccess(articleSection: ArticleSection): void;
    updateDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    getData(id: string): void;
    getDataSuccess(articleSection: ArticleSection): void;
    getDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    listData(): void;
    listDataSuccess(articleSectionList: Array<ArticleSection>): void;
    listDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    listDataByArticle(article: string): void;
    listDataByArticleSuccess(articleSectionList: Array<ArticleSection>): void;
    listDataByArticleFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    deleteData(id: string): void;
    deleteDataSuccess(): void;
    deleteDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    restoreData(id: string): void;
    restoreDataSuccess(): void;
    restoreDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    reset(): void;
}
export declare const articleSectionActions: import("immer-reducer").ActionCreators<typeof articleSectionState>;
export declare const articleSectionReducerFunction: import("immer-reducer").ImmerReducerFunction<typeof articleSectionState>;
