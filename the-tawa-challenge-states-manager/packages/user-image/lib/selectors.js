"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listUserImageData = exports.getUserImageData = exports.getUserImageState = void 0;
/*
Different methods that can be used to get the different elements
from the userImage
*/
function getUserImageState(states) {
    return states === null || states === void 0 ? void 0 : states.userImage;
}
exports.getUserImageState = getUserImageState;
function getUserImageData(states) {
    var _a;
    return (_a = states === null || states === void 0 ? void 0 : states.userImage) === null || _a === void 0 ? void 0 : _a.userImage;
}
exports.getUserImageData = getUserImageData;
function listUserImageData(states) {
    var _a;
    return (_a = states === null || states === void 0 ? void 0 : states.userImage) === null || _a === void 0 ? void 0 : _a.userImageList;
}
exports.listUserImageData = listUserImageData;
