import { technicalErrorMessageType } from "@rihenhouli/ttcsm_common/lib/utils";
import {
  ImmerReducer,
  createActionCreators,
  createReducerFunction,
} from "immer-reducer";
import ArticleSection from "./models/ArticleSection";
/*
   Store states after lanching actions
   getObject : used to save the loading status, and if we have an exception 
   setObject : used to save the loading status, and to store the new articleSection articleSection
   articleSection : actual articleSection articleSection
*/
export type State = {
  //Solo
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

export const initialState: State = {
  //articleSection
  getObject: {
    loading: false,
    success: false,
    errorMessage: null,
    technicalErrorMessage: null,
  },
  setObject: {
    loading: false,
    success: false,
    articleSectionData: null,
    errorMessage: null,
    technicalErrorMessage: null,
  },
  articleSection: {
    _id: "",
    article: "",
    articleSectionName: "",
    articleSectionContent: "",
    addDate: new Date(),
    createdBy: "",
    isDeleted: false,
    __v: 0,
  },
  articleSectionList: [],
};

/*
The different action that can be launched from the front side
*/
export class articleSectionState extends ImmerReducer<State> {
  /*
   Action to add a new article informations
  */
  addData(articleSection: ArticleSection) {
    this.draftState.setObject.loading = true;
    this.draftState.setObject.errorMessage = null;
    this.draftState.setObject.technicalErrorMessage = null;
    this.draftState.setObject.success = false;
  }

  /*
   Action will be handled if the "addData" return success
 */
  addDataSuccess() {
    this.draftState.setObject.loading = false;
    this.draftState.setObject.errorMessage = null;
    this.draftState.setObject.technicalErrorMessage = null;
    this.draftState.setObject.success = true;
  }

  /*
   Action will be handled if the "addData" will fails
  */
  addDataFailure(
    errorMessage: string,
    technicalErrorMessage: technicalErrorMessageType
  ) {
    this.draftState.setObject.loading = false;
    this.draftState.setObject.errorMessage = errorMessage;
    this.draftState.setObject.technicalErrorMessage = technicalErrorMessage;
    this.draftState.setObject.success = false;
  }

  /*
  /*
   Action to update articleSection informations
  */
  updateData(articleSection: ArticleSection) {
    this.draftState.setObject.loading = true;
    this.draftState.setObject.errorMessage = null;
    this.draftState.setObject.technicalErrorMessage = null;
    this.draftState.articleSection = articleSection;
    this.draftState.setObject.success = false;
  }

  /*
    Action will be handled if the "updateData" return success
  */
  updateDataSuccess(articleSection: ArticleSection) {
    this.draftState.setObject.loading = false;
    this.draftState.setObject.errorMessage = null;
    this.draftState.setObject.technicalErrorMessage = null;
    this.draftState.articleSection = articleSection;
    this.draftState.setObject.success = true;
  }

  /*
  /*
    Action will be handled if the "updateData" will fails
  */
  updateDataFailure(
    errorMessage: string,
    technicalErrorMessage: technicalErrorMessageType
  ) {
    this.draftState.setObject.loading = false;
    this.draftState.setObject.errorMessage = errorMessage;
    this.draftState.setObject.technicalErrorMessage = technicalErrorMessage;
    this.draftState.setObject.success = false;
  }
  /*
    Action to get one articleSection articleSection by articleSection Id
  */
  getData(id: string) {
    this.draftState.getObject.loading = true;
    this.draftState.getObject.errorMessage = null;
    this.draftState.getObject.technicalErrorMessage = null;
    this.draftState.getObject.success = false;
  }
  /*
  Action will be handled if the "getData" return success
   */
  getDataSuccess(articleSection: ArticleSection) {
    this.draftState.getObject.loading = false;
    this.draftState.getObject.success = true;
    this.draftState.articleSection = articleSection;
    this.draftState.getObject.errorMessage = null;
    this.draftState.getObject.technicalErrorMessage = null;
  }

  /*
   Action will be handled if the "getData" will fails
  */
  getDataFailure(
    errorMessage: string,
    technicalErrorMessage: technicalErrorMessageType
  ) {
    this.draftState.getObject.loading = false;
    this.draftState.getObject.errorMessage = errorMessage;
    this.draftState.getObject.technicalErrorMessage = technicalErrorMessage;
    this.draftState.getObject.success = false;
  }

  /*
    Action to get the articleSections list
    */
  listData() {
    this.draftState.getObject.loading = true;
    this.draftState.getObject.errorMessage = null;
    this.draftState.getObject.technicalErrorMessage = null;
    this.draftState.getObject.success = false;
  }
  /*
    Action will be handled if the "listData" return success
   */
  listDataSuccess(articleSectionList: Array<ArticleSection>) {
    this.draftState.getObject.loading = false;
    this.draftState.getObject.errorMessage = null;
    this.draftState.getObject.technicalErrorMessage = null;
    this.draftState.getObject.success = true;
    this.draftState.articleSectionList = articleSectionList;
  }

  /*
   Action will be handled if the "listData" will fails
  */
  listDataFailure(
    errorMessage: string,
    technicalErrorMessage: technicalErrorMessageType
  ) {
    this.draftState.getObject.loading = false;
    this.draftState.getObject.errorMessage = errorMessage;
    this.draftState.getObject.technicalErrorMessage = technicalErrorMessage;
    this.draftState.getObject.success = false;
  }

  /*
    Action to get the articleSections list by article
  */
  listDataByArticle(article: string) {
    this.draftState.getObject.loading = true;
    this.draftState.getObject.errorMessage = null;
    this.draftState.getObject.technicalErrorMessage = null;
    this.draftState.getObject.success = false;
  }
  /*
    Action will be handled if the "listDataByArticle" return success
  */
  listDataByArticleSuccess(articleSectionList: Array<ArticleSection>) {
    this.draftState.getObject.loading = false;
    this.draftState.getObject.errorMessage = null;
    this.draftState.getObject.technicalErrorMessage = null;
    this.draftState.getObject.success = true;
    this.draftState.articleSectionList = articleSectionList;
  }

  /*
    Action will be handled if the "listDataByArticle" will fails
  */
  listDataByArticleFailure(
    errorMessage: string,
    technicalErrorMessage: technicalErrorMessageType
  ) {
    this.draftState.getObject.loading = false;
    this.draftState.getObject.errorMessage = errorMessage;
    this.draftState.getObject.technicalErrorMessage = technicalErrorMessage;
    this.draftState.getObject.success = false;
  }

  /*
    Action to delete Person informations
   */
  deleteData(id: string) {
    this.draftState.setObject.loading = true;
    this.draftState.setObject.errorMessage = null;
    this.draftState.setObject.technicalErrorMessage = null;
    this.draftState.setObject.success = false;
  }

  /*
   Action will be handled if the "deleteData" return success
  */
  deleteDataSuccess() {
    this.draftState.setObject.loading = false;
    this.draftState.setObject.errorMessage = null;
    this.draftState.setObject.technicalErrorMessage = null;
    this.draftState.setObject.success = true;
  }

  /*
   Action will be handled if the "deleteData" will fails
   */
  deleteDataFailure(
    errorMessage: string,
    technicalErrorMessage: technicalErrorMessageType
  ) {
    this.draftState.setObject.loading = false;
    this.draftState.setObject.errorMessage = errorMessage;
    this.draftState.setObject.technicalErrorMessage = technicalErrorMessage;
    this.draftState.setObject.success = false;
  }

  /*
   Action to restore Person informations
  */
  restoreData(id: string) {
    this.draftState.setObject.loading = true;
    this.draftState.setObject.errorMessage = null;
    this.draftState.setObject.technicalErrorMessage = null;
    this.draftState.articleSection = null;
  }

  /*
   Action will be handled if the "restoreData" return success
  */
  restoreDataSuccess() {
    this.draftState.setObject.loading = false;
    this.draftState.setObject.errorMessage = null;
    this.draftState.setObject.technicalErrorMessage = null;
    this.draftState.setObject.success = true;
  }

  /*
   Action will be handled if the "restoreData" will fails
  */
  restoreDataFailure(
    errorMessage: string,
    technicalErrorMessage: technicalErrorMessageType
  ) {
    this.draftState.setObject.loading = false;
    this.draftState.setObject.errorMessage = errorMessage;
    this.draftState.setObject.technicalErrorMessage = technicalErrorMessage;
    this.draftState.setObject.success = false;
  }

  /*
    Action to initialise the state 
    */
  reset() {
    this.draftState = initialState;
  }
}

export const articleSectionActions = createActionCreators(articleSectionState);
export const articleSectionReducerFunction = createReducerFunction(
  articleSectionState,
  initialState
);
