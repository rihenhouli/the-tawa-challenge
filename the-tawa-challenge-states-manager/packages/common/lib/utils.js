"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildTechnicalErrorMessage = exports.LogError = exports.LogRequestResponse = exports.TTCS_URL = void 0;
var UrlsConfigs = /** @class */ (function () {
    function UrlsConfigs() {
        this.values = null;
    }
    UrlsConfigs.prototype.setURls = function (config) {
        this.values = config;
    };
    UrlsConfigs.prototype.getURLs = function () {
        return this.values;
    };
    return UrlsConfigs;
}());
exports.TTCS_URL = "http://localhost:3030/";
var LogRequestResponse = function (response, urlsConfig) {
    var _a;
    if ((_a = urlsConfig.values) === null || _a === void 0 ? void 0 : _a.DEBUG_MODE) {
        console.log('HTTP - response');
        console.log(response);
    }
};
exports.LogRequestResponse = LogRequestResponse;
var LogError = function (response, urlsConfig) {
    var _a;
    if ((_a = urlsConfig.values) === null || _a === void 0 ? void 0 : _a.DEBUG_MODE) {
        console.log('Error - catched');
        console.log(response);
    }
};
exports.LogError = LogError;
var buildTechnicalErrorMessage = function (e) {
    var _a, _b;
    if (e && !e.response) {
        return { statusCode: -1, message: e.toString() };
    }
    return {
        statusCode: (_b = (_a = e === null || e === void 0 ? void 0 : e.response) === null || _a === void 0 ? void 0 : _a.status) !== null && _b !== void 0 ? _b : -1,
        message: (e === null || e === void 0 ? void 0 : e.toJSON()) ? e === null || e === void 0 ? void 0 : e.toJSON() : 'error object is null or undefined'
    };
};
exports.buildTechnicalErrorMessage = buildTechnicalErrorMessage;
