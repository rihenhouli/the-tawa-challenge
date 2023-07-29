import { technicalErrorMessageType } from "@rihenhouli/ttcsm_common/lib/utils";
import {
  ImmerReducer,
  createActionCreators,
  createReducerFunction,
} from "immer-reducer";
import UserPassword from "./models/UserPassword";
/*
   Store states after lanching actions
   getObject : used to save the loading status, and if we have an exception 
   setObject : used to save the loading status, and to store the new userPassword userPassword
   userPassword : actual userPassword userPassword
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
    userPasswordData: UserPassword | null;
    errorMessage: string | null;
    technicalErrorMessage: technicalErrorMessageType | null;
  };
  userPassword: UserPassword | null;
  userPasswordList: Array<UserPassword> | null;
};

export const initialState: State = {
  //userPassword
  getObject: {
    loading: false,
    success: false,
    errorMessage: null,
    technicalErrorMessage: null,
  },
  setObject: {
    loading: false,
    success: false,
    userPasswordData: null,
    errorMessage: null,
    technicalErrorMessage: null,
  },
  userPassword: {
    _id: "",
    userPasswordValue: "",
    user: "",
    createdBy: "",
    isDeleted: false,
    __v: 0,
  },
  userPasswordList: [],
};

/*
The different action that can be launched from the front side
*/
export class userPasswordState extends ImmerReducer<State> {
  /*
     Action to add a new userPassword informations
    */
  addData(userPassword: UserPassword) {
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
     Action to reset password
    */
  resetData(email: string) {
    this.draftState.setObject.loading = true;
    this.draftState.setObject.errorMessage = null;
    this.draftState.setObject.technicalErrorMessage = null;
    this.draftState.setObject.success = false;
  }

  /*
           Action will be handled if the "resetData" return success
          */
  resetDataSuccess() {
    this.draftState.setObject.loading = false;
    this.draftState.setObject.errorMessage = null;
    this.draftState.setObject.technicalErrorMessage = null;
    this.draftState.setObject.success = true;
  }

  /*
           Action will be handled if the "resetData" will fails
          */
  resetDataFailure(
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
    Action to get the userPasswords list
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
  listDataSuccess(userPasswordList: Array<UserPassword>) {
    this.draftState.getObject.loading = false;
    this.draftState.getObject.errorMessage = null;
    this.draftState.getObject.technicalErrorMessage = null;
    this.draftState.getObject.success = true;
    this.draftState.userPasswordList = userPasswordList;
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
    Action to get the userPasswords list by user
    */
  listDataByUser(user: string) {
    this.draftState.getObject.loading = true;
    this.draftState.getObject.errorMessage = null;
    this.draftState.getObject.technicalErrorMessage = null;
    this.draftState.getObject.success = false;
  }
  /*
          Action will be handled if the "listDataByUser" return success
          */
  listDataByUserSuccess(userPasswordList: Array<UserPassword>) {
    this.draftState.getObject.loading = false;
    this.draftState.getObject.errorMessage = null;
    this.draftState.getObject.technicalErrorMessage = null;
    this.draftState.getObject.success = true;
    this.draftState.userPasswordList = userPasswordList;
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
    this.draftState.getObject.technicalErrorMessage = technicalErrorMessage;
    this.draftState.getObject.success = false;
  }
  /*
    Action to initialise the state 
    */
  reset() {
    this.draftState = initialState;
  }
}

export const userPasswordActions = createActionCreators(userPasswordState);
export const userPasswordReducerFunction = createReducerFunction(
  userPasswordState,
  initialState
);
