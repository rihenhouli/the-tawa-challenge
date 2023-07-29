  import { listUserImageData } from "@rihenhouli/ttcsm_user-image/lib/selectors";
  import { getUserData } from "@rihenhouli/ttcsm_user/lib/selectors";
  import React, { useEffect, useState } from "react";
  import { useSelector } from "react-redux";
  import { AccountImage} from "../../atoms/image/Image";
  import profile_img from "../../../assets/profile_img.png";
  import "./AccountHeader.css";
import { getAuthState } from "@rihenhouli/ttcsm_auth/lib/selectors";
  
  export const AccountHeader = () => {
    const user = useSelector(getUserData);
    const authState = useSelector(getAuthState);
    const userPhotos= useSelector(listUserImageData) || [];
    const [photoPath,setPhotoPath] =useState(profile_img)
    useEffect(() => {
      if (authState.login.success && authState.userLoggedIn)
     { 
      if(userPhotos.length>0)
      {
      const userPhoto = userPhotos && userPhotos.find((photo) => photo.isMain === true);
      let path = userPhoto?.userImagePath.replace(/^public\\/, "");
      let url = "http://localhost:3030/";
      let imagePath = url + path;
      setPhotoPath(imagePath)}
     }
    }, [photoPath,userPhotos]);
    return (
      <div className="account_header">
        <AccountImage link={""} src={userPhotos.length !== 0 ? photoPath : profile_img} alt={""}></AccountImage>
        <h1>
          {" "}
          Welcome, {user?.firstName} {user?.lastName}
        </h1>
        <h2>Manage your info and blog to make T.T.C work better for you.</h2>
      </div>
    );
  };
  
