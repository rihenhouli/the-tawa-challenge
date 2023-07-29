import { States } from './index';
import UserPassword from './models/UserPassword';
import { State } from './state';
export declare function getUserPasswordState(states: Partial<States>): State | undefined;
export declare function getUserPasswordData(states: Partial<States>): UserPassword | null | undefined;
export declare function listUserPasswordData(states: Partial<States>): Array<UserPassword> | null | undefined;
