import UserPassword from "./models/UserPassword";
declare function addData(password: UserPassword): Promise<void>;
declare function resetData(email: string): Promise<void>;
declare function fetchList(): Promise<Array<UserPassword>>;
declare function fetchListByUser(user: string): Promise<Array<UserPassword>>;
export { addData, fetchList, fetchListByUser, resetData };
