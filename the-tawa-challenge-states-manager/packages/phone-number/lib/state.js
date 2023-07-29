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
exports.phoneNumberReducerFunction = exports.phoneNumberActions = exports.phoneNumberState = exports.initialState = void 0;
var immer_reducer_1 = require("immer-reducer");
exports.initialState = {
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
        isMain: false,
        __v: 0,
    },
    phoneNumberList: [],
};
/*
The different action that can be launched from the front side
*/
var phoneNumberState = /** @class */ (function (_super) {
    __extends(phoneNumberState, _super);
    function phoneNumberState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*
         Action to add a new phoneNumber informations
        */
    phoneNumberState.prototype.addData = function (phoneNumber) {
        this.draftState.setObject.loading = true;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = false;
    };
    /*
           Action will be handled if the "addData" return success
          */
    phoneNumberState.prototype.addDataSuccess = function () {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = true;
    };
    /*
           Action will be handled if the "addData" will fails
          */
    phoneNumberState.prototype.addDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = errorMessage;
        this.draftState.setObject.technicalErrorMessage =
            technicalErrorMessage;
        this.draftState.setObject.success = false;
    };
    /*
       Action to put a new PhoneNumber informations
      */
    phoneNumberState.prototype.updateData = function (phoneNumber) {
        this.draftState.setObject.loading = true;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.phoneNumber = phoneNumber;
        this.draftState.setObject.success = false;
    };
    /*
           Action will be handled if the "updateData" return success
          */
    phoneNumberState.prototype.updateDataSuccess = function (phoneNumber) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.phoneNumber = phoneNumber;
        this.draftState.setObject.success = true;
    };
    /*
           Action will be handled if the "updateData" will fails
          */
    phoneNumberState.prototype.updateDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = errorMessage;
        this.draftState.setObject.technicalErrorMessage =
            technicalErrorMessage;
        this.draftState.setObject.success = false;
    };
    /*
      Action to get the PhoneNumber list
      */
    phoneNumberState.prototype.listData = function () {
        this.draftState.getObject.loading = true;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = false;
    };
    /*
          Action will be handled if the "listData" return success
          */
    phoneNumberState.prototype.listDataSuccess = function (phoneNumberList) {
        this.draftState.getObject.loading = false;
        this.draftState.phoneNumberList = phoneNumberList;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = true;
    };
    /*
          Action will be handled if the "listData" will fails
          */
    phoneNumberState.prototype.listDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = errorMessage;
        this.draftState.getObject.technicalErrorMessage =
            technicalErrorMessage;
        this.draftState.getObject.success = false;
    };
    /*
      Action to get the PhoneNumber by Id
      */
    phoneNumberState.prototype.getData = function (_id) {
        this.draftState.getObject.loading = true;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = false;
    };
    /*
           Action will be handled if the "getData" return success
           */
    phoneNumberState.prototype.getDataSuccess = function (phoneNumber) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.success = true;
        this.draftState.phoneNumber = phoneNumber;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
    };
    /*
           Action will be handled if the "getData" will fails
           */
    phoneNumberState.prototype.getDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = errorMessage;
        this.draftState.getObject.technicalErrorMessage =
            technicalErrorMessage;
        this.draftState.getObject.success = false;
    };
    /*
      Action to get the PhoneNumber by user Id
      */
    phoneNumberState.prototype.listDataByUser = function (user) {
        this.draftState.getObject.loading = true;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = false;
    };
    /*
             Action will be handled if the "listDataByUser" return success
             */
    phoneNumberState.prototype.listDataByUserSuccess = function (phoneNumber) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.success = true;
        this.draftState.phoneNumberList = phoneNumber;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
    };
    /*
             Action will be handled if the "listDataByUser" will fails
             */
    phoneNumberState.prototype.listDataByUserFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = errorMessage;
        this.draftState.getObject.technicalErrorMessage =
            technicalErrorMessage;
        this.draftState.getObject.success = false;
    };
    /*
         Action to delete phoneNumber informations
        */
    phoneNumberState.prototype.deleteData = function (id) {
        this.draftState.setObject.loading = true;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = false;
    };
    /*
    Action will be handled if the "deleteData" return success
              */
    phoneNumberState.prototype.deleteDataSuccess = function () {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = true;
    };
    /*
               Action will be handled if the "deleteData" will fails
              */
    phoneNumberState.prototype.deleteDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = errorMessage;
        this.draftState.setObject.technicalErrorMessage =
            technicalErrorMessage;
        this.draftState.setObject.success = false;
    };
    /*
         Action to restore phoneNumber informations
        */
    phoneNumberState.prototype.restoreData = function (id) {
        this.draftState.setObject.loading = true;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.phoneNumber = null;
        this.draftState.setObject.success = false;
    };
    /*
               Action will be handled if the "restoreData" return success
              */
    phoneNumberState.prototype.restoreDataSuccess = function () {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = true;
    };
    /*
               Action will be handled if the "restoreData" will fails
              */
    phoneNumberState.prototype.restoreDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = errorMessage;
        this.draftState.setObject.technicalErrorMessage =
            technicalErrorMessage;
        this.draftState.setObject.success = false;
    };
    /*
      Action to initialise the state
      */
    phoneNumberState.prototype.reset = function () {
        this.draftState = exports.initialState;
    };
    return phoneNumberState;
}(immer_reducer_1.ImmerReducer));
exports.phoneNumberState = phoneNumberState;
exports.phoneNumberActions = (0, immer_reducer_1.createActionCreators)(phoneNumberState);
exports.phoneNumberReducerFunction = (0, immer_reducer_1.createReducerFunction)(phoneNumberState, exports.initialState);
