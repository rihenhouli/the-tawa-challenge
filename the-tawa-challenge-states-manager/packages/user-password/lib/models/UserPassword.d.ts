export type UserPasswordDataType = {
    _id: string;
    userPasswordValue: string;
    user: string;
    createdBy: string;
    isDeleted: boolean;
    __v: number;
};
declare class UserPassword {
    _id: string;
    userPasswordValue: string;
    user: string;
    createdBy: string;
    isDeleted: boolean;
    __v: number;
    constructor(props: UserPasswordDataType);
}
export default UserPassword;
