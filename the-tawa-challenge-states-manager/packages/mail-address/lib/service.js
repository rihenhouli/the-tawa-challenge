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
exports.declineData = exports.restoreData = exports.deleteData = exports.fetchListByUser = exports.addData = exports.fetchList = exports.fetchDataByValue = exports.fetchData = exports.updateData = void 0;
var axios_1 = __importDefault(require("axios"));
var utils_1 = require("@rihenhouli/ttcsm_common/lib/utils");
var MAIL_ADDRESS_URL = utils_1.TTCS_URL + "mail-address";
/*
TTCS call for setting a new informations to mailAddress
*/
function addData(mailAddress) {
    return __awaiter(this, void 0, void 0, function () {
        var newMailAddress;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("add mailAddress ASM:new mailAddress data :", mailAddress);
                    newMailAddress = {
                        mailAddressValue: mailAddress.mailAddressValue,
                        user: mailAddress.user,
                        isMain: mailAddress.isMain,
                        createdBy: mailAddress.createdBy,
                    };
                    console.log("add mail address new :", newMailAddress);
                    return [4 /*yield*/, axios_1.default.post(MAIL_ADDRESS_URL + "/add", newMailAddress)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.addData = addData;
/*
TTCS call for setting a new informations to mailAddress
*/
function updateData(mailAddress) {
    return __awaiter(this, void 0, void 0, function () {
        var newMailAddress;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("set user mailAddress ASM:new mail address data :", mailAddress);
                    newMailAddress = {
                        mailAddressValue: mailAddress.mailAddressValue,
                    };
                    console.log("set mailAddress ASM newMailAddress: :", newMailAddress);
                    return [4 /*yield*/, axios_1.default.post(MAIL_ADDRESS_URL + "/update/".concat(mailAddress._id), newMailAddress)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.updateData = updateData;
/*
TTCS call for getting the mailAddress data by _id
*/
function fetchData(_id) {
    return __awaiter(this, void 0, void 0, function () {
        var mailAddress;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(MAIL_ADDRESS_URL + "/".concat(_id))];
                case 1:
                    mailAddress = (_a.sent())
                        .data;
                    console.log("fetch mailAddressData ASM:", mailAddress);
                    return [2 /*return*/, mailAddress];
            }
        });
    });
}
exports.fetchData = fetchData;
function fetchDataByValue(email) {
    return __awaiter(this, void 0, void 0, function () {
        var mailAddress;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(MAIL_ADDRESS_URL + "/email/".concat(email))];
                case 1:
                    mailAddress = (_a.sent())
                        .data;
                    console.log("fetch mailAddressData by value ASM:", mailAddress);
                    return [2 /*return*/, mailAddress];
            }
        });
    });
}
exports.fetchDataByValue = fetchDataByValue;
/*
TTCS call for getting the mailAddress data
*/
function declineData(email) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(MAIL_ADDRESS_URL + "/decline/".concat(email))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.declineData = declineData;
/*
TTCS call for getting the mailAddress data
*/
function fetchList() {
    return __awaiter(this, void 0, void 0, function () {
        var list;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(MAIL_ADDRESS_URL + "/list/")];
                case 1:
                    list = (_a.sent()).data;
                    console.log(" mailAddress list ASM:", list);
                    return [2 /*return*/, list];
            }
        });
    });
}
exports.fetchList = fetchList;
/*
TTCS call for getting the mailAddress data by userId
*/
function fetchListByUser(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var mailAddress;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(MAIL_ADDRESS_URL + "/user/".concat(userId))];
                case 1:
                    mailAddress = (_a.sent())
                        .data;
                    console.log("fetch mail address list by user ASM:", mailAddress);
                    return [2 /*return*/, mailAddress];
            }
        });
    });
}
exports.fetchListByUser = fetchListByUser;
/*
TTCS call for deleting mailAddress
*/
function deleteData(_id) {
    return __awaiter(this, void 0, void 0, function () {
        var deletedMailAddress;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("delete mailAddress  ASM:mailAddress id :", _id);
                    deletedMailAddress = {
                        deletedBy: JSON.parse(sessionStorage.getItem("userName") || ""),
                    };
                    console.log("delete deletedMailAddress ASM deletedMailAddress: :", deletedMailAddress);
                    return [4 /*yield*/, axios_1.default.post(MAIL_ADDRESS_URL + "/delete/".concat(_id), deletedMailAddress)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.deleteData = deleteData;
/*
TTCS call for restoring mailAddress
*/
function restoreData(id) {
    return __awaiter(this, void 0, void 0, function () {
        var restoredMailAddress;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("restore mailAddress  ASM:mailAddress id :", id);
                    restoredMailAddress = {
                        updatedBy: JSON.parse(sessionStorage.getItem("userName") || ""),
                    };
                    console.log("restore restoredMailAddress ASM restoredMailAddress: :", restoredMailAddress);
                    return [4 /*yield*/, axios_1.default.post(MAIL_ADDRESS_URL + "/restore/".concat(id), restoredMailAddress)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.restoreData = restoreData;
