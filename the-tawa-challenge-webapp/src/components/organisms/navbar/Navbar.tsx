import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "@rihenhouli/ttcsm_auth/lib/state";
import { useNavigate } from "react-router-dom";
import { NavbarContent } from "../navbar-content/NavbarContent";
import { getUserData } from "@rihenhouli/ttcsm_user/lib/selectors";
import { getUserImageData, listUserImageData } from "@rihenhouli/ttcsm_user-image/lib/selectors";
import { PopoverHeader } from "react-bootstrap";
import profile_img from "../../../assets/profile_img.png";
import { NavbarTitle } from "../../atoms/label/Label";
import { userActions } from "@rihenhouli/ttcsm_user/lib/state";
import User from "@rihenhouli/ttcsm_user/lib/models/User";
import { getAuthState } from "@rihenhouli/ttcsm_auth/lib/selectors";
import { userImageActions } from "@rihenhouli/ttcsm_user-image/lib/state";

require("./Navbar.css");
export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector(getAuthState);
  const userPhotos= useSelector(listUserImageData) || [];

  const [photoPath,setPhotoPath] =useState(profile_img)

  useEffect(() => {
    if (authState.login.success && authState.userLoggedIn)
   { 
   }
  }, [photoPath,userPhotos]);
  const [img, setImg] = React.useState(profile_img);
  const user = useSelector(getUserData);
  const showNameMenue = () => {};
  return (
    <div className="navbar">
      <NavbarTitle text={"THE TAWA CHALLENGE"}></NavbarTitle>
      <NavbarContent
        photo={photoPath || img}
        lastName={user?.lastName}
        firstName={user?.firstName}
        onClick={() =>{ 
          const disconnectedUser :User ={
            _id: user?._id || "",
            firstName: user?.firstName || "",
            lastName: user?.lastName || "",
            userName: user?.userName|| "",
            birthDate: user?.birthDate|| new Date(),
            userRole: user?.userRole || "",
            userState: "disconnected",
            createdBy: user?.createdBy || "",
            isDeleted: user?.isDeleted || false,
            __v: user?.__v || 0
          }
        dispatch(authActions.logout());
        dispatch(userActions.updateData(disconnectedUser))
      }}
      ></NavbarContent>
    </div>
  );
};
