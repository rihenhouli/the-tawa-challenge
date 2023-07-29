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
exports.userReducerFunction = exports.userActions = exports.userState = exports.initialState = void 0;
var immer_reducer_1 = require("immer-reducer");
exports.initialState = {
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
var userState = /** @class */ (function (_super) {
    __extends(userState, _super);
    function userState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*
       Action to add a new user informations
      */
    userState.prototype.addData = function (user) {
        this.draftState.setObject.loading = true;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = false;
    };
    /*
           Action will be handled if the "addData" return success
          */
    userState.prototype.addDataSuccess = function () {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = true;
    };
    /*
           Action will be handled if the "addData" will fails
          */
    userState.prototype.addDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = errorMessage;
        this.draftState.setObject.technicalErrorMessage =
            technicalErrorMessage;
        this.draftState.setObject.success = false;
    };
    /*
      Action to confirm a new user informations
     */
    userState.prototype.confirmData = function (id) {
        this.draftState.setObject.loading = true;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = false;
    };
    /*
           Action will be handled if the "confirmData" return success
          */
    userState.prototype.confirmDataSuccess = function () {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = true;
    };
    /*
           Action will be handled if the "confirmData" will fails
          */
    userState.prototype.confirmDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = errorMessage;
        this.draftState.setObject.technicalErrorMessage =
            technicalErrorMessage;
        this.draftState.setObject.success = false;
    };
    /*
    /*
       Action to update user informations
      */
    userState.prototype.updateData = function (user) {
        this.draftState.setObject.loading = true;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.user = user;
        this.draftState.setObject.success = false;
    };
    /*
    
       Action will be handled if the "updateData" return success
      */
    userState.prototype.updateDataSuccess = function (user) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.user = user;
        this.draftState.setObject.success = true;
    };
    /*
    /*
       Action will be handled if the "updateData" will fails
      */
    userState.prototype.updateDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = errorMessage;
        this.draftState.setObject.technicalErrorMessage =
            technicalErrorMessage;
        this.draftState.setObject.success = false;
    };
    /*
      Action to get one user user by user Id
      */
    userState.prototype.getData = function (id) {
        this.draftState.getObject.loading = true;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = false;
    };
    /*
       Action will be handled if the "getData" return success
       */
    userState.prototype.getDataSuccess = function (user) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.success = true;
        this.draftState.user = user;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
    };
    /*
       Action will be handled if the "getData" will fails
       */
    userState.prototype.getDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = errorMessage;
        this.draftState.getObject.technicalErrorMessage =
            technicalErrorMessage;
        this.draftState.getObject.success = false;
    };
    /*
      Action to get the users list
      */
    userState.prototype.listData = function () {
        this.draftState.getObject.loading = true;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = false;
    };
    /*
          Action will be handled if the "listData" return success
          */
    userState.prototype.listDataSuccess = function (userList) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = true;
        this.draftState.userList = userList;
    };
    /*
          Action will be handled if the "listData" will fails
          */
    userState.prototype.listDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = errorMessage;
        this.draftState.getObject.technicalErrorMessage =
            technicalErrorMessage;
        this.draftState.getObject.success = false;
    };
    /*
         Action to delete Person informations
        */
    userState.prototype.deleteData = function (id) {
        this.draftState.setObject.loading = true;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = false;
    };
    /*
        Action will be handled if the "deleteData" return success
                  */
    userState.prototype.deleteDataSuccess = function () {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = true;
    };
    /*
                   Action will be handled if the "deleteData" will fails
                  */
    userState.prototype.deleteDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = errorMessage;
        this.draftState.setObject.technicalErrorMessage = technicalErrorMessage;
        this.draftState.setObject.success = false;
    };
    /*
             Action to restore Person informations
            */
    userState.prototype.restoreData = function (id) {
        this.draftState.setObject.loading = true;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.user = null;
    };
    /*
                   Action will be handled if the "restoreData" return success
                  */
    userState.prototype.restoreDataSuccess = function () {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = true;
    };
    /*
                   Action will be handled if the "restoreData" will fails
                  */
    userState.prototype.restoreDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = errorMessage;
        this.draftState.setObject.technicalErrorMessage = technicalErrorMessage;
        this.draftState.setObject.success = false;
    };
    /*
      Action to initialise the state
      */
    userState.prototype.reset = function () {
        this.draftState = exports.initialState;
    };
    return userState;
}(immer_reducer_1.ImmerReducer));
exports.userState = userState;
exports.userActions = (0, immer_reducer_1.createActionCreators)(userState);
exports.userReducerFunction = (0, immer_reducer_1.createReducerFunction)(userState, exports.initialState);
