import { States } from './index';
import UserImage from './models/UserImage';
import { State } from './state';
export declare function getUserImageState(states: Partial<States>): State | undefined;
export declare function getUserImageData(states: Partial<States>): UserImage | null | undefined;
export declare function listUserImageData(states: Partial<States>): Array<UserImage> | null | undefined;
