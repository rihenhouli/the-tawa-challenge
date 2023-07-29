import User from "./models/User";
declare function addData(user: User): Promise<void>;
declare function confirmData(user: string): Promise<void>;
declare function updateData(user: User): Promise<void>;
declare function fetchData(_id: string): Promise<User | undefined>;
declare function fetchList(): Promise<Array<User>>;
declare function deleteData(_id: string): Promise<void>;
declare function restoreData(_id: string): Promise<void>;
export { addData, updateData, fetchData, fetchList, deleteData, restoreData, confirmData };
