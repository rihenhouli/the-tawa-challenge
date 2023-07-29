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
exports.articleReducerFunction = exports.articleActions = exports.articleState = exports.initialState = void 0;
var immer_reducer_1 = require("immer-reducer");
exports.initialState = {
    //article 
    getObject: {
        loading: false,
        success: false,
        errorMessage: null,
        technicalErrorMessage: null,
    },
    setObject: {
        loading: false,
        success: false,
        articleData: null,
        errorMessage: null,
        technicalErrorMessage: null,
    },
    article: {
        _id: "",
        articleTitle: "",
        articleCategory: "",
        isArchived: false,
        isPublished: false,
        publishDate: new Date(),
        createdBy: "",
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        __v: 0,
    },
    articleList: [],
};
/*
The different action that can be launched from the front side
*/
var articleState = /** @class */ (function (_super) {
    __extends(articleState, _super);
    function articleState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*
       Action to add a new article informations
      */
    articleState.prototype.addData = function (article) {
        this.draftState.setObject.loading = true;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = false;
    };
    /*
           Action will be handled if the "addData" return success
          */
    articleState.prototype.addDataSuccess = function () {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = true;
    };
    /*
           Action will be handled if the "addData" will fails
          */
    articleState.prototype.addDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = errorMessage;
        this.draftState.setObject.technicalErrorMessage =
            technicalErrorMessage;
        this.draftState.setObject.success = false;
    };
    /*
      Action to publish a new article informations
     */
    articleState.prototype.publishData = function (id) {
        this.draftState.setObject.loading = true;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = false;
    };
    /*
           Action will be handled if the "publishData" return success
          */
    articleState.prototype.publishDataSuccess = function () {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = true;
    };
    /*
           Action will be handled if the "publishData" will fails
          */
    articleState.prototype.publishDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = errorMessage;
        this.draftState.setObject.technicalErrorMessage =
            technicalErrorMessage;
        this.draftState.setObject.success = false;
    };
    /*
    /*
       Action to update article informations
      */
    articleState.prototype.updateData = function (article) {
        this.draftState.setObject.loading = true;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.article = article;
        this.draftState.setObject.success = false;
    };
    /*
    
       Action will be handled if the "updateData" return success
      */
    articleState.prototype.updateDataSuccess = function (article) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.article = article;
        this.draftState.setObject.success = true;
    };
    /*
    /*
       Action will be handled if the "updateData" will fails
      */
    articleState.prototype.updateDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = errorMessage;
        this.draftState.setObject.technicalErrorMessage =
            technicalErrorMessage;
        this.draftState.setObject.success = false;
    };
    /*
      Action to get one article article by article Id
      */
    articleState.prototype.getData = function (id) {
        this.draftState.getObject.loading = true;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = false;
    };
    /*
       Action will be handled if the "getData" return success
       */
    articleState.prototype.getDataSuccess = function (article) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.success = true;
        this.draftState.article = article;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
    };
    /*
       Action will be handled if the "getData" will fails
       */
    articleState.prototype.getDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = errorMessage;
        this.draftState.getObject.technicalErrorMessage =
            technicalErrorMessage;
        this.draftState.getObject.success = false;
    };
    /*
      Action to get the articles list
      */
    articleState.prototype.listData = function () {
        this.draftState.getObject.loading = true;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = false;
    };
    /*
          Action will be handled if the "listData" return success
          */
    articleState.prototype.listDataSuccess = function (articleList) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = true;
        this.draftState.articleList = articleList;
    };
    /*
          Action will be handled if the "listData" will fails
          */
    articleState.prototype.listDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = errorMessage;
        this.draftState.getObject.technicalErrorMessage =
            technicalErrorMessage;
        this.draftState.getObject.success = false;
    };
    /*
         Action to delete Person informations
        */
    articleState.prototype.deleteData = function (id) {
        this.draftState.setObject.loading = true;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = false;
    };
    /*
        Action will be handled if the "deleteData" return success
                  */
    articleState.prototype.deleteDataSuccess = function () {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = true;
    };
    /*
                   Action will be handled if the "deleteData" will fails
                  */
    articleState.prototype.deleteDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = errorMessage;
        this.draftState.setObject.technicalErrorMessage = technicalErrorMessage;
        this.draftState.setObject.success = false;
    };
    /*
             Action to restore Person informations
            */
    articleState.prototype.restoreData = function (id) {
        this.draftState.setObject.loading = true;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.article = null;
    };
    /*
                   Action will be handled if the "restoreData" return success
                  */
    articleState.prototype.restoreDataSuccess = function () {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = true;
    };
    /*
                   Action will be handled if the "restoreData" will fails
                  */
    articleState.prototype.restoreDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = errorMessage;
        this.draftState.setObject.technicalErrorMessage = technicalErrorMessage;
        this.draftState.setObject.success = false;
    };
    /*
      Action to initialise the state
      */
    articleState.prototype.reset = function () {
        this.draftState = exports.initialState;
    };
    return articleState;
}(immer_reducer_1.ImmerReducer));
exports.articleState = articleState;
exports.articleActions = (0, immer_reducer_1.createActionCreators)(articleState);
exports.articleReducerFunction = (0, immer_reducer_1.createReducerFunction)(articleState, exports.initialState);
