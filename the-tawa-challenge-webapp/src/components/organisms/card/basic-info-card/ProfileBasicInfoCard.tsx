import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { ProfileCardTitle } from "../../../atoms/title/Title";
import { useSelector } from "react-redux";
import { getUserData } from "@rihenhouli/ttcsm_user/lib/selectors";
import { listUserImageData } from "@rihenhouli/ttcsm_user-image/lib/selectors";
import { Button, Modal } from "react-bootstrap";
import {
  ProfileBasicInfoAddPhotoModal,
  ProfileBasicInfoBirthdayModal,
  ProfileBasicInfoNameModal,
  ProfileBasicInfoPhotoModal,
} from "../../modal/basic-info-modal/Modal";
import { useDispatch } from "react-redux";
import { userImageActions } from "@rihenhouli/ttcsm_user-image/lib/state";
import { getAuthState } from "@rihenhouli/ttcsm_auth/lib/selectors";
import { phoneNumberActions } from "@rihenhouli/ttcsm_phone-number/lib/state";
import { MonthNameGenerator } from "../../../operations/Month";
import { SuperscriptGenerator } from "../../../operations/Superscript";
import profile_photo from '../../../../assets/profile_img.png'
import { ProfileCardImageItem, ProfileCardItem } from "../../../molecules/card-item/CardItem";
import { userActions } from "@rihenhouli/ttcsm_user/lib/state";
require("./ProfileBasicInfoCard.css");

export const ProfileBasicInfoCard = (props: {}) => {
  const dispatch = useDispatch();
  const user = useSelector(getUserData);
  const userPhoto = useSelector(listUserImageData)?.find((photo)=>photo.isMain===true);
  let path = userPhoto?.userImagePath.replace(/^public\\/, "") 
  let url = 'http://localhost:3030/'
  let imagePath = url+path;
  const authState = useSelector(getAuthState);
  const [adminFirstName, setFirstName] = React.useState(
    user?.firstName
  );
  const [adminLastName, setLastName] = React.useState(
    user?.lastName
  );
  const [adminBirthDate, setBirthDate] = React.useState(
    user?.birthDate.toString()
  );
  const year = adminBirthDate?.substring(0, 4);
  const month = MonthNameGenerator(adminBirthDate?.substring(5, 7) + "");
  const day = adminBirthDate?.substring(8, 10);
  const superscript = SuperscriptGenerator(parseInt(day + ""));
  const birthDay = month + " " + day + superscript + " ," + year;
  const [photoShow, setPhotoShow] = React.useState(false);
  const [addPhotoShow, setAddPhotoShow] = React.useState(false);
  const [changeNameShow, setChangeNameShow] = React.useState(false);
  const [changeBirthdayShow, setChangeBirthdayShow] = React.useState(false);
  const openPhoto = () => {
    setPhotoShow(!photoShow);
  };

  const addPhoto = () => {
    setAddPhotoShow(!addPhotoShow);
    dispatch(userImageActions.listDataByUser(userPhoto?.user || ""));
  };
  const addPhotoBack = () => {
    window.location.reload();
  };
  const changeName = () => {
    setChangeNameShow(!changeNameShow);
  };
  const QuitName = () => {
    window.location.reload();
    setChangeNameShow(!changeNameShow);
  };


  const changeBirthday = () => {
    setChangeBirthdayShow(!changeBirthdayShow);
  };
  const QuitBirthday = () => {
    window.location.reload();
    setChangeBirthdayShow(!changeNameShow);
  };
  return (
    <div className="profile_basic_info_card">
      <ProfileCardTitle text={"Basic info"}></ProfileCardTitle>
      <ProfileCardImageItem
        title={"Photo"}
        text={"Add a photo to personalise your account"}
        onClick={openPhoto}
        src={imagePath? imagePath :profile_photo }
      ></ProfileCardImageItem>
      <ProfileBasicInfoPhotoModal
        show={photoShow}
        onClick={openPhoto}
        openAdd={addPhoto}
      ></ProfileBasicInfoPhotoModal>
      <ProfileBasicInfoAddPhotoModal
        show={addPhotoShow}
        onClick={addPhotoBack}
      ></ProfileBasicInfoAddPhotoModal>
      <ProfileCardItem
        title={"Name"}
        text={adminFirstName + " " + adminLastName}
        onClick={changeName}
      ></ProfileCardItem>
      <ProfileBasicInfoNameModal
        show={changeNameShow}
        onClick={QuitName}
      ></ProfileBasicInfoNameModal>
      <ProfileCardItem
        title={"Birthday"}
        text={birthDay}
        onClick={changeBirthday}
      ></ProfileCardItem>
      <ProfileBasicInfoBirthdayModal
        show={changeBirthdayShow}
        onClick={QuitBirthday}
      ></ProfileBasicInfoBirthdayModal>
    </div>
  );
};
