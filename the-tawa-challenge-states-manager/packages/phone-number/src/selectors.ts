import { States } from './index'
import PhoneNumber from './models/PhoneNumber'
import { State } from './state'

/*
Different methods that can be used to get the different elements 
from the user profile
*/
export function getPhoneNumberState(states: Partial<States>): State | undefined {
    return states?.phoneNumber
}
export function getPhoneNumberData(
    states: Partial<States>
): PhoneNumber | null | undefined {
    return states?.phoneNumber?.phoneNumber
}
export function listPhoneNumberData(
    states: Partial<States>
): Array<PhoneNumber> | null | undefined {
    return states?.phoneNumber?.phoneNumberList
}