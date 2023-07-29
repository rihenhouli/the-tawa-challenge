import { States } from './index'
import UserLoggedIn from './models/UserLoggedIn'
/*
Different methods that can be used to get the different elements 
from the last authentication state
*/
export function getAuthState(states: States) {
    return states.auth
}

export function getLoggedInUser(states: States): UserLoggedIn | null {
    return states.auth.userLoggedIn
}

export function getLogInState(states: States) {
    return states.auth.login
}

export function getLogOutState(states: States) {
    return states.auth.logout
}