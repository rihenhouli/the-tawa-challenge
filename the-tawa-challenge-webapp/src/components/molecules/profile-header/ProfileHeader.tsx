import User, {
    UserDataType,
  } from "@rihenhouli/ttcsm_user/lib/models/User";
  import { getUserData } from "@rihenhouli/ttcsm_user/lib/selectors";
  import React from "react";
  import { useSelector } from "react-redux";
  import "./ProfileHeader.css";
  
  interface IProps {
    user: User | null | undefined;
  }
  export const ProfileHeader = () => {
    const user = useSelector(getUserData);
    const [firstName, setFirstName] = React.useState(
      user?.firstName
    );
    const [lastName, setLastName] = React.useState(
      user?.lastName
    );
    return (
      <div className="profile_header">
        <h1>
          {" "}
          Personal info
        </h1>
        <h2>Info about you and your preferences across this app</h2>
      </div>
    );
  };
  