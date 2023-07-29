export type UserPasswordDataType = {
  _id: string;
  userPasswordValue: string;
  user: string;
  createdBy: string;
  isDeleted: boolean; 
  __v: number;
};

class UserPassword {
  public _id: string;
  public userPasswordValue: string;
  public user: string;
  public createdBy: string;
  public isDeleted: boolean;
  public __v: number;

  public constructor(props: UserPasswordDataType) {
    this._id = props._id;
    this.userPasswordValue = props.userPasswordValue;
    this.user = props.user;
    this.createdBy = props.createdBy;
    this.isDeleted = props.isDeleted;
    this.__v = props.__v;
  }
}

export default UserPassword;
