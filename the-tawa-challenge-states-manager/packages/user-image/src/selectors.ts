import { States } from './index'
import UserImage from './models/UserImage'
import { State } from './state'

/*
Different methods that can be used to get the different elements 
from the userImage 
*/
export function getUserImageState(states: Partial<States>): State | undefined {
    return states?.userImage
}
export function getUserImageData(
    states: Partial<States>
): UserImage | null | undefined {
    return states?.userImage?.userImage
}
export function listUserImageData(
    states: Partial<States>
): Array<UserImage> | null | undefined {
    return states?.userImage?.userImageList
}

