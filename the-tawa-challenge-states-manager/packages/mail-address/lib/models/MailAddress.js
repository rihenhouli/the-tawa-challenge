"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MailAddress = /** @class */ (function () {
    function MailAddress(props) {
        this._id = props._id;
        this.mailAddressValue = props.mailAddressValue;
        this.__v = props.__v;
        this.createdBy = props.createdBy;
        this.user = props.user;
        this.isDeleted = props.isDeleted;
        this.isMain = props.isMain;
    }
    return MailAddress;
}());
exports.default = MailAddress;
