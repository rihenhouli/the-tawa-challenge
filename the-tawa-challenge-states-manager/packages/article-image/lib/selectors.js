"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listArticleImageData = exports.getArticleImageData = exports.getArticleImageState = void 0;
/*
Different methods that can be used to get the different elements
from the articleImage
*/
function getArticleImageState(states) {
    return states === null || states === void 0 ? void 0 : states.articleImage;
}
exports.getArticleImageState = getArticleImageState;
function getArticleImageData(states) {
    var _a;
    return (_a = states === null || states === void 0 ? void 0 : states.articleImage) === null || _a === void 0 ? void 0 : _a.articleImage;
}
exports.getArticleImageData = getArticleImageData;
function listArticleImageData(states) {
    var _a;
    return (_a = states === null || states === void 0 ? void 0 : states.articleImage) === null || _a === void 0 ? void 0 : _a.articleImageList;
}
exports.listArticleImageData = listArticleImageData;
