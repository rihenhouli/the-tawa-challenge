"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listArticleData = exports.getArticleData = exports.getArticleState = void 0;
/*
Different methods that can be used to get the different elements
from the article
*/
function getArticleState(states) {
    return states === null || states === void 0 ? void 0 : states.article;
}
exports.getArticleState = getArticleState;
function getArticleData(states) {
    var _a;
    return (_a = states === null || states === void 0 ? void 0 : states.article) === null || _a === void 0 ? void 0 : _a.article;
}
exports.getArticleData = getArticleData;
function listArticleData(states) {
    var _a;
    return (_a = states === null || states === void 0 ? void 0 : states.article) === null || _a === void 0 ? void 0 : _a.articleList;
}
exports.listArticleData = listArticleData;
