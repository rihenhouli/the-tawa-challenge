"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Article = /** @class */ (function () {
    function Article(props) {
        this._id = props._id;
        this.articleTitle = props.articleTitle;
        this.articleCategory = props.articleCategory;
        this.isArchived = props.isArchived;
        this.isPublished = props.isPublished;
        this.publishDate = props.publishDate;
        this.createdBy = props.createdBy;
        this.isDeleted = props.isDeleted;
        this.createdAt = props.createdAt;
        this.updatedAt = props.updatedAt;
        this.__v = props.__v;
    }
    return Article;
}());
exports.default = Article;
