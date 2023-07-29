/* eslint-disable */
import React, { MouseEventHandler, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getUserData } from "@rihenhouli/ttcsm_user/lib/selectors";
import { useDispatch } from "react-redux";
import {
  ProfileModalAddPicImg,
  ProfileModalImage,
} from "../../../atoms/image/Image";
import { AddProfilePhotoPrevImagesDiv } from "../../image-list/ImageList";
import { AddProfilePictureLabeledInput } from "../../labeled-input/file-labeled-input/FileLabeledInput";
import { AddProfilePhotoButton } from "../../../atoms/button/Button";
import { FirstName } from "../../profile-field/name/FirstName";
import { LastName } from "../../profile-field/name/LastName";
import { Birthdate } from "../../profile-field/birthdate/Birthdate";
import { listUserImageData } from "@rihenhouli/ttcsm_user-image/lib/selectors";
import UserImage from "@rihenhouli/ttcsm_user-image/lib/models/UserImage";
import { ProfileModalTitle } from "../../../atoms/title/Title";
import { userImageActions } from "@rihenhouli/ttcsm_user-image/lib/state";
import login_page from "../../../../assets/online_article.png";
import profile_photo from "../../../../assets/profile_img.png";
import { CategoryInput } from "../../../atoms/input/Input";
import { UserName } from "../../profile-field/name/Username";

require("./ModalBody.css");

export const ChangeProfilePhotoModalBody = (props: {}) => {
  const userPhoto = useSelector(listUserImageData)?.find(
    (photo) => photo.isMain === true
  );
  let path = userPhoto?.userImagePath.replace(/^public\\/, "");
  let url = "http://localhost:3030/";
  let imagePath = url + path;
  return (
    <Modal.Body className="profile_basic_info_photo_modal_body">
      <ProfileModalImage src={imagePath || profile_photo}></ProfileModalImage>
    </Modal.Body>
  );
};

export const AddProfilePhotoModalBody = (props: {}) => {
  const userPhotoList = useSelector(listUserImageData);
  const userPhoto = userPhotoList?.find((photo) => photo.isMain === true);
  const [uploadingPath, setUploadingPath] = useState(
    "https://cdn-icons-png.flaticon.com/512/2095/2095058.png"
  );
  const dispatch = useDispatch();
  const [image, setImage]: any = useState();
  const [imageName, setImageName] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [isMain, setIsMain] = useState(false);
  let formData = new FormData();
  const imageSelectedHandler = (e: any) => {
    const photo = e.target.files[0];
    setImage(e.target.files[0]);
    setImageName(e.target.files[0].name);
    setUploadingPath(URL.createObjectURL(photo));
  };
  // chosenPhotoId()

  const saveImageHandler = (e: any) => {
    formData.append("user", JSON.parse(sessionStorage.getItem("userId") || ""));
    formData.append("userImageAlt", imageAlt);
    formData.append("isMain", isMain.toString());
    formData.append(
      "createdBy",
      JSON.parse(sessionStorage.getItem("userName") || "")
    );
    formData.append("image", image);
    console.log(image);
    console.log(formData);
    dispatch(userImageActions.uploadData(formData));
    window.location.reload()
  };

  return (
    <Modal.Body className="profile_basic_info_add_photo_modal_body">
      <ProfileModalTitle
        text={"choose from existing images"}
      ></ProfileModalTitle>
      <AddProfilePhotoPrevImagesDiv
        userPhotosList={userPhotoList}
      ></AddProfilePhotoPrevImagesDiv>
      <ProfileModalTitle text={"or"}></ProfileModalTitle>
      <ProfileModalAddPicImg src={uploadingPath}></ProfileModalAddPicImg>
      <AddProfilePictureLabeledInput
        text={""}
        onChange={imageSelectedHandler}
      ></AddProfilePictureLabeledInput>
      <input onChange={(e: any) => setImageAlt(e.target.value)} />
      <input type="checkbox" onChange={() => setIsMain(!isMain)} />
      <AddProfilePhotoButton
        onClick={saveImageHandler}
      ></AddProfilePhotoButton>{" "}
    </Modal.Body>
  );
};

export const ChooseProfilePhotoModalBody = (props: { imgSrc: string }) => {
  return (
    <Modal.Body className="profile_basic_info_photo_modal_body">
      <ProfileModalImage src={props.imgSrc}></ProfileModalImage>
    </Modal.Body>
  );
};

export const ChangeNameModalBody = (props: {}) => {
  return (
    <Modal.Body
      className="profile_basic_info_change_name_modal_body"
      data-backdrop="static"
      data-keyboard="false"
    >
      <FirstName />
      <LastName />
    </Modal.Body>
  );
};

export const ChangeBirthdayModalBody = (props: {}) => {
  return (
    <Modal.Body
      className="profile_basic_info_change_birthday_modal_body"
      data-backdrop="static"
      data-keyboard="false"
    >
      <Birthdate />
    </Modal.Body>
  );
};


export const ChangeUsernameModalBody = (props: {}) => {
  return (
    <Modal.Body
      className="profile_basic_info_change_name_modal_body"
      data-backdrop="static"
      data-keyboard="false"
    >
      <UserName />
    </Modal.Body>
  );
};