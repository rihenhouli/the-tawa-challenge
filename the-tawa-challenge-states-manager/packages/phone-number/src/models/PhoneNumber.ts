export type PhoneNumberDataType = {
    _id: string;
    phoneNumberValue: number;
    countryCode: number;
    createdBy: string;
    user: string;
    isDeleted: boolean;
    isMain: boolean;
    __v :number;
  };
  
  class PhoneNumber {
    public _id: string;
    public phoneNumberValue: number;
    public countryCode: number;
    public __v :number;
    public createdBy: string;
    public user: string;
    public isDeleted: boolean;
    public isMain: boolean;
  
    public constructor(props: PhoneNumberDataType) {
      this._id = props._id;
      this.phoneNumberValue = props.phoneNumberValue;
      this.countryCode = props.countryCode;
      this.__v = props.__v;
      this.createdBy = props.createdBy;
      this.user = props.user;
      this.isDeleted = props.isDeleted;
      this.isMain = props.isMain;

    }
  }
  
  export default PhoneNumber;
  