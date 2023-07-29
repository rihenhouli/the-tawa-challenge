import { States } from './index'
import UserPassword from './models/UserPassword'
import { State } from './state'

/*
Different methods that can be used to get the different elements 
from the userPassword 
*/
export function getUserPasswordState(states: Partial<States>): State | undefined {
    return states?.userPassword
}
export function getUserPasswordData(
    states: Partial<States>
): UserPassword | null | undefined {
    return states?.userPassword?.userPassword
}
export function listUserPasswordData(
    states: Partial<States>
): Array<UserPassword> | null | undefined {
    return states?.userPassword?.userPasswordList
}

