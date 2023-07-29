"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listUserData = exports.getUserData = exports.getUserState = void 0;
/*
Different methods that can be used to get the different elements
from the user
*/
function getUserState(states) {
    return states === null || states === void 0 ? void 0 : states.user;
}
exports.getUserState = getUserState;
function getUserData(states) {
    var _a;
    return (_a = states === null || states === void 0 ? void 0 : states.user) === null || _a === void 0 ? void 0 : _a.user;
}
exports.getUserData = getUserData;
function listUserData(states) {
    var _a;
    return (_a = states === null || states === void 0 ? void 0 : states.user) === null || _a === void 0 ? void 0 : _a.userList;
}
exports.listUserData = listUserData;
