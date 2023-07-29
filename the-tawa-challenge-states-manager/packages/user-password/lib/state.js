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
exports.userPasswordReducerFunction = exports.userPasswordActions = exports.userPasswordState = exports.initialState = void 0;
var immer_reducer_1 = require("immer-reducer");
exports.initialState = {
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
var userPasswordState = /** @class */ (function (_super) {
    __extends(userPasswordState, _super);
    function userPasswordState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*
       Action to add a new userPassword informations
      */
    userPasswordState.prototype.addData = function (userPassword) {
        this.draftState.setObject.loading = true;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = false;
    };
    /*
           Action will be handled if the "addData" return success
          */
    userPasswordState.prototype.addDataSuccess = function () {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = true;
    };
    /*
           Action will be handled if the "addData" will fails
          */
    userPasswordState.prototype.addDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = errorMessage;
        this.draftState.setObject.technicalErrorMessage = technicalErrorMessage;
        this.draftState.setObject.success = false;
    };
    /*
       Action to reset password
      */
    userPasswordState.prototype.resetData = function (email) {
        this.draftState.setObject.loading = true;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = false;
    };
    /*
             Action will be handled if the "resetData" return success
            */
    userPasswordState.prototype.resetDataSuccess = function () {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = true;
    };
    /*
             Action will be handled if the "resetData" will fails
            */
    userPasswordState.prototype.resetDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = errorMessage;
        this.draftState.setObject.technicalErrorMessage = technicalErrorMessage;
        this.draftState.setObject.success = false;
    };
    /*
  
    /*
      Action to get the userPasswords list
      */
    userPasswordState.prototype.listData = function () {
        this.draftState.getObject.loading = true;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = false;
    };
    /*
          Action will be handled if the "listData" return success
          */
    userPasswordState.prototype.listDataSuccess = function (userPasswordList) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = true;
        this.draftState.userPasswordList = userPasswordList;
    };
    /*
          Action will be handled if the "listData" will fails
          */
    userPasswordState.prototype.listDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = errorMessage;
        this.draftState.getObject.technicalErrorMessage = technicalErrorMessage;
        this.draftState.getObject.success = false;
    };
    /*
      Action to get the userPasswords list by user
      */
    userPasswordState.prototype.listDataByUser = function (user) {
        this.draftState.getObject.loading = true;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = false;
    };
    /*
            Action will be handled if the "listDataByUser" return success
            */
    userPasswordState.prototype.listDataByUserSuccess = function (userPasswordList) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = true;
        this.draftState.userPasswordList = userPasswordList;
    };
    /*
            Action will be handled if the "listDataByUser" will fails
            */
    userPasswordState.prototype.listDataByUserFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = errorMessage;
        this.draftState.getObject.technicalErrorMessage = technicalErrorMessage;
        this.draftState.getObject.success = false;
    };
    /*
      Action to initialise the state
      */
    userPasswordState.prototype.reset = function () {
        this.draftState = exports.initialState;
    };
    return userPasswordState;
}(immer_reducer_1.ImmerReducer));
exports.userPasswordState = userPasswordState;
exports.userPasswordActions = (0, immer_reducer_1.createActionCreators)(userPasswordState);
exports.userPasswordReducerFunction = (0, immer_reducer_1.createReducerFunction)(userPasswordState, exports.initialState);
