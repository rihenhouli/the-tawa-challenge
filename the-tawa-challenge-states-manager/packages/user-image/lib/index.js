"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSagaMiddleware = exports.sagaMiddleware = exports.newReducer = exports.reducers = exports.StateNames = exports.sagas = exports.initialStates = exports.initialSagas = void 0;
var redux_1 = require("redux");
var redux_saga_1 = __importDefault(require("redux-saga"));
var effects_1 = require("redux-saga/effects");
var react_1 = require("redux-persist/integration/react");
var redux_persist_1 = require("redux-persist");
var immer_reducer_1 = require("immer-reducer");
var state_1 = require("./state");
var effects_2 = __importDefault(require("./effects"));
exports.initialSagas = {
    userImage: effects_2.default
};
exports.initialStates = {
    userImage: state_1.initialState
};
exports.sagas = Object.keys(exports.initialSagas).map(function (key) { return exports.initialSagas[key]; });
exports.StateNames = {
    userImageStateName: 'userImage'
};
exports.reducers = {
    userImage: state_1.userImageReducerFunction
};
var newReducer = function (stateImmerClass, initialState) {
    return (0, immer_reducer_1.createReducerFunction)(stateImmerClass, initialState);
};
exports.newReducer = newReducer;
exports.sagaMiddleware = (0, redux_saga_1.default)();
function configStore(extraMiddleWares, // Adding other middlewares
persistConfig, // Configuration for persistState
extraStates, // Adding other states in the store
replaceAllStates // It will keep only extraStates
) {
    if (extraMiddleWares === void 0) { extraMiddleWares = []; }
    if (extraStates === void 0) { extraStates = {}; }
    if (replaceAllStates === void 0) { replaceAllStates = false; }
    var _reducers = (0, redux_1.combineReducers)(__assign(__assign({}, exports.reducers), extraStates));
    if (replaceAllStates) {
        _reducers = (0, redux_1.combineReducers)(__assign({}, extraStates));
    }
    var _middleWares = __spreadArray(__spreadArray([], extraMiddleWares, true), [exports.sagaMiddleware], false);
    // @ts-ignore
    var persistedReducer = (0, redux_persist_1.persistReducer)(persistConfig, _reducers);
    var store = (0, redux_1.createStore)(persistedReducer, redux_1.applyMiddleware.apply(void 0, _middleWares));
    var persistor = (0, redux_persist_1.persistStore)(store);
    return { store: store, persistor: persistor, PersistGate: react_1.PersistGate };
}
function initSagaMiddleware(extraSagas, // local sagas from frontEnd Client
waitForRehydrate) {
    if (extraSagas === void 0) { extraSagas = []; }
    if (waitForRehydrate === void 0) { waitForRehydrate = false; }
    var _sagas = __spreadArray(__spreadArray([], exports.sagas, true), extraSagas, true);
    // It will initialize all sagas
    function rootSaga() {
        var instSagas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!waitForRehydrate) return [3 /*break*/, 2];
                    return [4 /*yield*/, (0, effects_1.take)(redux_persist_1.REHYDRATE)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [4 /*yield*/, _sagas.map(function (saga) {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, (0, effects_1.fork)(saga)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    })];
                case 3:
                    instSagas = _a.sent();
                    return [4 /*yield*/, (0, effects_1.all)(instSagas)];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    // Start the listener
    exports.sagaMiddleware.run(rootSaga);
}
exports.initSagaMiddleware = initSagaMiddleware;
exports.default = configStore;
