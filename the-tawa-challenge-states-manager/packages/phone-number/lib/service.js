"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
exports.restoreData = exports.deleteData = exports.fetchListByUser = exports.addData = exports.fetchList = exports.fetchData = exports.updateData = void 0;
var axios_1 = __importDefault(require("axios"));
var utils_1 = require("@rihenhouli/ttcsm_common/lib/utils");
var PHONE_NUMBER_URL = utils_1.TTCS_URL + "phone-number";
/*
TTCS call for setting a new informations to phoneNumber
*/
function addData(phoneNumber) {
    return __awaiter(this, void 0, void 0, function () {
        var newPhoneNumber;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("add phoneNumber ASM:new phoneNumber data :", phoneNumber);
                    newPhoneNumber = {
                        phoneNumberValue: phoneNumber.phoneNumberValue,
                        countryCode: phoneNumber.countryCode,
                        isMain: phoneNumber.isMain,
                        user: phoneNumber.user,
                        createdBy: phoneNumber.createdBy,
                    };
                    console.log("add phone number new :", newPhoneNumber);
                    return [4 /*yield*/, axios_1.default.post(PHONE_NUMBER_URL + "/add", newPhoneNumber)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.addData = addData;
/*
TTCS call for setting a new informations to phoneNumber
*/
function updateData(phoneNumber) {
    return __awaiter(this, void 0, void 0, function () {
        var newPhoneNumber;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("set user phoneNumber ASM:new phone number data :", phoneNumber);
                    newPhoneNumber = {
                        phoneNumberValue: phoneNumber.phoneNumberValue,
                        countryCode: phoneNumber.countryCode,
                    };
                    console.log("set phoneNumber ASM newPhoneNumber: :", newPhoneNumber);
                    return [4 /*yield*/, axios_1.default.post(PHONE_NUMBER_URL + "/update/".concat(phoneNumber._id), newPhoneNumber)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.updateData = updateData;
/*
TTCS call for getting the phoneNumber data by _id
*/
function fetchData(_id) {
    return __awaiter(this, void 0, void 0, function () {
        var phoneNumber;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(PHONE_NUMBER_URL + "/".concat(_id))];
                case 1:
                    phoneNumber = (_a.sent())
                        .data;
                    console.log("fetch phoneNumberData ASM:", phoneNumber);
                    return [2 /*return*/, phoneNumber];
            }
        });
    });
}
exports.fetchData = fetchData;
/*
TTCS call for getting the phoneNumber data
*/
function fetchList() {
    return __awaiter(this, void 0, void 0, function () {
        var list;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(PHONE_NUMBER_URL + "/list/")];
                case 1:
                    list = (_a.sent()).data;
                    console.log(" phoneNumber list ASM:", list);
                    return [2 /*return*/, list];
            }
        });
    });
}
exports.fetchList = fetchList;
/*
TTCS call for getting the phoneNumber data by userId
*/
function fetchListByUser(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var phoneNumber;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(PHONE_NUMBER_URL + "/user/".concat(userId))];
                case 1:
                    phoneNumber = (_a.sent())
                        .data;
                    console.log("fetch phone number list by user ASM:", phoneNumber);
                    return [2 /*return*/, phoneNumber];
            }
        });
    });
}
exports.fetchListByUser = fetchListByUser;
/*
TTCS call for deleting phoneNumber
*/
function deleteData(_id) {
    return __awaiter(this, void 0, void 0, function () {
        var deletedPhoneNumber;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("delete phoneNumber  ASM:phoneNumber id :", _id);
                    deletedPhoneNumber = {
                        deletedBy: JSON.parse(sessionStorage.getItem("userName") || ""),
                    };
                    console.log("delete deletedPhoneNumber ASM deletedPhoneNumber: :", deletedPhoneNumber);
                    return [4 /*yield*/, axios_1.default.post(PHONE_NUMBER_URL + "/delete/".concat(_id), deletedPhoneNumber)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.deleteData = deleteData;
/*
TTCS call for restoring phoneNumber
*/
function restoreData(id) {
    return __awaiter(this, void 0, void 0, function () {
        var restoredPhoneNumber;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("restore phoneNumber  ASM:phoneNumber id :", id);
                    restoredPhoneNumber = {
                        updatedBy: JSON.parse(sessionStorage.getItem("userName") || ""),
                    };
                    console.log("restore restoredPhoneNumber ASM restoredPhoneNumber: :", restoredPhoneNumber);
                    return [4 /*yield*/, axios_1.default.post(PHONE_NUMBER_URL + "/restore/".concat(id), restoredPhoneNumber)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.restoreData = restoreData;
