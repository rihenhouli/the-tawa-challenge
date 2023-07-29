import { useDispatch, useSelector } from "react-redux";
import { NavbarSearch } from "../../molecules/search/Search";
import {
  NavbarLogoutImage,
  NavbarPersonalImage,
} from "../../atoms/image/Image";
import { authActions } from "@rihenhouli/ttcsm_auth/lib/state";
import { NavbarLabel } from "../../atoms/label/Label";
import logout from "../../../assets/logout.png";
import { MouseEventHandler, useEffect, useState } from "react";
import { getAuthState } from "@rihenhouli/ttcsm_auth/lib/selectors";
import { listUserImageData } from "@rihenhouli/ttcsm_user-image/lib/selectors";
import profile_img from "../../../assets/profile_img.png";

require("./NavbarContent.css");
export const NavbarContent = (props: {
  onClick: MouseEventHandler<HTMLImageElement>;
  photo: string | undefined;
  lastName: any;
  firstName: any;
}) => {
  const dispatch = useDispatch();
  const authState = useSelector(getAuthState);
  const userPhotos= useSelector(listUserImageData) || [];
  const [photoPath,setPhotoPath] =useState(profile_img)
  useEffect(() => {
    if (authState.login.success && authState.userLoggedIn)
   { if(userPhotos.length>0)
    {const userPhoto = userPhotos && userPhotos.find((photo) => photo.isMain === true);
    let path = userPhoto?.userImagePath.replace(/^public\\/, "");
    let url = "http://localhost:3030/";
    let imagePath = url + path;
    setPhotoPath(imagePath)}
   }
  }, [photoPath,userPhotos]);
  return (
    <div className="navbar_content">
      <NavbarSearch></NavbarSearch>
      <NavbarPersonalImage
              src={userPhotos.length !== 0 ? photoPath : profile_img}
        alt={"admin-image"}
      ></NavbarPersonalImage>
      <NavbarLabel
        text={props.firstName + " " + props.lastName.toUpperCase()}
      ></NavbarLabel>
      <NavbarLogoutImage
        src={logout}
        onClick={props.onClick}
      ></NavbarLogoutImage>
    </div>
  );
};
