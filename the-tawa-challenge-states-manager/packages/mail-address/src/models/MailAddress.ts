export type MailAddressDataType = {
    _id: string;
    mailAddressValue: string;
    createdBy: string;
    user: string;
    isDeleted: boolean;
    isMain: boolean;
    __v :number;
  };
  
  class MailAddress {
    public _id: string;
    public mailAddressValue: string;
    public __v :number;
    public createdBy: string;
    public user: string;
    public isDeleted: boolean;
    public isMain: boolean;

  
    public constructor(props: MailAddressDataType) {
      this._id = props._id;
      this.mailAddressValue = props.mailAddressValue;
      this.__v = props.__v;
      this.createdBy = props.createdBy;
      this.user = props.user;
      this.isDeleted = props.isDeleted;
      this.isMain = props.isMain;
    }
  }
  
  export default MailAddress;
  