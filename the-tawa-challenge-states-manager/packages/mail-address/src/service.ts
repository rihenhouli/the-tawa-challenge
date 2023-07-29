import axios from "axios";
import { TTCS_URL } from "@rihenhouli/ttcsm_common/lib/utils";
import MailAddress from "./models/MailAddress";

const MAIL_ADDRESS_URL = TTCS_URL + "mail-address";
/*
TTCS call for setting a new informations to mailAddress
*/
async function addData(mailAddress: MailAddress): Promise<void> {
  console.log(
    "add mailAddress ASM:new mailAddress data :",
    mailAddress
  );
  const newMailAddress = {
    mailAddressValue: mailAddress.mailAddressValue,
    user: mailAddress.user,
    isMain: mailAddress.isMain,
    createdBy: mailAddress.createdBy,
  };
  console.log("add mail address new :", newMailAddress);
  return await axios.post(MAIL_ADDRESS_URL + `/add`, newMailAddress);
}

/*
TTCS call for setting a new informations to mailAddress
*/
async function updateData(mailAddress: MailAddress): Promise<void> {
  console.log("set user mailAddress ASM:new mail address data :", mailAddress);
  const newMailAddress = {
    mailAddressValue: mailAddress.mailAddressValue,
  };
  console.log("set mailAddress ASM newMailAddress: :", newMailAddress);
  return await axios.post(
    MAIL_ADDRESS_URL + `/update/${mailAddress._id}`,
    newMailAddress
  );
}
/*
TTCS call for getting the mailAddress data by _id
*/

async function fetchData(
  _id : string
): Promise<MailAddress | undefined> {
  const mailAddress = (await axios.get(MAIL_ADDRESS_URL + `/${_id}`))
    .data;
  console.log("fetch mailAddressData ASM:", mailAddress);
  return mailAddress;
}

async function fetchDataByValue(
  email : string
): Promise<MailAddress | undefined> {
  const mailAddress = (await axios.get(MAIL_ADDRESS_URL + `/email/${email}`))
    .data;
  console.log("fetch mailAddressData by value ASM:", mailAddress);
  return mailAddress;
}

/*
TTCS call for getting the mailAddress data
*/

async function declineData(
  email : string
): Promise<MailAddress | undefined> {
  return await axios.get(MAIL_ADDRESS_URL + `/decline/${email}`);
}

/*
TTCS call for getting the mailAddress data 
*/
async function fetchList(): Promise<Array<MailAddress>> {
  const list = (await axios.get(MAIL_ADDRESS_URL + `/list/`)).data;
  console.log(" mailAddress list ASM:", list);
  return list;
}


/*
TTCS call for getting the mailAddress data by userId
*/
async function fetchListByUser(
  userId: string
): Promise<MailAddress | undefined> {
  const mailAddress = (await axios.get(MAIL_ADDRESS_URL + `/user/${userId}`))
    .data;
  console.log("fetch mail address list by user ASM:", mailAddress);
  return mailAddress;
}

/*
TTCS call for deleting mailAddress
*/
async function deleteData(_id : string): Promise<void> {
  console.log("delete mailAddress  ASM:mailAddress id :", _id);
  const deletedMailAddress = {
    deletedBy: JSON.parse(sessionStorage.getItem("userName") || ""),
  };
  console.log(
    "delete deletedMailAddress ASM deletedMailAddress: :",
    deletedMailAddress
  );
  return await axios.post(
    MAIL_ADDRESS_URL + `/delete/${_id}`,
    deletedMailAddress
  );
}

/*
TTCS call for restoring mailAddress
*/
async function restoreData(id: string): Promise<void> {
  console.log("restore mailAddress  ASM:mailAddress id :", id);
  const restoredMailAddress = {
    updatedBy: JSON.parse(sessionStorage.getItem("userName") || ""),
  };
  console.log(
    "restore restoredMailAddress ASM restoredMailAddress: :",
    restoredMailAddress
  );
  return await axios.post(
    MAIL_ADDRESS_URL + `/restore/${id}`,
    restoredMailAddress
  );
}

// headers: { "x-access-token": "token-value" },
export {
  updateData,
  fetchData,
  fetchDataByValue,
  fetchList,
  addData,
  fetchListByUser,
  deleteData,
  restoreData,
  declineData
};
