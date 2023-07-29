"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArticleImage = /** @class */ (function () {
    function ArticleImage(props) {
        this._id = props._id;
        this.articleSection = props.articleSection;
        this.articleImageName = props.articleImageName;
        this.articleImagePath = props.articleImagePath;
        this.articleImageAlt = props.articleImageAlt;
        this.isMain = props.isMain;
        this.ref = props.ref;
        this.creationDate = props.creationDate;
        this.createdBy = props.createdBy;
        this.isDeleted = props.isDeleted;
        this.__v = props.__v;
    }
    return ArticleImage;
}());
exports.default = ArticleImage;
