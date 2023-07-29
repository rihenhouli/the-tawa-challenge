"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listMailAddressData = exports.getMailAddressData = exports.getMailAddressState = void 0;
/*
Different methods that can be used to get the different elements
from the user profile
*/
function getMailAddressState(states) {
    return states === null || states === void 0 ? void 0 : states.mailAddress;
}
exports.getMailAddressState = getMailAddressState;
function getMailAddressData(states) {
    var _a;
    return (_a = states === null || states === void 0 ? void 0 : states.mailAddress) === null || _a === void 0 ? void 0 : _a.mailAddress;
}
exports.getMailAddressData = getMailAddressData;
function listMailAddressData(states) {
    var _a;
    return (_a = states === null || states === void 0 ? void 0 : states.mailAddress) === null || _a === void 0 ? void 0 : _a.mailAddressList;
}
exports.listMailAddressData = listMailAddressData;
