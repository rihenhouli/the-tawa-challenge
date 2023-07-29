import { States } from './index';
import User from './models/User';
import { State } from './state';
export declare function getUserState(states: Partial<States>): State | undefined;
export declare function getUserData(states: Partial<States>): User | null | undefined;
export declare function listUserData(states: Partial<States>): Array<User> | null | undefined;
