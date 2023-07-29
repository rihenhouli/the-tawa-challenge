import axios from "axios";
import UserImage, { UserImageDataType } from "./models/UserImage";
import { TTCS_URL } from "@rihenhouli/ttcsm_common/lib/utils";

const USER_IMG_URL = TTCS_URL + "user-image";
/*
API call for uploading a new 
*/
async function uploadData(userImage: FormData): Promise<void> {
  console.log("upload user image:", userImage);
  return await axios.post(USER_IMG_URL + `/upload`, userImage);
}

/*
API call for getting the data by id
*/
async function downloadData(filename:string): Promise<UserImage | undefined> {
  return await axios.get(USER_IMG_URL + `/download/${filename}`);
}

/*
API call for setting a new informations 
*/
async function updateData(image: UserImage): Promise<void> {
  console.log("set image:new image data :", image);
  const newUserImage = {
    firstName: image.userImageAlt,
    lastName: image.isMain,
  };
  console.log("set image newUserImage: :", newUserImage);
  return await axios.post(USER_IMG_URL + `/update/${image._id}`, newUserImage);
}
/*
API call for getting the data by id
*/
async function fetchData(_id:string): Promise<UserImage | undefined> {
  const userImage = (await axios.get(USER_IMG_URL + `/${_id}`)).data;
  console.log("fetchData :", userImage);
  return userImage;
}
/*
API call for getting the list
*/
async function fetchList(): Promise<Array<UserImage>> {
  const list = (await axios.get(USER_IMG_URL + `/list`)).data;
  console.log("user list:", list);
  return list;
}

/*
API call for getting the list by user
*/
async function fetchListByUser(user:string): Promise<UserImage[] | undefined> {
  const list = (await axios.get(USER_IMG_URL + `/user/${user}`)).data;
  console.log("fetchListByUser :", list);
  return list;
}

/*
API call for deleting image
*/
async function deleteData(_id:string): Promise<void> {
  console.log("deleted image id :", _id);
  const deleted = {
    deletedBy: JSON.parse(sessionStorage.getItem("userName") || ""),
  };
  console.log( "deleted",deleted);
  return await axios.post(USER_IMG_URL + `/delete/${_id}`, deleted);
}

/*
API call for restoring image
*/
async function restoreData(_id:string): Promise<void> {
  console.log("restore user: id :", _id);
  const restored = {
    restoredBy: JSON.parse(sessionStorage.getItem("userName") || ""),
  };
  console.log("restore restored image: :", restored);
  return await axios.post(
    USER_IMG_URL + `/restore/${_id}`,
    restored
  );
}

// headers: { "x-access-token": "token-value" },
export {
  uploadData,
  downloadData,
  updateData,
  fetchData,
  fetchList,
  fetchListByUser,
  deleteData,
  restoreData,
};
