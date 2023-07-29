"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var state_1 = require("./state");
var effects_1 = require("redux-saga/effects");
var utils_1 = require("@rihenhouli/ttcsm_common/lib/utils");
var service_1 = require("./service");
/*
These methods are for mapping the front actions and the API calls (from the service)
*/
/*When we call addData action, addData will be called*/
function addArticleSectionEffect(action) {
    var err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                console.log("on est dans l'effect du add articleSection");
                return [4 /*yield*/, (0, effects_1.call)(service_1.addData, action.payload)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.articleSectionActions.addDataSuccess())];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_1 = _a.sent();
                // @ts-ignore
                return [4 /*yield*/, (0, effects_1.put)(state_1.articleSectionActions.addDataFailure("app_name"))];
            case 4:
                // @ts-ignore
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
/*When we call updateData action, updateData will be called
 */
function updateArticleSectionEffect(action) {
    var err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                console.log("on est dans l'effect du update articleSection");
                return [4 /*yield*/, (0, effects_1.call)(service_1.updateData, action.payload)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.articleSectionActions.updateDataSuccess(action.payload))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_2 = _a.sent();
                // @ts-ignore
                return [4 /*yield*/, (0, effects_1.put)(state_1.articleSectionActions.updateDataFailure("app_name"))];
            case 4:
                // @ts-ignore
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
/*
When we call getData action, fetchData will be called
param0 : action
*/
function getArticleSectionEffect(action) {
    var articleSection, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                console.log("on est dans l'effect du get articleSection");
                return [4 /*yield*/, (0, effects_1.call)(service_1.fetchData, action.payload)];
            case 1:
                articleSection = _a.sent();
                if (!articleSection)
                    throw Error;
                return [4 /*yield*/, (0, effects_1.put)(state_1.articleSectionActions.getDataSuccess(articleSection))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_3 = _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.articleSectionActions.getDataFailure("app_name", (0, utils_1.buildTechnicalErrorMessage)(err_3)))];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
/*
When we call listData action, fetchList will be called
param0 : action
*/
function listArticleSectionEffect(action) {
    var articleSectionList, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                console.log("on est dans l'effect du get articleSection list");
                return [4 /*yield*/, (0, effects_1.call)(service_1.fetchList)];
            case 1:
                articleSectionList = _a.sent();
                if (!articleSectionList)
                    throw Error;
                return [4 /*yield*/, (0, effects_1.put)(state_1.articleSectionActions.listDataSuccess(articleSectionList))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_4 = _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.articleSectionActions.listDataFailure("app_name", (0, utils_1.buildTechnicalErrorMessage)(err_4)))];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
/*
When we call listDataByArticle action, fetchData will be called
param0 : action
*/
function listArticleSectionByArticleEffect(action) {
    var list, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                console.log("on est dans l'effect du list images by article");
                return [4 /*yield*/, (0, effects_1.call)(service_1.fetchListByArticle, action.payload)];
            case 1:
                list = _a.sent();
                if (!list)
                    throw Error;
                return [4 /*yield*/, (0, effects_1.put)(state_1.articleSectionActions.listDataByArticleSuccess(list))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_5 = _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.articleSectionActions.listDataByArticleFailure("app_name", (0, utils_1.buildTechnicalErrorMessage)(err_5)))];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
/*
When we call deleteData action, deleteData will be called
param0 : action
*/
function deleteArticleSectionEffect(action) {
    var err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                console.log("on est dans l'effect du delete ArticleSection");
                return [4 /*yield*/, (0, effects_1.call)(service_1.deleteData, action.payload)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.articleSectionActions.deleteDataSuccess())];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_6 = _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.articleSectionActions.deleteDataFailure("app_name", (0, utils_1.buildTechnicalErrorMessage)(err_6)))];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
/*
When we call restoreData action, restoreData will be called
param0 : action
*/
function restoreArticleSectionEffect(action) {
    var err_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                console.log("on est dans l'effect du restore ArticleSection");
                return [4 /*yield*/, (0, effects_1.call)(service_1.restoreData, action.payload)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.articleSectionActions.restoreDataSuccess())];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_7 = _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.articleSectionActions.restoreDataFailure("app_name", (0, utils_1.buildTechnicalErrorMessage)(err_7)))];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
/*
the mapping generator
*/
function articleSectionEffects() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, effects_1.takeLatest)(state_1.articleSectionActions.addData.type, addArticleSectionEffect)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(state_1.articleSectionActions.updateData.type, updateArticleSectionEffect)];
            case 2:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(state_1.articleSectionActions.getData.type, getArticleSectionEffect)];
            case 3:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(state_1.articleSectionActions.listData.type, listArticleSectionEffect)];
            case 4:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(state_1.articleSectionActions.listDataByArticle.type, listArticleSectionByArticleEffect)];
            case 5:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(state_1.articleSectionActions.deleteData.type, deleteArticleSectionEffect)];
            case 6:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(state_1.articleSectionActions.restoreData.type, restoreArticleSectionEffect)];
            case 7:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.default = articleSectionEffects;
