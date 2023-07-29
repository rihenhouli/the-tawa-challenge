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
exports.articleImageReducerFunction = exports.articleImageActions = exports.articleImageState = exports.initialState = void 0;
var immer_reducer_1 = require("immer-reducer");
exports.initialState = {
    //articleImage
    getObject: {
        loading: false,
        success: false,
        errorMessage: null,
        technicalErrorMessage: null,
    },
    setObject: {
        loading: false,
        success: false,
        articleImageData: null,
        errorMessage: null,
        technicalErrorMessage: null,
    },
    articleImage: {
        _id: "",
        articleSection: "",
        articleImageName: "",
        articleImagePath: "",
        articleImageAlt: "",
        isMain: false,
        ref: "",
        creationDate: new Date(),
        createdBy: "",
        isDeleted: false,
        __v: 0,
    },
    articleImageList: [],
};
/*
The different action that can be launched from the front side
*/
var articleImageState = /** @class */ (function (_super) {
    __extends(articleImageState, _super);
    function articleImageState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*
       Action to upload a new articleImage informations
      */
    articleImageState.prototype.uploadData = function (articleImage) {
        this.draftState.setObject.loading = true;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = false;
    };
    /*
           Action will be handled if the "uploadData" return success
          */
    articleImageState.prototype.uploadDataSuccess = function () {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = true;
    };
    /*
           Action will be handled if the "uploadData" will fails
          */
    articleImageState.prototype.uploadDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = errorMessage;
        this.draftState.setObject.technicalErrorMessage = technicalErrorMessage;
        this.draftState.setObject.success = false;
    };
    /*
       Action to download a new articleImage informations
      */
    articleImageState.prototype.downloadData = function (filename) {
        this.draftState.setObject.loading = true;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = false;
    };
    /*
             Action will be handled if the "downloadData" return success
            */
    articleImageState.prototype.downloadDataSuccess = function () {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = true;
    };
    /*
             Action will be handled if the "downloadData" will fails
            */
    articleImageState.prototype.downloadDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = errorMessage;
        this.draftState.setObject.technicalErrorMessage = technicalErrorMessage;
        this.draftState.setObject.success = false;
    };
    /*
    /*
       Action to update articleImage informations
      */
    articleImageState.prototype.updateData = function (articleImage) {
        this.draftState.setObject.loading = true;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.articleImage = articleImage;
        this.draftState.setObject.success = false;
    };
    /*
    
       Action will be handled if the "updateData" return success
      */
    articleImageState.prototype.updateDataSuccess = function (articleImage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.articleImage = articleImage;
        this.draftState.setObject.success = true;
    };
    /*
    /*
       Action will be handled if the "updateData" will fails
      */
    articleImageState.prototype.updateDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = errorMessage;
        this.draftState.setObject.technicalErrorMessage = technicalErrorMessage;
        this.draftState.setObject.success = false;
    };
    /*
      Action to get one articleImage articleImage by articleImage Id
      */
    articleImageState.prototype.getData = function (id) {
        this.draftState.getObject.loading = true;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = false;
    };
    /*
       Action will be handled if the "getData" return success
       */
    articleImageState.prototype.getDataSuccess = function (articleImage) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.success = true;
        this.draftState.articleImage = articleImage;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
    };
    /*
       Action will be handled if the "getData" will fails
       */
    articleImageState.prototype.getDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = errorMessage;
        this.draftState.getObject.technicalErrorMessage = technicalErrorMessage;
        this.draftState.getObject.success = false;
    };
    /*
      Action to get the articleImages list
      */
    articleImageState.prototype.listData = function () {
        this.draftState.getObject.loading = true;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = false;
    };
    /*
          Action will be handled if the "listData" return success
          */
    articleImageState.prototype.listDataSuccess = function (articleImageList) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = true;
        this.draftState.articleImageList = articleImageList;
    };
    /*
          Action will be handled if the "listData" will fails
          */
    articleImageState.prototype.listDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = errorMessage;
        this.draftState.getObject.technicalErrorMessage = technicalErrorMessage;
        this.draftState.getObject.success = false;
    };
    /*
      Action to get the articleImages list by article
      */
    articleImageState.prototype.listDataByArticle = function (article) {
        this.draftState.getObject.loading = true;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = false;
    };
    /*
            Action will be handled if the "listDataByArticle" return success
            */
    articleImageState.prototype.listDataByArticleSuccess = function (articleImageList) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = true;
        this.draftState.articleImageList = articleImageList;
    };
    /*
            Action will be handled if the "listDataByArticle" will fails
            */
    articleImageState.prototype.listDataByArticleFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = errorMessage;
        this.draftState.getObject.technicalErrorMessage = technicalErrorMessage;
        this.draftState.getObject.success = false;
    };
    /*
      Action to get the articleImages list by article serction
      */
    articleImageState.prototype.listDataBySection = function (section) {
        this.draftState.getObject.loading = true;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = false;
    };
    /*
      Action will be handled if the "listDataBySection" return success
    */
    articleImageState.prototype.listDataBySectionSuccess = function (articleImageList) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = true;
        this.draftState.articleImageList = articleImageList;
    };
    /*
    Action will be handled if the "listDataBySection" will fails
     */
    articleImageState.prototype.listDataBySectionFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = errorMessage;
        this.draftState.getObject.technicalErrorMessage = technicalErrorMessage;
        this.draftState.getObject.success = false;
    };
    /*
         Action to delete Person informations
        */
    articleImageState.prototype.deleteData = function (id) {
        this.draftState.setObject.loading = true;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = false;
    };
    /*
        Action will be handled if the "deleteData" return success
                  */
    articleImageState.prototype.deleteDataSuccess = function () {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = true;
    };
    /*
                   Action will be handled if the "deleteData" will fails
                  */
    articleImageState.prototype.deleteDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = errorMessage;
        this.draftState.setObject.technicalErrorMessage = technicalErrorMessage;
        this.draftState.setObject.success = false;
    };
    /*
             Action to restore Person informations
            */
    articleImageState.prototype.restoreData = function (id) {
        this.draftState.setObject.loading = true;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.articleImage = null;
    };
    /*
                   Action will be handled if the "restoreData" return success
                  */
    articleImageState.prototype.restoreDataSuccess = function () {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = true;
    };
    /*
                   Action will be handled if the "restoreData" will fails
                  */
    articleImageState.prototype.restoreDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = errorMessage;
        this.draftState.setObject.technicalErrorMessage = technicalErrorMessage;
        this.draftState.setObject.success = false;
    };
    /*
      Action to initialise the state
      */
    articleImageState.prototype.reset = function () {
        this.draftState = exports.initialState;
    };
    return articleImageState;
}(immer_reducer_1.ImmerReducer));
exports.articleImageState = articleImageState;
exports.articleImageActions = (0, immer_reducer_1.createActionCreators)(articleImageState);
exports.articleImageReducerFunction = (0, immer_reducer_1.createReducerFunction)(articleImageState, exports.initialState);
