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
exports.articleSectionReducerFunction = exports.articleSectionActions = exports.articleSectionState = exports.initialState = void 0;
var immer_reducer_1 = require("immer-reducer");
exports.initialState = {
    //articleSection
    getObject: {
        loading: false,
        success: false,
        errorMessage: null,
        technicalErrorMessage: null,
    },
    setObject: {
        loading: false,
        success: false,
        articleSectionData: null,
        errorMessage: null,
        technicalErrorMessage: null,
    },
    articleSection: {
        _id: "",
        article: "",
        articleSectionName: "",
        articleSectionContent: "",
        addDate: new Date(),
        createdBy: "",
        isDeleted: false,
        __v: 0,
    },
    articleSectionList: [],
};
/*
The different action that can be launched from the front side
*/
var articleSectionState = /** @class */ (function (_super) {
    __extends(articleSectionState, _super);
    function articleSectionState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*
     Action to add a new article informations
    */
    articleSectionState.prototype.addData = function (articleSection) {
        this.draftState.setObject.loading = true;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = false;
    };
    /*
     Action will be handled if the "addData" return success
   */
    articleSectionState.prototype.addDataSuccess = function () {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = true;
    };
    /*
     Action will be handled if the "addData" will fails
    */
    articleSectionState.prototype.addDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = errorMessage;
        this.draftState.setObject.technicalErrorMessage = technicalErrorMessage;
        this.draftState.setObject.success = false;
    };
    /*
    /*
     Action to update articleSection informations
    */
    articleSectionState.prototype.updateData = function (articleSection) {
        this.draftState.setObject.loading = true;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.articleSection = articleSection;
        this.draftState.setObject.success = false;
    };
    /*
      Action will be handled if the "updateData" return success
    */
    articleSectionState.prototype.updateDataSuccess = function (articleSection) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.articleSection = articleSection;
        this.draftState.setObject.success = true;
    };
    /*
    /*
      Action will be handled if the "updateData" will fails
    */
    articleSectionState.prototype.updateDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = errorMessage;
        this.draftState.setObject.technicalErrorMessage = technicalErrorMessage;
        this.draftState.setObject.success = false;
    };
    /*
      Action to get one articleSection articleSection by articleSection Id
    */
    articleSectionState.prototype.getData = function (id) {
        this.draftState.getObject.loading = true;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = false;
    };
    /*
    Action will be handled if the "getData" return success
     */
    articleSectionState.prototype.getDataSuccess = function (articleSection) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.success = true;
        this.draftState.articleSection = articleSection;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
    };
    /*
     Action will be handled if the "getData" will fails
    */
    articleSectionState.prototype.getDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = errorMessage;
        this.draftState.getObject.technicalErrorMessage = technicalErrorMessage;
        this.draftState.getObject.success = false;
    };
    /*
      Action to get the articleSections list
      */
    articleSectionState.prototype.listData = function () {
        this.draftState.getObject.loading = true;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = false;
    };
    /*
      Action will be handled if the "listData" return success
     */
    articleSectionState.prototype.listDataSuccess = function (articleSectionList) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = true;
        this.draftState.articleSectionList = articleSectionList;
    };
    /*
     Action will be handled if the "listData" will fails
    */
    articleSectionState.prototype.listDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = errorMessage;
        this.draftState.getObject.technicalErrorMessage = technicalErrorMessage;
        this.draftState.getObject.success = false;
    };
    /*
      Action to get the articleSections list by article
    */
    articleSectionState.prototype.listDataByArticle = function (article) {
        this.draftState.getObject.loading = true;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = false;
    };
    /*
      Action will be handled if the "listDataByArticle" return success
    */
    articleSectionState.prototype.listDataByArticleSuccess = function (articleSectionList) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = null;
        this.draftState.getObject.technicalErrorMessage = null;
        this.draftState.getObject.success = true;
        this.draftState.articleSectionList = articleSectionList;
    };
    /*
      Action will be handled if the "listDataByArticle" will fails
    */
    articleSectionState.prototype.listDataByArticleFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.getObject.loading = false;
        this.draftState.getObject.errorMessage = errorMessage;
        this.draftState.getObject.technicalErrorMessage = technicalErrorMessage;
        this.draftState.getObject.success = false;
    };
    /*
      Action to delete Person informations
     */
    articleSectionState.prototype.deleteData = function (id) {
        this.draftState.setObject.loading = true;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = false;
    };
    /*
     Action will be handled if the "deleteData" return success
    */
    articleSectionState.prototype.deleteDataSuccess = function () {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = true;
    };
    /*
     Action will be handled if the "deleteData" will fails
     */
    articleSectionState.prototype.deleteDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = errorMessage;
        this.draftState.setObject.technicalErrorMessage = technicalErrorMessage;
        this.draftState.setObject.success = false;
    };
    /*
     Action to restore Person informations
    */
    articleSectionState.prototype.restoreData = function (id) {
        this.draftState.setObject.loading = true;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.articleSection = null;
    };
    /*
     Action will be handled if the "restoreData" return success
    */
    articleSectionState.prototype.restoreDataSuccess = function () {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = null;
        this.draftState.setObject.technicalErrorMessage = null;
        this.draftState.setObject.success = true;
    };
    /*
     Action will be handled if the "restoreData" will fails
    */
    articleSectionState.prototype.restoreDataFailure = function (errorMessage, technicalErrorMessage) {
        this.draftState.setObject.loading = false;
        this.draftState.setObject.errorMessage = errorMessage;
        this.draftState.setObject.technicalErrorMessage = technicalErrorMessage;
        this.draftState.setObject.success = false;
    };
    /*
      Action to initialise the state
      */
    articleSectionState.prototype.reset = function () {
        this.draftState = exports.initialState;
    };
    return articleSectionState;
}(immer_reducer_1.ImmerReducer));
exports.articleSectionState = articleSectionState;
exports.articleSectionActions = (0, immer_reducer_1.createActionCreators)(articleSectionState);
exports.articleSectionReducerFunction = (0, immer_reducer_1.createReducerFunction)(articleSectionState, exports.initialState);
