import axios from "axios";
import UserPassword, { UserPasswordDataType } from "./models/UserPassword";
import { TTCS_URL } from "@rihenhouli/ttcsm_common/lib/utils";

const USER_PASSWORD_URL = TTCS_URL + "user-password";
/*
API call for adding a new 
*/
async function addData(password: UserPassword): Promise<void> {
  console.log("add user:", password);
  const newUserPassword = {
    userPasswordValue: password.userPasswordValue,
    user: password.user,
    createdBy: password.createdBy,
  };
  console.log("add user newUserPassword: :", newUserPassword);
  return await axios.post(USER_PASSWORD_URL + `/add`, newUserPassword);
}


/*
API call for adding a new 
*/
async function resetData(email : string): Promise<void> {
  console.log("reset password :", email);
  const resetObject = {
    mailAddressValue: email,
  };
  return await axios.post(USER_PASSWORD_URL + `/reset`, resetObject);
}

/*
API call for getting the list
*/
async function fetchList(): Promise<Array<UserPassword>> {
  const list = (await axios.get(USER_PASSWORD_URL + `/list`)).data;
  console.log("passwords list:", list);
  return list;
}

/*
API call for getting the list by user
*/
async function fetchListByUser(user:string): Promise<Array<UserPassword>> {
  const list = (await axios.get(USER_PASSWORD_URL + `/user/${user}`)).data;
  console.log("user passwords list:", list);
  return list;
}


// headers: { "x-access-token": "token-value" },
export {
  addData,
  fetchList,
  fetchListByUser,
  resetData
};
