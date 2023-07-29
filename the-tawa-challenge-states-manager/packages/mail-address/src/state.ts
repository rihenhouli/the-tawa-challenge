import { technicalErrorMessageType } from "@rihenhouli/ttcsm_common/lib/utils";
import {
  ImmerReducer,
  createActionCreators,
  createReducerFunction,
} from "immer-reducer";
import MailAddress from "./models/MailAddress";
/*
   Store states after lanching actions
   getObject : used to save the loading status, and if we have an exception 
   setObject : used to save the loading status, and to store the new MailAddress
   MailAddress : actual MailAddress
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
    mailAddressData: MailAddress | null;
    errorMessage: string | null;
    technicalErrorMessage: technicalErrorMessageType | null;
  };
  mailAddress: MailAddress | null;
  mailAddressList: Array<MailAddress> | null;
};

export const initialState: State = {
  // MailAddress
  getObject: {
    loading: false,
    success: false,
    errorMessage: null,
    technicalErrorMessage: null,
  },
  setObject: {
    loading: false,
    success: false,
    mailAddressData: null,
    errorMessage: null,
    technicalErrorMessage: null,
  },
  mailAddress: {
    _id: "",
    mailAddressValue: "",
    user: "",
    createdBy: "",
    isDeleted: false,
    isMain:false,
    __v: 0,
  },
  mailAddressList: [],
};

/*
The different action that can be launched from the front side
*/
export class mailAddressState extends ImmerReducer<State> {
  /*
       Action to add a new mailAddress informations
      */
  addData(mailAddress: MailAddress) {
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
     Action to put a new MailAddress informations
    */
  updateData(mailAddress: MailAddress) {
    this.draftState.setObject.loading = true;
    this.draftState.setObject.errorMessage = null;
    this.draftState.setObject.technicalErrorMessage = null;
    this.draftState.mailAddress = mailAddress;
    this.draftState.setObject.success = false;
  }

  /*
         Action will be handled if the "updateData" return success
        */
  updateDataSuccess(mailAddress: MailAddress) {
    this.draftState.setObject.loading = false;
    this.draftState.setObject.errorMessage = null;
    this.draftState.setObject.technicalErrorMessage = null;
    this.draftState.mailAddress = mailAddress;
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
    Action to get the MailAddress list
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
  listDataSuccess(mailAddressList: Array<MailAddress>) {
    this.draftState.getObject.loading = false;
    this.draftState.mailAddressList = mailAddressList;
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
    Action to get the MailAddress by Id
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
  getDataSuccess(mailAddress: MailAddress) {
    this.draftState.getObject.loading = false;
    this.draftState.getObject.success = true;
    this.draftState.mailAddress = mailAddress;
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
    Action to get the MailAddress by value
    */
    getDataByValue(email: string) {
      this.draftState.getObject.loading = true;
      this.draftState.getObject.errorMessage = null;
      this.draftState.getObject.technicalErrorMessage = null;
      this.draftState.getObject.success = false;
    }
    /*
           Action will be handled if the "getDataByValue" return success
           */
    getDataByValueSuccess(mailAddress: MailAddress) {
      this.draftState.getObject.loading = false;
      this.draftState.getObject.success = true;
      this.draftState.mailAddress = mailAddress;
      this.draftState.getObject.errorMessage = null;
      this.draftState.getObject.technicalErrorMessage = null;
    }
  
    /*
           Action will be handled if the "getDataByValue" will fails
           */
    getDataByValueFailure(
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
    Action to decline the MailAddress by Id
    */
    declineData(email: string) {
      this.draftState.getObject.loading = true;
      this.draftState.getObject.errorMessage = null;
      this.draftState.getObject.technicalErrorMessage = null;
      this.draftState.getObject.success = false;
    }
    /*
           Action will be handled if the "declineData" return success
           */
    declineDataSuccess() {
      this.draftState.getObject.loading = false;
      this.draftState.getObject.success = true;
      this.draftState.getObject.errorMessage = null;
      this.draftState.getObject.technicalErrorMessage = null;
    }
  
    /*
           Action will be handled if the "declineData" will fails
           */
    declineDataFailure(
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
    Action to get the MailAddress by user Id
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
  listDataByUserSuccess(mailAddress: MailAddress[]) {
    this.draftState.getObject.loading = false;
    this.draftState.getObject.success = true;
    this.draftState.mailAddressList = mailAddress;
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
       Action to delete mailAddress informations
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
       Action to restore mailAddress informations
      */
  restoreData(id:string) {
    this.draftState.setObject.loading = true;
    this.draftState.setObject.errorMessage = null;
    this.draftState.setObject.technicalErrorMessage = null;
    this.draftState.mailAddress=null
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
export const mailAddressActions = createActionCreators(mailAddressState);
export const mailAddressReducerFunction = createReducerFunction(
  mailAddressState,
  initialState
);
