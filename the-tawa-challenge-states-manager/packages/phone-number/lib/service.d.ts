import PhoneNumber from "./models/PhoneNumber";
declare function addData(phoneNumber: PhoneNumber): Promise<void>;
declare function updateData(phoneNumber: PhoneNumber): Promise<void>;
declare function fetchData(_id: string): Promise<PhoneNumber | undefined>;
declare function fetchList(): Promise<Array<PhoneNumber>>;
declare function fetchListByUser(userId: string): Promise<PhoneNumber | undefined>;
declare function deleteData(_id: string): Promise<void>;
declare function restoreData(id: string): Promise<void>;
export { updateData, fetchData, fetchList, addData, fetchListByUser, deleteData, restoreData, };
