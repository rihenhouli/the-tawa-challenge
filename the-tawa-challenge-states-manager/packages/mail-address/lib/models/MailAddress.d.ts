export type MailAddressDataType = {
    _id: string;
    mailAddressValue: string;
    createdBy: string;
    user: string;
    isDeleted: boolean;
    isMain: boolean;
    __v: number;
};
declare class MailAddress {
    _id: string;
    mailAddressValue: string;
    __v: number;
    createdBy: string;
    user: string;
    isDeleted: boolean;
    isMain: boolean;
    constructor(props: MailAddressDataType);
}
export default MailAddress;
