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
exports.userImageReducerFunction = exports.userImageActions = exports.userImageState = exports.initialState = void 0;
var immer_reducer_1 = require("immer-reducer");
exports.initialState = {
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
        user: "",
        userImageName: "",
        userImagePath: "",
        userImageAlt: "",
        isMain: false,
        ref: "",
        creationDate: new Date(),
        createdBy: "",
        isDeleted: false,
        __v: 0,
    },
    userImageList: [],
};
/*
The different action that can be launched from the front side
*/
var userImageState = /** @class */ (function (_super) {
    __extends(userImageState, _super);
    function userImageState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*
       Action to upload a new userImage informations
      */
    userImageState.prototype.uploadData = function (userImage) {
        this.draftState.setObject.loading = true;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = false;
    };
    /*
           Action will be handled if the "uploadData" return success
          */
    userImageState.prototype.uploadDataSuccess = function () {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = true;
    };
    /*
           Action will be handled if the "uploadData" will fails
          */
    userImageState.prototype.uploadDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = errorMessage;
        this.draftState.setObject.technicalErrorMessage =
            technicalErrorMessage;
        this.draftState.setObject.success = false;
    };
    /*
     Action to download a new userImage informations
    */
    userImageState.prototype.downloadData = function (filename) {
        this.draftState.setObject.loading = true;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = false;
    };
    /*
           Action will be handled if the "downloadData" return success
          */
    userImageState.prototype.downloadDataSuccess = function () {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = true;
    };
    /*
           Action will be handled if the "downloadData" will fails
          */
    userImageState.prototype.downloadDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = errorMessage;
        this.draftState.setObject.technicalErrorMessage =
            technicalErrorMessage;
        this.draftState.setObject.success = false;
    };
    /*
    /*
       Action to update userImage informations
      */
    userImageState.prototype.updateData = function (userImage) {
        this.draftState.setObject.loading = true;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.userImage = userImage;
        this.draftState.setObject.success = false;
    };
    /*
    
       Action will be handled if the "updateData" return success
      */
    userImageState.prototype.updateDataSuccess = function (userImage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.userImage = userImage;
        this.draftState.setObject.success = true;
    };
    /*
    /*
       Action will be handled if the "updateData" will fails
      */
    userImageState.prototype.updateDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = errorMessage;
        this.draftState.setObject.technicalErrorMessage =
            technicalErrorMessage;
        this.draftState.setObject.success = false;
    };
    /*
      Action to get one userImage userImage by userImage Id
      */
    userImageState.prototype.getData = function (id) {
        this.draftState.getObject.loading = true;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = false;
    };
    /*
       Action will be handled if the "getData" return success
       */
    userImageState.prototype.getDataSuccess = function (userImage) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.success = true;
        this.draftState.userImage = userImage;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
    };
    /*
       Action will be handled if the "getData" will fails
       */
    userImageState.prototype.getDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = errorMessage;
        this.draftState.getObject.technicalErrorMessage =
            technicalErrorMessage;
        this.draftState.getObject.success = false;
    };
    /*
      Action to get the userImages list
      */
    userImageState.prototype.listData = function () {
        this.draftState.getObject.loading = true;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = false;
    };
    /*
          Action will be handled if the "listData" return success
          */
    userImageState.prototype.listDataSuccess = function (userImageList) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = true;
        this.draftState.userImageList = userImageList;
    };
    /*
          Action will be handled if the "listData" will fails
          */
    userImageState.prototype.listDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = errorMessage;
        this.draftState.getObject.technicalErrorMessage =
            technicalErrorMessage;
        this.draftState.getObject.success = false;
    };
    /*
    Action to get the userImages list by user
    */
    userImageState.prototype.listDataByUser = function (user) {
        this.draftState.getObject.loading = true;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = false;
    };
    /*
          Action will be handled if the "listDataByUser" return success
          */
    userImageState.prototype.listDataByUserSuccess = function (userImageList) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = true;
        this.draftState.userImageList = userImageList;
    };
    /*
          Action will be handled if the "listDataByUser" will fails
          */
    userImageState.prototype.listDataByUserFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = errorMessage;
        this.draftState.getObject.technicalErrorMessage =
            technicalErrorMessage;
        this.draftState.getObject.success = false;
    };
    /*
         Action to delete Person informations
        */
    userImageState.prototype.deleteData = function (id) {
        this.draftState.setObject.loading = true;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = false;
    };
    /*
        Action will be handled if the "deleteData" return success
                  */
    userImageState.prototype.deleteDataSuccess = function () {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = true;
    };
    /*
                   Action will be handled if the "deleteData" will fails
                  */
    userImageState.prototype.deleteDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = errorMessage;
        this.draftState.setObject.technicalErrorMessage = technicalErrorMessage;
        this.draftState.setObject.success = false;
    };
    /*
             Action to restore Person informations
            */
    userImageState.prototype.restoreData = function (id) {
        this.draftState.setObject.loading = true;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.userImage = null;
    };
    /*
                   Action will be handled if the "restoreData" return success
                  */
    userImageState.prototype.restoreDataSuccess = function () {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = true;
    };
    /*
                   Action will be handled if the "restoreData" will fails
                  */
    userImageState.prototype.restoreDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = errorMessage;
        this.draftState.setObject.technicalErrorMessage = technicalErrorMessage;
        this.draftState.setObject.success = false;
    };
    /*
      Action to initialise the state
      */
    userImageState.prototype.reset = function () {
        this.draftState = exports.initialState;
    };
    return userImageState;
}(immer_reducer_1.ImmerReducer));
exports.userImageState = userImageState;
exports.userImageActions = (0, immer_reducer_1.createActionCreators)(userImageState);
exports.userImageReducerFunction = (0, immer_reducer_1.createReducerFunction)(userImageState, exports.initialState);
