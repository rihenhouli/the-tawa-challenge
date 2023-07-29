import axios from "axios";
import User, { UserDataType } from "./models/User";
import { TTCS_URL } from "@rihenhouli/ttcsm_common/lib/utils";

const USER_URL = TTCS_URL + "user";
/*
API call for adding a new 
*/
async function addData(user: User): Promise<void> {
  console.log("add user:", user);
  const newUser = {
    firstName: user.firstName,
    lastName: user.lastName,
    userName: user.userName,
    birthDate: user.birthDate,
    createdBy: user.createdBy
  };
  console.log("add user newUser: :", newUser);
  return await axios.post(USER_URL + `/add`, newUser);
}

/*
API call for confirming a new 
*/
async function confirmData(user: string): Promise<void> {
  console.log("confirm user:", user);
  const newUser = {
    user: user,
  };
  return await axios.post(USER_URL + `/confirm`, newUser);
}
/*
API call for setting a new informations 
*/
async function updateData(user: User): Promise<void> {
  console.log("set user:new user data :", user);
  const newUser = {
    firstName: user.firstName,
    lastName: user.lastName,
    userName: user.userName,
    birthDate: user.birthDate,
    userState: user.userState,
    userRole: user.userRole,
  };
  console.log("set user newUser: :", newUser);
  return await axios.post(USER_URL + `/update/${user._id}`, newUser);
}
/*
API call for getting the data by id
*/
async function fetchData(_id:string): Promise<User | undefined> {
  const user = (await axios.get(USER_URL + `/${_id}`)).data;
  console.log("fetchData :", user);
  return user;
}
/*
API call for getting the list
*/
async function fetchList(): Promise<Array<User>> {
  const list = (await axios.get(USER_URL + `/list`)).data;
  console.log("user list:", list);
  return list;
}

/*
API call for deleting user
*/
async function deleteData(_id:string): Promise<void> {
  console.log("deleted user id :", _id);
  const deleted = {
    deletedBy: JSON.parse(sessionStorage.getItem("userName") || ""),
  };
  console.log( "deleted",deleted);
  return await axios.post(USER_URL + `/delete/${_id}`, deleted);
}

/*
API call for restoring user
*/
async function restoreData(_id:string): Promise<void> {
  console.log("restore user: id :", _id);
  const restored = {
    restoredBy: JSON.parse(sessionStorage.getItem("userName") || ""),
  };
  console.log("restore restored user: :", restored);
  return await axios.post(
    USER_URL + `/restore/${_id}`,
    restored
  );
}

// headers: { "x-access-token": "token-value" },
export {
  addData,
  updateData,
  fetchData,
  fetchList,
  deleteData,
  restoreData,
  confirmData
};
