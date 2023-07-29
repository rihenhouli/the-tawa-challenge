import { technicalErrorMessageType } from "@rihenhouli/ttcsm_common/lib/utils";
import {
  ImmerReducer,
  createActionCreators,
  createReducerFunction,
} from "immer-reducer";
import ArticleImage from "./models/ArticleImage";
/*
   Store states after lanching actions
   getObject : used to save the loading status, and if we have an exception 
   setObject : used to save the loading status, and to store the new articleImage articleImage
   articleImage : actual articleImage articleImage
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
    articleImageData: ArticleImage | null;
    errorMessage: string | null;
    technicalErrorMessage: technicalErrorMessageType | null;
  };
  articleImage: ArticleImage | null;
  articleImageList: Array<ArticleImage> | null;
};

export const initialState: State = {
  //articleImage
  getObject: {
    loading: false,
    success: false,
    errorMessage: null,
    technicalErrorMessage: null,
  },
  setObject: {
    loading: false,
    success: false,
    articleImageData: null,
    errorMessage: null,
    technicalErrorMessage: null,
  },
  articleImage: {
    _id: "",
    articleSection: "",
    articleImageName: "",
    articleImagePath: "",
    articleImageAlt: "",
    isMain: false,
    ref: "",
    creationDate: new Date(),
    createdBy: "",
    isDeleted: false,
    __v: 0,
  },
  articleImageList: [],
};

/*
The different action that can be launched from the front side
*/
export class articleImageState extends ImmerReducer<State> {
  /*
     Action to upload a new articleImage informations
    */
  uploadData(articleImage: FormData) {
    this.draftState.setObject.loading = true;
    this.draftState.setObject.errorMessage = null;
    this.draftState.setObject.technicalErrorMessage = null;
    this.draftState.setObject.success = false;
  }

  /*
         Action will be handled if the "uploadData" return success
        */
  uploadDataSuccess() {
    this.draftState.setObject.loading = false;
    this.draftState.setObject.errorMessage = null;
    this.draftState.setObject.technicalErrorMessage = null;
    this.draftState.setObject.success = true;
  }

  /*
         Action will be handled if the "uploadData" will fails
        */
  uploadDataFailure(
    errorMessage: string,
    technicalErrorMessage: technicalErrorMessageType
  ) {
    this.draftState.setObject.loading = false;
    this.draftState.setObject.errorMessage = errorMessage;
    this.draftState.setObject.technicalErrorMessage = technicalErrorMessage;
    this.draftState.setObject.success = false;
  }

  /*
     Action to download a new articleImage informations
    */
  downloadData(filename: string) {
    this.draftState.setObject.loading = true;
    this.draftState.setObject.errorMessage = null;
    this.draftState.setObject.technicalErrorMessage = null;
    this.draftState.setObject.success = false;
  }

  /*
           Action will be handled if the "downloadData" return success
          */
  downloadDataSuccess() {
    this.draftState.setObject.loading = false;
    this.draftState.setObject.errorMessage = null;
    this.draftState.setObject.technicalErrorMessage = null;
    this.draftState.setObject.success = true;
  }

  /*
           Action will be handled if the "downloadData" will fails
          */
  downloadDataFailure(
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
     Action to update articleImage informations
    */
  updateData(articleImage: ArticleImage) {
    this.draftState.setObject.loading = true;
    this.draftState.setObject.errorMessage = null;
    this.draftState.setObject.technicalErrorMessage = null;
    this.draftState.articleImage = articleImage;
    this.draftState.setObject.success = false;
  }

  /*
  
     Action will be handled if the "updateData" return success
    */
  updateDataSuccess(articleImage: ArticleImage) {
    this.draftState.setObject.loading = false;
    this.draftState.setObject.errorMessage = null;
    this.draftState.setObject.technicalErrorMessage = null;
    this.draftState.articleImage = articleImage;
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
    Action to get one articleImage articleImage by articleImage Id
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
  getDataSuccess(articleImage: ArticleImage) {
    this.draftState.getObject.loading = false;
    this.draftState.getObject.success = true;
    this.draftState.articleImage = articleImage;
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
    Action to get the articleImages list
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
  listDataSuccess(articleImageList: Array<ArticleImage>) {
    this.draftState.getObject.loading = false;
    this.draftState.getObject.errorMessage = null;
    this.draftState.getObject.technicalErrorMessage = null;
    this.draftState.getObject.success = true;
    this.draftState.articleImageList = articleImageList;
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
    Action to get the articleImages list by article
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
  listDataByArticleSuccess(articleImageList: Array<ArticleImage>) {
    this.draftState.getObject.loading = false;
    this.draftState.getObject.errorMessage = null;
    this.draftState.getObject.technicalErrorMessage = null;
    this.draftState.getObject.success = true;
    this.draftState.articleImageList = articleImageList;
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
    Action to get the articleImages list by article serction
    */
  listDataBySection(section: string) {
    this.draftState.getObject.loading = true;
    this.draftState.getObject.errorMessage = null;
    this.draftState.getObject.technicalErrorMessage = null;
    this.draftState.getObject.success = false;
  }
  /*
    Action will be handled if the "listDataBySection" return success
  */
  listDataBySectionSuccess(articleImageList: Array<ArticleImage>) {
    this.draftState.getObject.loading = false;
    this.draftState.getObject.errorMessage = null;
    this.draftState.getObject.technicalErrorMessage = null;
    this.draftState.getObject.success = true;
    this.draftState.articleImageList = articleImageList;
  }

  /*
  Action will be handled if the "listDataBySection" will fails
   */
  listDataBySectionFailure(
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
    this.draftState.articleImage = null;
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

export const articleImageActions = createActionCreators(articleImageState);
export const articleImageReducerFunction = createReducerFunction(
  articleImageState,
  initialState
);
