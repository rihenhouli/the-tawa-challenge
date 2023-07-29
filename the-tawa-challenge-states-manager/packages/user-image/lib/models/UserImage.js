"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserImage = /** @class */ (function () {
    function UserImage(props) {
        this._id = props._id;
        this.user = props.user;
        this.userImageName = props.userImageName;
        this.userImagePath = props.userImagePath;
        this.userImageAlt = props.userImageAlt;
        this.isMain = props.isMain;
        this.ref = props.ref;
        this.creationDate = props.creationDate;
        this.createdBy = props.createdBy;
        this.isDeleted = props.isDeleted;
        this.__v = props.__v;
    }
    return UserImage;
}());
exports.default = UserImage;
