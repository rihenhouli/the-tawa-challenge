import { technicalErrorMessageType } from "@rihenhouli/ttcsm_common/lib/utils";
import {
  ImmerReducer,
  createActionCreators,
  createReducerFunction,
} from "immer-reducer";
import UserImage from "./models/UserImage";
/*
   Store states after lanching actions
   getObject : used to save the loading status, and if we have an exception 
   setObject : used to save the loading status, and to store the new userImage userImage
   userImage : actual userImage userImage
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
    userImageData: UserImage | null;
    errorMessage: string | null;
    technicalErrorMessage: technicalErrorMessageType | null;
  };
  userImage: UserImage | null;
  userImageList: Array<UserImage> | null;
};

export const initialState: State = {
  //userImage 
  getObject: {
    loading: false,
    success: false,
    errorMessage: null,
    technicalErrorMessage: null,
  },
  setObject: {
    loading: false,
    success: false,
    userImageData: null,
    errorMessage: null,
    technicalErrorMessage: null,
  },
  userImage: {
    _id: "",
    user : "",
    userImageName : "",
    userImagePath : "",
    userImageAlt : "",
    isMain : false,
    ref : "",
    creationDate : new Date(),
    createdBy: "",
    isDeleted: false,
    __v: 0,
  },
  userImageList: [],
};

/*
The different action that can be launched from the front side
*/
export class userImageState extends ImmerReducer<State> {
  /*
     Action to upload a new userImage informations
    */
  uploadData(userImage: FormData) {
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
    this.draftState.setObject.technicalErrorMessage =
      technicalErrorMessage;
    this.draftState.setObject.success = false;
  }

    /*
     Action to download a new userImage informations
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
      this.draftState.setObject.technicalErrorMessage =
        technicalErrorMessage;
      this.draftState.setObject.success = false;
    }

  /*
  /*
     Action to update userImage informations
    */
  updateData(userImage: UserImage) {
    this.draftState.setObject.loading = true;
    this.draftState.setObject.errorMessage = null;
    this.draftState.setObject.technicalErrorMessage = null;
    this.draftState.userImage = userImage;
    this.draftState.setObject.success = false;
  }

  /*
  
     Action will be handled if the "updateData" return success
    */
  updateDataSuccess(userImage: UserImage) {
    this.draftState.setObject.loading = false;
    this.draftState.setObject.errorMessage = null;
    this.draftState.setObject.technicalErrorMessage = null;
    this.draftState.userImage = userImage;
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
    Action to get one userImage userImage by userImage Id
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
  getDataSuccess(userImage: UserImage) {
    this.draftState.getObject.loading = false;
    this.draftState.getObject.success = true;
    this.draftState.userImage = userImage;
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
    Action to get the userImages list
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
  listDataSuccess(userImageList: Array<UserImage>) {
    this.draftState.getObject.loading = false;
    this.draftState.getObject.errorMessage = null;
    this.draftState.getObject.technicalErrorMessage = null;
    this.draftState.getObject.success = true;
    this.draftState.userImageList = userImageList;
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
    Action to get the userImages list by user
    */
    listDataByUser(user:string) {
      this.draftState.getObject.loading = true;
      this.draftState.getObject.errorMessage = null;
      this.draftState.getObject.technicalErrorMessage = null;
      this.draftState.getObject.success = false;
    }
    /*
          Action will be handled if the "listDataByUser" return success
          */
    listDataByUserSuccess(userImageList: Array<UserImage>) {
      this.draftState.getObject.loading = false;
      this.draftState.getObject.errorMessage = null;
      this.draftState.getObject.technicalErrorMessage = null;
      this.draftState.getObject.success = true;
      this.draftState.userImageList = userImageList;
    }
  
    /*
          Action will be handled if the "listDataByUser" will fails
          */
    listDataByUserFailure(
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
    this.draftState.userImage = null;
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

export const userImageActions = createActionCreators(userImageState);
export const userImageReducerFunction = createReducerFunction(
  userImageState,
  initialState
);
