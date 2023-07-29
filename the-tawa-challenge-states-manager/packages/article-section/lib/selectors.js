"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listArticleSectionData = exports.getArticleSectionData = exports.getArticleSectionState = void 0;
/*
Different methods that can be used to get the different elements
from the articleSection
*/
function getArticleSectionState(states) {
    return states === null || states === void 0 ? void 0 : states.articleSection;
}
exports.getArticleSectionState = getArticleSectionState;
function getArticleSectionData(states) {
    var _a;
    return (_a = states === null || states === void 0 ? void 0 : states.articleSection) === null || _a === void 0 ? void 0 : _a.articleSection;
}
exports.getArticleSectionData = getArticleSectionData;
function listArticleSectionData(states) {
    var _a;
    return (_a = states === null || states === void 0 ? void 0 : states.articleSection) === null || _a === void 0 ? void 0 : _a.articleSectionList;
}
exports.listArticleSectionData = listArticleSectionData;
