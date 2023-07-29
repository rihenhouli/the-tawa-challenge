import { States } from './index'
import User from './models/User'
import { State } from './state'

/*
Different methods that can be used to get the different elements 
from the user 
*/
export function getUserState(states: Partial<States>): State | undefined {
    return states?.user
}
export function getUserData(
    states: Partial<States>
): User | null | undefined {
    return states?.user?.user
}
export function listUserData(
    states: Partial<States>
): Array<User> | null | undefined {
    return states?.user?.userList
}

