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
/*When we call uploadData action, uploadData will be called*/
function addUserImageEffect(action) {
    var err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                console.log("on est dans l'effect du add userImage");
                return [4 /*yield*/, (0, effects_1.call)(service_1.uploadData, action.payload)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.userImageActions.uploadDataSuccess())];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_1 = _a.sent();
                // @ts-ignore
                return [4 /*yield*/, (0, effects_1.put)(state_1.userImageActions.uploadDataFailure("app_name"))];
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
function updateUserImageEffect(action) {
    var err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                console.log("on est dans l'effect du update userImage");
                return [4 /*yield*/, (0, effects_1.call)(service_1.updateData, action.payload)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.userImageActions.updateDataSuccess(action.payload))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_2 = _a.sent();
                // @ts-ignore
                return [4 /*yield*/, (0, effects_1.put)(state_1.userImageActions.updateDataFailure("app_name"))];
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
function getUserImageEffect(action) {
    var userImage, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                console.log("on est dans l'effect du get userImage");
                return [4 /*yield*/, (0, effects_1.call)(service_1.fetchData, action.payload)];
            case 1:
                userImage = _a.sent();
                if (!userImage)
                    throw Error;
                return [4 /*yield*/, (0, effects_1.put)(state_1.userImageActions.getDataSuccess(userImage))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_3 = _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.userImageActions.getDataFailure("app_name", (0, utils_1.buildTechnicalErrorMessage)(err_3)))];
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
function listUserImageEffect(action) {
    var userImageList, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                console.log("on est dans l'effect du get userImage list");
                return [4 /*yield*/, (0, effects_1.call)(service_1.fetchList)];
            case 1:
                userImageList = _a.sent();
                if (!userImageList)
                    throw Error;
                return [4 /*yield*/, (0, effects_1.put)(state_1.userImageActions.listDataSuccess(userImageList))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_4 = _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.userImageActions.listDataFailure("app_name", (0, utils_1.buildTechnicalErrorMessage)(err_4)))];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
/*
When we call listDataByUser action, fetchData will be called
param0 : action
*/
function listUserImageByUserEffect(action) {
    var list, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                console.log("on est dans l'effect du list images by user");
                return [4 /*yield*/, (0, effects_1.call)(service_1.fetchListByUser, action.payload)];
            case 1:
                list = _a.sent();
                if (!list)
                    throw Error;
                return [4 /*yield*/, (0, effects_1.put)(state_1.userImageActions.listDataByUserSuccess(list))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_5 = _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.userImageActions.listDataByUserFailure("app_name", (0, utils_1.buildTechnicalErrorMessage)(err_5)))];
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
function deleteUserImageEffect(action) {
    var err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                console.log("on est dans l'effect du delete UserImage");
                return [4 /*yield*/, (0, effects_1.call)(service_1.deleteData, action.payload)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.userImageActions.deleteDataSuccess())];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_6 = _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.userImageActions.deleteDataFailure("app_name", (0, utils_1.buildTechnicalErrorMessage)(err_6)))];
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
function restoreUserImageEffect(action) {
    var err_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                console.log("on est dans l'effect du restore UserImage");
                return [4 /*yield*/, (0, effects_1.call)(service_1.restoreData, action.payload)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.userImageActions.restoreDataSuccess())];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_7 = _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.userImageActions.restoreDataFailure("app_name", (0, utils_1.buildTechnicalErrorMessage)(err_7)))];
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
function userImageEffects() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, effects_1.takeLatest)(state_1.userImageActions.uploadData.type, addUserImageEffect)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(state_1.userImageActions.updateData.type, updateUserImageEffect)];
            case 2:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(state_1.userImageActions.getData.type, getUserImageEffect)];
            case 3:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(state_1.userImageActions.listData.type, listUserImageEffect)];
            case 4:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(state_1.userImageActions.listDataByUser.type, listUserImageByUserEffect)];
            case 5:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(state_1.userImageActions.deleteData.type, deleteUserImageEffect)];
            case 6:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(state_1.userImageActions.restoreData.type, restoreUserImageEffect)];
            case 7:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.default = userImageEffects;
