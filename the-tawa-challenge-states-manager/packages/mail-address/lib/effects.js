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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@rihenhouli/ttcsm_common/lib/utils");
var effects_1 = require("redux-saga/effects");
var MailAddress_1 = __importDefault(require("./models/MailAddress"));
var service_1 = require("./service");
/*
These methods are for mapping the front actions and the API calls (from the service)
*/
var state_1 = require("./state");
/*
When we call addData action, addData will be called
*/
function addMailAddressEffect(action) {
    var err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                console.log("on est dans l'effect du add MailAddress");
                return [4 /*yield*/, (0, effects_1.call)(service_1.addData, action.payload)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.mailAddressActions.addDataSuccess())];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_1 = _a.sent();
                // @ts-ignore
                return [4 /*yield*/, (0, effects_1.put)(state_1.mailAddressActions.addDataFailure("app_name"))];
            case 4:
                // @ts-ignore
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
/*
When we call declineData action, declineData will be called
*/
function declineMailAddressEffect(action) {
    var err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                console.log("on est dans l'effect du decline MailAddress");
                return [4 /*yield*/, (0, effects_1.call)(service_1.declineData, action.payload)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.mailAddressActions.declineDataSuccess())];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_2 = _a.sent();
                // @ts-ignore
                return [4 /*yield*/, (0, effects_1.put)(state_1.mailAddressActions.declineDataFailure("app_name"))];
            case 4:
                // @ts-ignore
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
/*
When we call updateData action, updateData will be called
*/
function updateMailAddressEffect(action) {
    var err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                console.log("on est dans l'effect du set mail address");
                return [4 /*yield*/, (0, effects_1.call)(service_1.updateData, action.payload)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.mailAddressActions.updateDataSuccess(action.payload))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_3 = _a.sent();
                // @ts-ignore
                return [4 /*yield*/, (0, effects_1.put)(state_1.mailAddressActions.updateDataFailure("app_name"))];
            case 4:
                // @ts-ignore
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
function listMailAddressEffect(action) {
    var mailAddressList, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                console.log("on est dans l'effect du get MailAddress list");
                return [4 /*yield*/, (0, effects_1.call)(service_1.fetchList)];
            case 1:
                mailAddressList = _a.sent();
                if (!mailAddressList)
                    throw Error;
                return [4 /*yield*/, (0, effects_1.put)(state_1.mailAddressActions.listDataSuccess(mailAddressList))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_4 = _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.mailAddressActions.listDataFailure("app_name", (0, utils_1.buildTechnicalErrorMessage)(err_4)))];
            case 4:
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
function getMailAddressEffect(action) {
    var mailAddress, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                console.log("on est dans l'effect du get MailAddress");
                return [4 /*yield*/, (0, effects_1.call)(service_1.fetchData, action.payload)];
            case 1:
                mailAddress = _a.sent();
                if (!MailAddress_1.default)
                    throw Error;
                return [4 /*yield*/, (0, effects_1.put)(state_1.mailAddressActions.getDataSuccess(mailAddress))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_5 = _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.mailAddressActions.getDataFailure("app_name", (0, utils_1.buildTechnicalErrorMessage)(err_5)))];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
/*
When we call getDataByValue action, fetchData will be called
param0 : action
*/
function getMailAddressByValueEffect(action) {
    var mailAddress, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                console.log("on est dans l'effect du get MailAddress");
                return [4 /*yield*/, (0, effects_1.call)(service_1.fetchDataByValue, action.payload)];
            case 1:
                mailAddress = _a.sent();
                if (!MailAddress_1.default)
                    throw Error;
                return [4 /*yield*/, (0, effects_1.put)(state_1.mailAddressActions.getDataByValueSuccess(mailAddress))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_6 = _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.mailAddressActions.getDataByValueFailure("app_name", (0, utils_1.buildTechnicalErrorMessage)(err_6)))];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
/*
When we call listDataByUser action, fetchListByUser will be called
param0 : action
*/
function getMailAddressByUserEffect(action) {
    var list, err_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                console.log("on est dans l'effect du get MailAddress");
                return [4 /*yield*/, (0, effects_1.call)(service_1.fetchListByUser, action.payload)];
            case 1:
                list = _a.sent();
                if (!MailAddress_1.default)
                    throw Error;
                return [4 /*yield*/, (0, effects_1.put)(state_1.mailAddressActions.listDataByUserSuccess(list))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_7 = _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.mailAddressActions.listDataByUserFailure("app_name", (0, utils_1.buildTechnicalErrorMessage)(err_7)))];
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
function deleteMailAddressEffect(action) {
    var err_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                console.log("on est dans l'effect du delete MailAddress");
                return [4 /*yield*/, (0, effects_1.call)(service_1.deleteData, action.payload)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.mailAddressActions.deleteDataSuccess())];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_8 = _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.mailAddressActions.deleteDataFailure("app_name", (0, utils_1.buildTechnicalErrorMessage)(err_8)))];
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
function restoreMailAddressEffect(action) {
    var err_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                return [4 /*yield*/, (0, effects_1.call)(service_1.restoreData, action.payload)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.mailAddressActions.restoreDataSuccess())];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_9 = _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(state_1.mailAddressActions.restoreDataFailure("app_name", (0, utils_1.buildTechnicalErrorMessage)(err_9)))];
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
function MailAddressEffects() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, effects_1.takeLatest)(state_1.mailAddressActions.addData.type, addMailAddressEffect)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(state_1.mailAddressActions.updateData.type, updateMailAddressEffect)];
            case 2:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(state_1.mailAddressActions.listData.type, listMailAddressEffect)];
            case 3:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(state_1.mailAddressActions.getData.type, getMailAddressEffect)];
            case 4:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(state_1.mailAddressActions.getDataByValue.type, getMailAddressByValueEffect)];
            case 5:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(state_1.mailAddressActions.listDataByUser.type, getMailAddressByUserEffect)];
            case 6:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(state_1.mailAddressActions.deleteData.type, deleteMailAddressEffect)];
            case 7:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(state_1.mailAddressActions.restoreData.type, restoreMailAddressEffect)];
            case 8:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.default = MailAddressEffects;
