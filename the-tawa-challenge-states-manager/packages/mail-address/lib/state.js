"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailAddressReducerFunction = exports.mailAddressActions = exports.mailAddressState = exports.initialState = void 0;
var immer_reducer_1 = require("immer-reducer");
exports.initialState = {
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
        isMain: false,
        __v: 0,
    },
    mailAddressList: [],
};
/*
The different action that can be launched from the front side
*/
var mailAddressState = /** @class */ (function (_super) {
    __extends(mailAddressState, _super);
    function mailAddressState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*
         Action to add a new mailAddress informations
        */
    mailAddressState.prototype.addData = function (mailAddress) {
        this.draftState.setObject.loading = true;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = false;
    };
    /*
           Action will be handled if the "addData" return success
          */
    mailAddressState.prototype.addDataSuccess = function () {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = true;
    };
    /*
           Action will be handled if the "addData" will fails
          */
    mailAddressState.prototype.addDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = errorMessage;
        this.draftState.setObject.technicalErrorMessage =
            technicalErrorMessage;
        this.draftState.setObject.success = false;
    };
    /*
       Action to put a new MailAddress informations
      */
    mailAddressState.prototype.updateData = function (mailAddress) {
        this.draftState.setObject.loading = true;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.mailAddress = mailAddress;
        this.draftState.setObject.success = false;
    };
    /*
           Action will be handled if the "updateData" return success
          */
    mailAddressState.prototype.updateDataSuccess = function (mailAddress) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.mailAddress = mailAddress;
        this.draftState.setObject.success = true;
    };
    /*
           Action will be handled if the "updateData" will fails
          */
    mailAddressState.prototype.updateDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = errorMessage;
        this.draftState.setObject.technicalErrorMessage =
            technicalErrorMessage;
        this.draftState.setObject.success = false;
    };
    /*
      Action to get the MailAddress list
      */
    mailAddressState.prototype.listData = function () {
        this.draftState.getObject.loading = true;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = false;
    };
    /*
          Action will be handled if the "listData" return success
          */
    mailAddressState.prototype.listDataSuccess = function (mailAddressList) {
        this.draftState.getObject.loading = false;
        this.draftState.mailAddressList = mailAddressList;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = true;
    };
    /*
          Action will be handled if the "listData" will fails
          */
    mailAddressState.prototype.listDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = errorMessage;
        this.draftState.getObject.technicalErrorMessage =
            technicalErrorMessage;
        this.draftState.getObject.success = false;
    };
    /*
      Action to get the MailAddress by Id
      */
    mailAddressState.prototype.getData = function (_id) {
        this.draftState.getObject.loading = true;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = false;
    };
    /*
           Action will be handled if the "getData" return success
           */
    mailAddressState.prototype.getDataSuccess = function (mailAddress) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.success = true;
        this.draftState.mailAddress = mailAddress;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
    };
    /*
           Action will be handled if the "getData" will fails
           */
    mailAddressState.prototype.getDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = errorMessage;
        this.draftState.getObject.technicalErrorMessage =
            technicalErrorMessage;
        this.draftState.getObject.success = false;
    };
    /*
    Action to get the MailAddress by value
    */
    mailAddressState.prototype.getDataByValue = function (email) {
        this.draftState.getObject.loading = true;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = false;
    };
    /*
           Action will be handled if the "getDataByValue" return success
           */
    mailAddressState.prototype.getDataByValueSuccess = function (mailAddress) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.success = true;
        this.draftState.mailAddress = mailAddress;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
    };
    /*
           Action will be handled if the "getDataByValue" will fails
           */
    mailAddressState.prototype.getDataByValueFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = errorMessage;
        this.draftState.getObject.technicalErrorMessage =
            technicalErrorMessage;
        this.draftState.getObject.success = false;
    };
    /*
     Action to decline the MailAddress by Id
     */
    mailAddressState.prototype.declineData = function (email) {
        this.draftState.getObject.loading = true;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = false;
    };
    /*
           Action will be handled if the "declineData" return success
           */
    mailAddressState.prototype.declineDataSuccess = function () {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.success = true;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
    };
    /*
           Action will be handled if the "declineData" will fails
           */
    mailAddressState.prototype.declineDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = errorMessage;
        this.draftState.getObject.technicalErrorMessage =
            technicalErrorMessage;
        this.draftState.getObject.success = false;
    };
    /*
      Action to get the MailAddress by user Id
      */
    mailAddressState.prototype.listDataByUser = function (user) {
        this.draftState.getObject.loading = true;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = false;
    };
    /*
             Action will be handled if the "listDataByUser" return success
             */
    mailAddressState.prototype.listDataByUserSuccess = function (mailAddress) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.success = true;
        this.draftState.mailAddressList = mailAddress;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
    };
    /*
             Action will be handled if the "listDataByUser" will fails
             */
    mailAddressState.prototype.listDataByUserFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = errorMessage;
        this.draftState.getObject.technicalErrorMessage =
            technicalErrorMessage;
        this.draftState.getObject.success = false;
    };
    /*
         Action to delete mailAddress informations
        */
    mailAddressState.prototype.deleteData = function (id) {
        this.draftState.setObject.loading = true;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = false;
    };
    /*
    Action will be handled if the "deleteData" return success
              */
    mailAddressState.prototype.deleteDataSuccess = function () {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = true;
    };
    /*
               Action will be handled if the "deleteData" will fails
              */
    mailAddressState.prototype.deleteDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = errorMessage;
        this.draftState.setObject.technicalErrorMessage =
            technicalErrorMessage;
        this.draftState.setObject.success = false;
    };
    /*
         Action to restore mailAddress informations
        */
    mailAddressState.prototype.restoreData = function (id) {
        this.draftState.setObject.loading = true;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.mailAddress = null;
        this.draftState.setObject.success = false;
    };
    /*
               Action will be handled if the "restoreData" return success
              */
    mailAddressState.prototype.restoreDataSuccess = function () {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = true;
    };
    /*
               Action will be handled if the "restoreData" will fails
              */
    mailAddressState.prototype.restoreDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = errorMessage;
        this.draftState.setObject.technicalErrorMessage =
            technicalErrorMessage;
        this.draftState.setObject.success = false;
    };
    /*
      Action to initialise the state
      */
    mailAddressState.prototype.reset = function () {
        this.draftState = exports.initialState;
    };
    return mailAddressState;
}(immer_reducer_1.ImmerReducer));
exports.mailAddressState = mailAddressState;
exports.mailAddressActions = (0, immer_reducer_1.createActionCreators)(mailAddressState);
exports.mailAddressReducerFunction = (0, immer_reducer_1.createReducerFunction)(mailAddressState, exports.initialState);
