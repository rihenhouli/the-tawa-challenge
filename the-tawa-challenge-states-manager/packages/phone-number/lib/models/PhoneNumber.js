"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhoneNumber = /** @class */ (function () {
    function PhoneNumber(props) {
        this._id = props._id;
        this.phoneNumberValue = props.phoneNumberValue;
        this.countryCode = props.countryCode;
        this.__v = props.__v;
        this.createdBy = props.createdBy;
        this.user = props.user;
        this.isDeleted = props.isDeleted;
        this.isMain = props.isMain;
    }
    return PhoneNumber;
}());
exports.default = PhoneNumber;
