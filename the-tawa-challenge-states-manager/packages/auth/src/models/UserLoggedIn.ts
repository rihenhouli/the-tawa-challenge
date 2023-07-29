export interface LogInResponse {
  _id: string;
  firstName: string;
  lastName: string;
  userName: string;
  birthDate: Date;
  userRole: string;
  userState: string;
  createdBy: string;
  isDeleted: boolean; 
  __v: number;
}
class UserLoggedIn { 
  public _id: string;
  public firstName: string;
  public lastName: string;
  public userName: string;
  public birthDate: Date;
  public userRole: string;
  public userState: string;
  public createdBy: string;
  public isDeleted: boolean;
  public __v: number;

  public constructor(props: LogInResponse) {
    this._id = props._id;
    this.firstName = props.firstName;
    this.lastName = props.lastName;
    this.userName = props.userName;
    this.birthDate = props.birthDate;
    this.userRole = props.userRole;
    this.userState = props.userState;
    this.createdBy = props.createdBy;
    this.isDeleted = props.isDeleted;
    this.__v = props.__v;
  }
}

export default UserLoggedIn;
