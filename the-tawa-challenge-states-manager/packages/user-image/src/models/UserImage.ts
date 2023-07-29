export type UserImageDataType = {
  _id: string;
  user: string;
  userImageName: string;
  userImagePath: string;
  userImageAlt?: string | null;
  isMain?: boolean;
  ref?: string | null;
  creationDate: Date;
  createdBy: string;
  isDeleted: boolean; 
  __v: number;
};

class UserImage {
  public _id: string;
  public user: string;
  public userImageName: string;
  public userImagePath: string;
  public userImageAlt?: string | null;
  public isMain?: boolean;
  public ref?: string | null;
  public creationDate: Date;
  public createdBy: string;
  public isDeleted: boolean; 
  public __v: number;

  public constructor(props: UserImageDataType) {
    this._id = props._id;
    this.user = props.user;
    this.userImageName = props.userImageName;
    this.userImagePath = props.userImagePath;
    this.userImageAlt = props.userImageAlt;
    this.isMain = props.isMain;
    this.ref = props.ref;
    this.creationDate = props.creationDate;
    this.createdBy = props.createdBy;
    this.isDeleted = props.isDeleted;
    this.__v = props.__v;
  }
}

export default UserImage;
