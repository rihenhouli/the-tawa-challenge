import { technicalErrorMessageType } from "@rihenhouli/ttcsm_common/lib/utils";
import { ImmerReducer } from "immer-reducer";
import ArticleImage from "./models/ArticleImage";
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
        articleImageData: ArticleImage | null;
        errorMessage: string | null;
        technicalErrorMessage: technicalErrorMessageType | null;
    };
    articleImage: ArticleImage | null;
    articleImageList: Array<ArticleImage> | null;
};
export declare const initialState: State;
export declare class articleImageState extends ImmerReducer<State> {
    uploadData(articleImage: FormData): void;
    uploadDataSuccess(): void;
    uploadDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    downloadData(filename: string): void;
    downloadDataSuccess(): void;
    downloadDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    updateData(articleImage: ArticleImage): void;
    updateDataSuccess(articleImage: ArticleImage): void;
    updateDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    getData(id: string): void;
    getDataSuccess(articleImage: ArticleImage): void;
    getDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    listData(): void;
    listDataSuccess(articleImageList: Array<ArticleImage>): void;
    listDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    listDataByArticle(article: string): void;
    listDataByArticleSuccess(articleImageList: Array<ArticleImage>): void;
    listDataByArticleFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    listDataBySection(section: string): void;
    listDataBySectionSuccess(articleImageList: Array<ArticleImage>): void;
    listDataBySectionFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    deleteData(id: string): void;
    deleteDataSuccess(): void;
    deleteDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    restoreData(id: string): void;
    restoreDataSuccess(): void;
    restoreDataFailure(errorMessage: string, technicalErrorMessage: technicalErrorMessageType): void;
    reset(): void;
}
export declare const articleImageActions: import("immer-reducer").ActionCreators<typeof articleImageState>;
export declare const articleImageReducerFunction: import("immer-reducer").ImmerReducerFunction<typeof articleImageState>;
