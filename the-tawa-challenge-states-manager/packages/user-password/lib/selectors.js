"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listUserPasswordData = exports.getUserPasswordData = exports.getUserPasswordState = void 0;
/*
Different methods that can be used to get the different elements
from the userPassword
*/
function getUserPasswordState(states) {
    return states === null || states === void 0 ? void 0 : states.userPassword;
}
exports.getUserPasswordState = getUserPasswordState;
function getUserPasswordData(states) {
    var _a;
    return (_a = states === null || states === void 0 ? void 0 : states.userPassword) === null || _a === void 0 ? void 0 : _a.userPassword;
}
exports.getUserPasswordData = getUserPasswordData;
function listUserPasswordData(states) {
    var _a;
    return (_a = states === null || states === void 0 ? void 0 : states.userPassword) === null || _a === void 0 ? void 0 : _a.userPasswordList;
}
exports.listUserPasswordData = listUserPasswordData;
