"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserPassword = /** @class */ (function () {
    function UserPassword(props) {
        this._id = props._id;
        this.userPasswordValue = props.userPasswordValue;
        this.user = props.user;
        this.createdBy = props.createdBy;
        this.isDeleted = props.isDeleted;
        this.__v = props.__v;
    }
    return UserPassword;
}());
exports.default = UserPassword;
