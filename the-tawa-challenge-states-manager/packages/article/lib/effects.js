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
function addArticleEffect(action) {
    var err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                console.log("on est dans l'effect du add article");
                return [4 /*yield*/, (0, effects_1.call)(service_1.addData, action.payload)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.articleActions.addDataSuccess())];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_1 = _a.sent();
                // @ts-ignore
                return [4 /*yield*/, (0, effects_1.put)(state_1.articleActions.addDataFailure("app_name"))];
            case 4:
                // @ts-ignore
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
/*When we call publishData action, publishData will be called*/
function publishArticleEffect(action) {
    var err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                console.log("on est dans l'effect du publish article");
                return [4 /*yield*/, (0, effects_1.call)(service_1.publishData, action.payload)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.articleActions.publishDataSuccess())];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_2 = _a.sent();
                // @ts-ignore
                return [4 /*yield*/, (0, effects_1.put)(state_1.articleActions.publishDataFailure("app_name"))];
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
function updateArticleEffect(action) {
    var err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                console.log("on est dans l'effect du update article");
                return [4 /*yield*/, (0, effects_1.call)(service_1.updateData, action.payload)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.articleActions.updateDataSuccess(action.payload))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_3 = _a.sent();
                // @ts-ignore
                return [4 /*yield*/, (0, effects_1.put)(state_1.articleActions.updateDataFailure("app_name"))];
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
function getArticleEffect(action) {
    var article, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                console.log("on est dans l'effect du get article");
                return [4 /*yield*/, (0, effects_1.call)(service_1.fetchData, action.payload)];
            case 1:
                article = _a.sent();
                if (!article)
                    throw Error;
                return [4 /*yield*/, (0, effects_1.put)(state_1.articleActions.getDataSuccess(article))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_4 = _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.articleActions.getDataFailure("app_name", (0, utils_1.buildTechnicalErrorMessage)(err_4)))];
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
function listArticleEffect(action) {
    var articleList, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                console.log("on est dans l'effect du get article list");
                return [4 /*yield*/, (0, effects_1.call)(service_1.fetchList)];
            case 1:
                articleList = _a.sent();
                if (!articleList)
                    throw Error;
                return [4 /*yield*/, (0, effects_1.put)(state_1.articleActions.listDataSuccess(articleList))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_5 = _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.articleActions.listDataFailure("app_name", (0, utils_1.buildTechnicalErrorMessage)(err_5)))];
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
function deleteArticleEffect(action) {
    var err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                console.log("on est dans l'effect du delete Article");
                return [4 /*yield*/, (0, effects_1.call)(service_1.deleteData, action.payload)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.articleActions.deleteDataSuccess())];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_6 = _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.articleActions.deleteDataFailure("app_name", (0, utils_1.buildTechnicalErrorMessage)(err_6)))];
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
function restoreArticleEffect(action) {
    var err_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                console.log("on est dans l'effect du restore Article");
                return [4 /*yield*/, (0, effects_1.call)(service_1.restoreData, action.payload)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.articleActions.restoreDataSuccess())];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_7 = _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.articleActions.restoreDataFailure("app_name", (0, utils_1.buildTechnicalErrorMessage)(err_7)))];
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
function articleEffects() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, effects_1.takeLatest)(state_1.articleActions.addData.type, addArticleEffect)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(state_1.articleActions.publishData.type, publishArticleEffect)];
            case 2:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(state_1.articleActions.updateData.type, updateArticleEffect)];
            case 3:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(state_1.articleActions.getData.type, getArticleEffect)];
            case 4:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(state_1.articleActions.listData.type, listArticleEffect)];
            case 5:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(state_1.articleActions.deleteData.type, deleteArticleEffect)];
            case 6:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(state_1.articleActions.restoreData.type, restoreArticleEffect)];
            case 7:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.default = articleEffects;
