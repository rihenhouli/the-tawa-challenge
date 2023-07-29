"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogOutState = exports.getLogInState = exports.getLoggedInUser = exports.getAuthState = void 0;
/*
Different methods that can be used to get the different elements
from the last authentication state
*/
function getAuthState(states) {
    return states.auth;
}
exports.getAuthState = getAuthState;
function getLoggedInUser(states) {
    return states.auth.userLoggedIn;
}
exports.getLoggedInUser = getLoggedInUser;
function getLogInState(states) {
    return states.auth.login;
}
exports.getLogInState = getLogInState;
function getLogOutState(states) {
    return states.auth.logout;
}
exports.getLogOutState = getLogOutState;
