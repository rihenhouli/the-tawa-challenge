import { technicalErrorMessageType } from "@rihenhouli/ttcsm_common/lib/utils";
import {
  ImmerReducer,
  createActionCreators,
  createReducerFunction,
} from "immer-reducer";
import User from "./models/User";
/*
   Store states after lanching actions
   getObject : used to save the loading status, and if we have an exception 
   setObject : used to save the loading status, and to store the new user user
   user : actual user user
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
    userData: User | null;
    errorMessage: string | null;
    technicalErrorMessage: technicalErrorMessageType | null;
  };
  user: User | null;
  userList: Array<User> | null;
};

export const initialState: State = {
  //user 
  getObject: {
    loading: false,
    success: false,
    errorMessage: null,
    technicalErrorMessage: null,
  },
  setObject: {
    loading: false,
    success: false,
    userData: null,
    errorMessage: null,
    technicalErrorMessage: null,
  },
  user: {
    _id: "",
    firstName: "",
    lastName: "",
    userName: "",
    birthDate: new Date(),
    userRole: "",
    userState: "",
    createdBy: "",
    isDeleted: false,
    __v: 0,
  },
  userList: [],
};

/*
The different action that can be launched from the front side
*/
export class userState extends ImmerReducer<State> {
  /*
     Action to add a new user informations
    */
  addData(user: User) {
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
     Action to confirm a new user informations
    */
     confirmData(id: string) {
      this.draftState.setObject.loading = true;
      this.draftState.setObject.errorMessage = null;
      this.draftState.setObject.technicalErrorMessage = null;
      this.draftState.setObject.success = false;
    }
  
    /*
           Action will be handled if the "confirmData" return success
          */
    confirmDataSuccess() {
      this.draftState.setObject.loading = false;
      this.draftState.setObject.errorMessage = null;
      this.draftState.setObject.technicalErrorMessage = null;
      this.draftState.setObject.success = true;
    }
  
    /*
           Action will be handled if the "confirmData" will fails
          */
    confirmDataFailure(
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
     Action to update user informations
    */
  updateData(user: User) {
    this.draftState.setObject.loading = true;
    this.draftState.setObject.errorMessage = null;
    this.draftState.setObject.technicalErrorMessage = null;
    this.draftState.user = user;
    this.draftState.setObject.success = false;
  }

  /*
  
     Action will be handled if the "updateData" return success
    */
  updateDataSuccess(user: User) {
    this.draftState.setObject.loading = false;
    this.draftState.setObject.errorMessage = null;
    this.draftState.setObject.technicalErrorMessage = null;
    this.draftState.user = user;
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
    Action to get one user user by user Id
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
  getDataSuccess(user: User) {
    this.draftState.getObject.loading = false;
    this.draftState.getObject.success = true;
    this.draftState.user = user;
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
    Action to get the users list
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
  listDataSuccess(userList: Array<User>) {
    this.draftState.getObject.loading = false;
    this.draftState.getObject.errorMessage = null;
    this.draftState.getObject.technicalErrorMessage = null;
    this.draftState.getObject.success = true;
    this.draftState.userList = userList;
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
    this.draftState.user = null;
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

export const userActions = createActionCreators(userState);
export const userReducerFunction = createReducerFunction(
  userState,
  initialState
);
