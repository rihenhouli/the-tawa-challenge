import axios from "axios";
import { TTCS_URL } from "@rihenhouli/ttcsm_common/lib/utils";
import PhoneNumber from "./models/PhoneNumber";

const PHONE_NUMBER_URL = TTCS_URL + "phone-number";
/*
TTCS call for setting a new informations to phoneNumber
*/
async function addData(phoneNumber: PhoneNumber): Promise<void> {
  console.log(
    "add phoneNumber ASM:new phoneNumber data :",
    phoneNumber
  );
  const newPhoneNumber = {
    phoneNumberValue: phoneNumber.phoneNumberValue,
    countryCode: phoneNumber.countryCode,
    isMain: phoneNumber.isMain,
    user: phoneNumber.user,
    createdBy: phoneNumber.createdBy,
  };
  console.log("add phone number new :", newPhoneNumber);
  return await axios.post(PHONE_NUMBER_URL + `/add`, newPhoneNumber);
}

/*
TTCS call for setting a new informations to phoneNumber
*/
async function updateData(phoneNumber: PhoneNumber): Promise<void> {
  console.log("set user phoneNumber ASM:new phone number data :", phoneNumber);
  const newPhoneNumber = {
    phoneNumberValue: phoneNumber.phoneNumberValue,
    countryCode: phoneNumber.countryCode,
  };
  console.log("set phoneNumber ASM newPhoneNumber: :", newPhoneNumber);
  return await axios.post(
    PHONE_NUMBER_URL + `/update/${phoneNumber._id}`,
    newPhoneNumber
  );
}
/*
TTCS call for getting the phoneNumber data by _id
*/

async function fetchData(
  _id : string
): Promise<PhoneNumber | undefined> {
  const phoneNumber = (await axios.get(PHONE_NUMBER_URL + `/${_id}`))
    .data;
  console.log("fetch phoneNumberData ASM:", phoneNumber);
  return phoneNumber;
}

/*
TTCS call for getting the phoneNumber data 
*/
async function fetchList(): Promise<Array<PhoneNumber>> {
  const list = (await axios.get(PHONE_NUMBER_URL + `/list/`)).data;
  console.log(" phoneNumber list ASM:", list);
  return list;
}


/*
TTCS call for getting the phoneNumber data by userId
*/
async function fetchListByUser(
  userId: string
): Promise<PhoneNumber | undefined> {
  const phoneNumber = (await axios.get(PHONE_NUMBER_URL + `/user/${userId}`))
    .data;
  console.log("fetch phone number list by user ASM:", phoneNumber);
  return phoneNumber;
}

/*
TTCS call for deleting phoneNumber
*/
async function deleteData(_id : string): Promise<void> {
  console.log("delete phoneNumber  ASM:phoneNumber id :", _id);
  const deletedPhoneNumber = {
    deletedBy: JSON.parse(sessionStorage.getItem("userName") || ""),
  };
  console.log(
    "delete deletedPhoneNumber ASM deletedPhoneNumber: :",
    deletedPhoneNumber
  );
  return await axios.post(
    PHONE_NUMBER_URL + `/delete/${_id}`,
    deletedPhoneNumber
  );
}

/*
TTCS call for restoring phoneNumber
*/
async function restoreData(id: string): Promise<void> {
  console.log("restore phoneNumber  ASM:phoneNumber id :", id);
  const restoredPhoneNumber = {
    updatedBy: JSON.parse(sessionStorage.getItem("userName") || ""),
  };
  console.log(
    "restore restoredPhoneNumber ASM restoredPhoneNumber: :",
    restoredPhoneNumber
  );
  return await axios.post(
    PHONE_NUMBER_URL + `/restore/${id}`,
    restoredPhoneNumber
  );
}

// headers: { "x-access-token": "token-value" },
export {
  updateData,
  fetchData,
  fetchList,
  addData,
  fetchListByUser,
  deleteData,
  restoreData,
};
