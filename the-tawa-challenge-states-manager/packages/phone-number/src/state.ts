import { technicalErrorMessageType } from "@rihenhouli/ttcsm_common/lib/utils";
import {
  ImmerReducer,
  createActionCreators,
  createReducerFunction,
} from "immer-reducer";
import PhoneNumber from "./models/PhoneNumber";
/*
   Store states after lanching actions
   getObject : used to save the loading status, and if we have an exception 
   setObject : used to save the loading status, and to store the new PhoneNumber
   PhoneNumber : actual PhoneNumber
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
    phoneNumberData: PhoneNumber | null;
    errorMessage: string | null;
    technicalErrorMessage: technicalErrorMessageType | null;
  };
  phoneNumber: PhoneNumber | null;
  phoneNumberList: Array<PhoneNumber> | null;
};

export const initialState: State = {
  // PhoneNumber
  getObject: {
    loading: false,
    success: false,
    errorMessage: null,
    technicalErrorMessage: null,
  },
  setObject: {
    loading: false,
    success: false,
    phoneNumberData: null,
    errorMessage: null,
    technicalErrorMessage: null,
  },
  phoneNumber: {
    _id: "",
    phoneNumberValue: 0,
    countryCode: 0,
    user: "",
    createdBy: "",
    isDeleted: false,
    isMain:false,
    __v: 0,
  },
  phoneNumberList: [],
};

/*
The different action that can be launched from the front side
*/
export class phoneNumberState extends ImmerReducer<State> {
  /*
       Action to add a new phoneNumber informations
      */
  addData(phoneNumber: PhoneNumber) {
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
     Action to put a new PhoneNumber informations
    */
  updateData(phoneNumber: PhoneNumber) {
    this.draftState.setObject.loading = true;
    this.draftState.setObject.errorMessage = null;
    this.draftState.setObject.technicalErrorMessage = null;
    this.draftState.phoneNumber = phoneNumber;
    this.draftState.setObject.success = false;
  }

  /*
         Action will be handled if the "updateData" return success
        */
  updateDataSuccess(phoneNumber: PhoneNumber) {
    this.draftState.setObject.loading = false;
    this.draftState.setObject.errorMessage = null;
    this.draftState.setObject.technicalErrorMessage = null;
    this.draftState.phoneNumber = phoneNumber;
    this.draftState.setObject.success = true;
  }

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
    Action to get the PhoneNumber list
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
  listDataSuccess(phoneNumberList: Array<PhoneNumber>) {
    this.draftState.getObject.loading = false;
    this.draftState.phoneNumberList = phoneNumberList;
    this.draftState.getObject.errorMessage = null;
    this.draftState.getObject.technicalErrorMessage = null;
    this.draftState.getObject.success = true;
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
    Action to get the PhoneNumber by Id
    */
  getData(_id: string) {
    this.draftState.getObject.loading = true;
    this.draftState.getObject.errorMessage = null;
    this.draftState.getObject.technicalErrorMessage = null;
    this.draftState.getObject.success = false;
  }
  /*
         Action will be handled if the "getData" return success
         */
  getDataSuccess(phoneNumber: PhoneNumber) {
    this.draftState.getObject.loading = false;
    this.draftState.getObject.success = true;
    this.draftState.phoneNumber = phoneNumber;
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
    Action to get the PhoneNumber by user Id
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
  listDataByUserSuccess(phoneNumber: PhoneNumber[]) {
    this.draftState.getObject.loading = false;
    this.draftState.getObject.success = true;
    this.draftState.phoneNumberList = phoneNumber;
    this.draftState.getObject.errorMessage = null;
    this.draftState.getObject.technicalErrorMessage = null;
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
       Action to delete phoneNumber informations
      */
  deleteData(id:string) {
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
    this.draftState.setObject.technicalErrorMessage =
      technicalErrorMessage;
    this.draftState.setObject.success = false;
  }

  /*
       Action to restore phoneNumber informations
      */
  restoreData(id:string) {
    this.draftState.setObject.loading = true;
    this.draftState.setObject.errorMessage = null;
    this.draftState.setObject.technicalErrorMessage = null;
    this.draftState.phoneNumber=null
    this.draftState.setObject.success = false;
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
    this.draftState.setObject.technicalErrorMessage =
      technicalErrorMessage;
    this.draftState.setObject.success = false;
  }
  /*
    Action to initialise the state 
    */
  reset() {
    this.draftState = initialState;
  }
}
export const phoneNumberActions = createActionCreators(phoneNumberState);
export const phoneNumberReducerFunction = createReducerFunction(
  phoneNumberState,
  initialState
);
