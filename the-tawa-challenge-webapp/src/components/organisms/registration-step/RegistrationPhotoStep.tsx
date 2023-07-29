import User from "@rihenhouli/ttcsm_user/lib/models/User";
import React, { useEffect, useState } from "react";
import "./RegistrationStep.css";
import { useDispatch, useSelector } from "react-redux";
import { userImageActions } from "@rihenhouli/ttcsm_user-image/lib/state";
import { mailAddressActions } from "@rihenhouli/ttcsm_mail-address/lib/state";
import { userActions } from "@rihenhouli/ttcsm_user/lib/state";
import {
  RegisterStepLabel,
  RegisterationItemLabel,
} from "../../atoms/label/Label";
import { listUserData } from "@rihenhouli/ttcsm_user/lib/selectors";
import { listMailAddressData } from "@rihenhouli/ttcsm_mail-address/lib/selectors";
import { listPhoneNumberData } from "@rihenhouli/ttcsm_phone-number/lib/selectors";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ProfileModalAddPicImg } from "../../atoms/image/Image";
import { AddProfilePictureLabeledInput } from "../../molecules/labeled-input/file-labeled-input/FileLabeledInput";
export const RegistrationPhotoStep = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userNameFromSession = sessionStorage.getItem("userName");
  const userName = userNameFromSession ? JSON.parse(userNameFromSession) : "";
  const user = useSelector(listUserData)?.find(
    (user) => user.userName === userName
  );
  const [uploadingPath, setUploadingPath] = useState(
    "https://cdn-icons-png.flaticon.com/512/2095/2095058.png"
  );
  const [image, setImage]: any = useState();
  const [imageName, setImageName] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isAltValid, setIsAltValid] = useState(false);
  let formData = new FormData();
  const imageSelectedHandler = (e: any) => {
    console.log(user)
    const photo = e.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedTypes.includes(photo.type)) {
      alert("Please choose a valid image file (JPG, PNG, GIF).");
      setImage(null);
      setImageName("");
      setUploadingPath(
        "https://cdn-icons-png.flaticon.com/512/2095/2095058.png"
      );
      setIsBtnDisabled(true);
      return;
    } else {
      setImage(e.target.files[0]);
      setImageName(e.target.files[0].name);
      setUploadingPath(URL.createObjectURL(photo));
      setIsValid(true);
      setIsBtnDisabled(false);
    }
  };
  useEffect(() => {
    if (isValid && isAltValid) {
      setIsBtnDisabled(false);
    }
  }, [image, imageAlt]);
  const saveImageHandler = (e: any) => {
    formData.append("user", user?._id || "");
    formData.append("userImageAlt", imageAlt);
    formData.append("isMain", "true");
    formData.append("createdBy", user?.userName || "");
    formData.append("image", image);
    console.log(image);
    console.log(formData);
    dispatch(userImageActions.uploadData(formData));
    dispatch(userActions.getData(user?._id||""));
    sessionStorage.removeItem("userName");
    sessionStorage.setItem("userId", JSON.stringify(user?._id));
    sessionStorage.setItem("registrationStep", JSON.stringify("password-step"));
    navigate("/register-password");
  };

  const [saveBtnDisabled, setIsBtnDisabled] = React.useState(true);

  return (
    <div className="registration_step">
      <RegisterStepLabel text="Profile Picture"></RegisterStepLabel>
      <ProfileModalAddPicImg src={uploadingPath}></ProfileModalAddPicImg>
      <AddProfilePictureLabeledInput
        text={""}
        onChange={imageSelectedHandler}
      ></AddProfilePictureLabeledInput>
      <div className="registration_step_image_alt">
        <RegisterationItemLabel
          text={"costumize alt? "}
        ></RegisterationItemLabel>
        <input
          onChange={(e: any) => {
            setImageAlt(e.target.value);
            setIsAltValid(true);
          }}
          placeholder="type your alt here.."
        />
      </div>
      <div className="step_button_div">
        <Button
          disabled={saveBtnDisabled}
          variant="primary"
          onClick={saveImageHandler}
        >
          {" "}
          Next{" "}
        </Button>
      </div>
    </div>
  );
};
