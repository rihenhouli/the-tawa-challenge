"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authReducerFunction = exports.authActions = exports.authState = exports.initialState = void 0;
var immer_reducer_1 = require("immer-reducer");
var UserLoggedIn_1 = __importDefault(require("./models/UserLoggedIn"));
exports.initialState = {
    login: {
        loading: false,
        success: false,
        errorMessage: null,
    },
    userLoggedIn: null,
    logout: {
        loading: false,
        success: false,
        errorMessage: null,
    },
};
var authState = /** @class */ (function (_super) {
    __extends(authState, _super);
    function authState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    authState.prototype.login = function (payload) {
        this.draftState.userLoggedIn = null;
        this.draftState.login.loading = true;
        this.draftState.login.errorMessage = null;
        this.draftState.login.success = false;
    };
    authState.prototype.loginFailure = function (payload) {
        this.draftState.userLoggedIn = null;
        this.draftState.login.loading = false;
        this.draftState.login.errorMessage = payload;
    };
    authState.prototype.loginSuccess = function (user) {
        this.draftState.login.loading = false;
        this.draftState.login.success = true;
        this.draftState.userLoggedIn = user;
        this.draftState.login.errorMessage = null;
    };
    authState.prototype.logout = function () {
        this.draftState.logout.loading = true;
        this.draftState.logout.success = false;
        this.draftState.logout.errorMessage = null;
    };
    authState.prototype.logoutFailure = function (errorMessage) {
        this.draftState.logout.loading = false;
        this.draftState.logout.success = false;
        this.draftState.logout.errorMessage = errorMessage;
    };
    authState.prototype.logoutSuccess = function () {
        this.draftState.logout.loading = false;
        this.draftState.logout.success = true;
        this.draftState.logout.errorMessage = null;
        this.draftState.userLoggedIn = null;
    };
    authState.prototype.setLoggedInUser = function (user) {
        if (this.draftState.userLoggedIn) {
            this.draftState.userLoggedIn._id = user._id;
            this.draftState.userLoggedIn.firstName = user.firstName;
            this.draftState.userLoggedIn.lastName = user.lastName;
            this.draftState.userLoggedIn.userName = user.userName;
            this.draftState.userLoggedIn.birthDate = user.birthDate;
            this.draftState.userLoggedIn.userRole = user.userRole;
            this.draftState.userLoggedIn.userState = user.userState;
            this.draftState.userLoggedIn.createdBy = user.createdBy;
            this.draftState.userLoggedIn.isDeleted = user.isDeleted;
            this.draftState.userLoggedIn.__v = user.__v;
        }
        else {
            this.draftState.userLoggedIn = new UserLoggedIn_1.default(user);
        }
    };
    return authState;
}(immer_reducer_1.ImmerReducer));
exports.authState = authState;
exports.authActions = (0, immer_reducer_1.createActionCreators)(authState);
exports.authReducerFunction = (0, immer_reducer_1.createReducerFunction)(authState, exports.initialState);
