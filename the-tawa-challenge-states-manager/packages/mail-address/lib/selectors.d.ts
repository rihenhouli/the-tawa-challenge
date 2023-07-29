import { States } from './index';
import MailAddress from './models/MailAddress';
import { State } from './state';
export declare function getMailAddressState(states: Partial<States>): State | undefined;
export declare function getMailAddressData(states: Partial<States>): MailAddress | null | undefined;
export declare function listMailAddressData(states: Partial<States>): Array<MailAddress> | null | undefined;
