"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listPhoneNumberData = exports.getPhoneNumberData = exports.getPhoneNumberState = void 0;
/*
Different methods that can be used to get the different elements
from the user profile
*/
function getPhoneNumberState(states) {
    return states === null || states === void 0 ? void 0 : states.phoneNumber;
}
exports.getPhoneNumberState = getPhoneNumberState;
function getPhoneNumberData(states) {
    var _a;
    return (_a = states === null || states === void 0 ? void 0 : states.phoneNumber) === null || _a === void 0 ? void 0 : _a.phoneNumber;
}
exports.getPhoneNumberData = getPhoneNumberData;
function listPhoneNumberData(states) {
    var _a;
    return (_a = states === null || states === void 0 ? void 0 : states.phoneNumber) === null || _a === void 0 ? void 0 : _a.phoneNumberList;
}
exports.listPhoneNumberData = listPhoneNumberData;
