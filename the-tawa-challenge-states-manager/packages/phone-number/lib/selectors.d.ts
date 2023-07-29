import { States } from './index';
import PhoneNumber from './models/PhoneNumber';
import { State } from './state';
export declare function getPhoneNumberState(states: Partial<States>): State | undefined;
export declare function getPhoneNumberData(states: Partial<States>): PhoneNumber | null | undefined;
export declare function listPhoneNumberData(states: Partial<States>): Array<PhoneNumber> | null | undefined;
