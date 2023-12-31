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
declare class UserLoggedIn {
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
    constructor(props: LogInResponse);
}
export default UserLoggedIn;
