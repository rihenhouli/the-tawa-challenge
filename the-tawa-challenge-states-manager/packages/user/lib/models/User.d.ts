export type UserDataType = {
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
};
declare class User {
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
    constructor(props: UserDataType);
}
export default User;
