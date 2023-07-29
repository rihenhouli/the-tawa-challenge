export type PhoneNumberDataType = {
    _id: string;
    phoneNumberValue: number;
    countryCode: number;
    createdBy: string;
    user: string;
    isDeleted: boolean;
    isMain: boolean;
    __v: number;
};
declare class PhoneNumber {
    _id: string;
    phoneNumberValue: number;
    countryCode: number;
    __v: number;
    createdBy: string;
    user: string;
    isDeleted: boolean;
    isMain: boolean;
    constructor(props: PhoneNumberDataType);
}
export default PhoneNumber;
