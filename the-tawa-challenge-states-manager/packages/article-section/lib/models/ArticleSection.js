"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArticleSection = /** @class */ (function () {
    function ArticleSection(props) {
        this._id = props._id;
        this.article = props.article;
        this.articleSectionName = props.articleSectionName;
        this.articleSectionContent = props.articleSectionContent;
        this.addDate = props.addDate;
        this.createdBy = props.createdBy;
        this.isDeleted = props.isDeleted;
        this.__v = props.__v;
    }
    return ArticleSection;
}());
exports.default = ArticleSection;
