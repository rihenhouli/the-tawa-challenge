import { technicalErrorMessageType } from "@rihenhouli/ttcsm_common/lib/utils";
import {
  ImmerReducer,
  createActionCreators,
  createReducerFunction,
} from "immer-reducer";
import Article from "./models/Article";
/*
   Store states after lanching actions
   getObject : used to save the loading status, and if we have an exception 
   setObject : used to save the loading status, and to store the new article article
   article : actual article article
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
    articleData: Article | null;
    errorMessage: string | null;
    technicalErrorMessage: technicalErrorMessageType | null;
  };
  article: Article | null;
  articleList: Array<Article> | null;
};

export const initialState: State = {
  //article 
  getObject: {
    loading: false,
    success: false,
    errorMessage: null,
    technicalErrorMessage: null,
  },
  setObject: {
    loading: false,
    success: false,
    articleData: null,
    errorMessage: null,
    technicalErrorMessage: null,
  },
  article: {
    _id: "",
    articleTitle: "",
    articleCategory: "",
    isArchived: false,
    isPublished: false,
    publishDate: new Date(),
    createdBy: "",
    isDeleted: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0,
  },
  articleList: [],
};

/*
The different action that can be launched from the front side
*/
export class articleState extends ImmerReducer<State> {
  /*
     Action to add a new article informations
    */
  addData(article: Article) {
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
    this.draftState.setObject.technicalErrorMessage =
      technicalErrorMessage;
    this.draftState.setObject.success = false;
  }

   /*
     Action to publish a new article informations
    */
     publishData(id: string) {
      this.draftState.setObject.loading = true;
      this.draftState.setObject.errorMessage = null;
      this.draftState.setObject.technicalErrorMessage = null;
      this.draftState.setObject.success = false;
    }
  
    /*
           Action will be handled if the "publishData" return success
          */
    publishDataSuccess() {
      this.draftState.setObject.loading = false;
      this.draftState.setObject.errorMessage = null;
      this.draftState.setObject.technicalErrorMessage = null;
      this.draftState.setObject.success = true;
    }
  
    /*
           Action will be handled if the "publishData" will fails
          */
    publishDataFailure(
      errorMessage: string,
      technicalErrorMessage: technicalErrorMessageType
    ) {
      this.draftState.setObject.loading = false;
      this.draftState.setObject.errorMessage = errorMessage;
      this.draftState.setObject.technicalErrorMessage =
        technicalErrorMessage;
      this.draftState.setObject.success = false;
    }

  /*
  /*
     Action to update article informations
    */
  updateData(article: Article) {
    this.draftState.setObject.loading = true;
    this.draftState.setObject.errorMessage = null;
    this.draftState.setObject.technicalErrorMessage = null;
    this.draftState.article = article;
    this.draftState.setObject.success = false;
  }

  /*
  
     Action will be handled if the "updateData" return success
    */
  updateDataSuccess(article: Article) {
    this.draftState.setObject.loading = false;
    this.draftState.setObject.errorMessage = null;
    this.draftState.setObject.technicalErrorMessage = null;
    this.draftState.article = article;
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
    this.draftState.setObject.technicalErrorMessage =
      technicalErrorMessage;
    this.draftState.setObject.success = false;
  }
  /*
    Action to get one article article by article Id
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
  getDataSuccess(article: Article) {
    this.draftState.getObject.loading = false;
    this.draftState.getObject.success = true;
    this.draftState.article = article;
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
    this.draftState.getObject.technicalErrorMessage =
      technicalErrorMessage;
    this.draftState.getObject.success = false;
  }

  /*
    Action to get the articles list
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
  listDataSuccess(articleList: Array<Article>) {
    this.draftState.getObject.loading = false;
    this.draftState.getObject.errorMessage = null;
    this.draftState.getObject.technicalErrorMessage = null;
    this.draftState.getObject.success = true;
    this.draftState.articleList = articleList;
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
    this.draftState.getObject.technicalErrorMessage =
      technicalErrorMessage;
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
    this.draftState.article = null;
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

export const articleActions = createActionCreators(articleState);
export const articleReducerFunction = createReducerFunction(
  articleState,
  initialState
);
