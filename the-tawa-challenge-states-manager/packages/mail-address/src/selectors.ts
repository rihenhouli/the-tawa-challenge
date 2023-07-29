import { States } from './index'
import MailAddress from './models/MailAddress'
import { State } from './state'

/*
Different methods that can be used to get the different elements 
from the user profile
*/
export function getMailAddressState(states: Partial<States>): State | undefined {
    return states?.mailAddress
}
export function getMailAddressData(
    states: Partial<States>
): MailAddress | null | undefined {
    return states?.mailAddress?.mailAddress
}
export function listMailAddressData(
    states: Partial<States>
): Array<MailAddress> | null | undefined {
    return states?.mailAddress?.mailAddressList
}