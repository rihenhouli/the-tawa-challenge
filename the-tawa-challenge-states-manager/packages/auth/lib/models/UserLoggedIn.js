"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserLoggedIn = /** @class */ (function () {
    function UserLoggedIn(props) {
        this._id = props._id;
        this.firstName = props.firstName;
        this.lastName = props.lastName;
        this.userName = props.userName;
        this.birthDate = props.birthDate;
        this.userRole = props.userRole;
        this.userState = props.userState;
        this.createdBy = props.createdBy;
        this.isDeleted = props.isDeleted;
        this.__v = props.__v;
    }
    return UserLoggedIn;
}());
exports.default = UserLoggedIn;
