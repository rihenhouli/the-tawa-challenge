"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.restoreData = exports.deleteData = exports.fetchListBySection = exports.fetchListByArticle = exports.fetchList = exports.fetchData = exports.updateData = exports.downloadData = exports.uploadData = void 0;
var axios_1 = __importDefault(require("axios"));
var utils_1 = require("@rihenhouli/ttcsm_common/lib/utils");
var ARTICLE_IMG_URL = utils_1.TTCS_URL + "article-image";
/*
API call for uploading a new
*/
function uploadData(articleImage) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("upload article image:", articleImage);
                    return [4 /*yield*/, axios_1.default.post(ARTICLE_IMG_URL + "/upload", articleImage)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.uploadData = uploadData;
/*
API call for getting the data by id
*/
function downloadData(filename) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(ARTICLE_IMG_URL + "/download/".concat(filename))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.downloadData = downloadData;
/*
API call for setting a new informations
*/
function updateData(image) {
    return __awaiter(this, void 0, void 0, function () {
        var newArticleImage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("set image:new image data :", image);
                    newArticleImage = {
                        articleImageAlt: image.articleImageAlt,
                        isMain: image.isMain,
                    };
                    console.log("set image newArticleImage: :", newArticleImage);
                    return [4 /*yield*/, axios_1.default.post(ARTICLE_IMG_URL + "/update/".concat(image._id), newArticleImage)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.updateData = updateData;
/*
API call for getting the data by id
*/
function fetchData(_id) {
    return __awaiter(this, void 0, void 0, function () {
        var articleImage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(ARTICLE_IMG_URL + "/".concat(_id))];
                case 1:
                    articleImage = (_a.sent()).data;
                    console.log("fetchData :", articleImage);
                    return [2 /*return*/, articleImage];
            }
        });
    });
}
exports.fetchData = fetchData;
/*
API call for getting the list
*/
function fetchList() {
    return __awaiter(this, void 0, void 0, function () {
        var list;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(ARTICLE_IMG_URL + "/list")];
                case 1:
                    list = (_a.sent()).data;
                    console.log("article list:", list);
                    return [2 /*return*/, list];
            }
        });
    });
}
exports.fetchList = fetchList;
/*
API call for getting the list by article
*/
function fetchListByArticle(article) {
    return __awaiter(this, void 0, void 0, function () {
        var list;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(ARTICLE_IMG_URL + "/article/".concat(article))];
                case 1:
                    list = (_a.sent()).data;
                    console.log("fetchListByArticle :", list);
                    return [2 /*return*/, list];
            }
        });
    });
}
exports.fetchListByArticle = fetchListByArticle;
/*
API call for getting the list by section
*/
function fetchListBySection(section) {
    return __awaiter(this, void 0, void 0, function () {
        var list;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(ARTICLE_IMG_URL + "/section/".concat(section))];
                case 1:
                    list = (_a.sent()).data;
                    console.log("fetchListBySection :", list);
                    return [2 /*return*/, list];
            }
        });
    });
}
exports.fetchListBySection = fetchListBySection;
/*
API call for deleting image
*/
function deleteData(_id) {
    return __awaiter(this, void 0, void 0, function () {
        var deleted;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("deleted image id :", _id);
                    deleted = {};
                    console.log("deleted", deleted);
                    return [4 /*yield*/, axios_1.default.post(ARTICLE_IMG_URL + "/delete/".concat(_id), deleted)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.deleteData = deleteData;
/*
API call for restoring image
*/
function restoreData(_id) {
    return __awaiter(this, void 0, void 0, function () {
        var restored;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("restore article: id :", _id);
                    restored = {};
                    console.log("restore restored image: :", restored);
                    return [4 /*yield*/, axios_1.default.post(ARTICLE_IMG_URL + "/restore/".concat(_id), restored)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.restoreData = restoreData;
