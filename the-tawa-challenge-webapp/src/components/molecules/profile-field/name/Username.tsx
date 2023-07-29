import User from "@rihenhouli/ttcsm_user/lib/models/User";
import {
  getUserData,
  listUserData,
} from "@rihenhouli/ttcsm_user/lib/selectors";
import { userActions } from "@rihenhouli/ttcsm_user/lib/state";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ProfileNameHint } from "../../../atoms/span/Span";
import { ChangeStringLabeledInput } from "../../labeled-input/string-labeled-input/name-labeled-input/StringLabeledInput";

export const UserName = () => {
  const user = useSelector(getUserData);
  const userList = useSelector(listUserData);

  const dispatch = useDispatch();
  const [userUsername, setUserName] = React.useState(user?.userName || "");
  const userName = user?.userName || "";
  const [disabledUserName, setDisabledUserName] = React.useState(true);
  const [isUserNameSame, setIsUserNameSame] = React.useState(true);
  const [isUserNameValid, setIsUserNameValid] = React.useState(false);
  const [isUserNameFocus, setIsUserNameFocus] = React.useState(false);
  const [isUserNameBlur, setIsUserNameBlur] = React.useState(false);
  const [userNameSpanColor, setSpanColor] = useState("gray");
  const [userNameSpanMsg, setSpanMsg] = useState("");
  const userNameFocusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    if (userUsername === userName) {
      setIsUserNameFocus(true);
      setIsUserNameBlur(false);
      setSpanMsg("you may change your userName");
      setSpanColor("gray");
    } else {
      setIsUserNameFocus(true);
      setIsUserNameBlur(false);
      setSpanMsg("only letters and spaces allowed");
      setSpanColor("gray");
    }
  };

 const onUsernameChange =(event:any)=>{
  setUserName(event.target.value);
  const existingUser = userList?.find(
    (user) => user.userName === event.target.value
  );
  if (event.target.value == "") {
    setDisabledUserName(true);
    setIsUserNameSame(true);
    setSpanMsg("userName is required");
    setSpanColor("red");
    console.log("test1");
  } else if (event.target.value == userName) {
    setDisabledUserName(true);
    setIsUserNameSame(true);
    setSpanMsg("");
    setSpanColor("black");
  } else if (event.target.value.match(/^[a-zA-Z0-9][a-zA-Z0-9\s]*$/)) {
    setIsUserNameSame(false);
    setDisabledUserName(false);
    setSpanMsg("click the button to save changes!");
    setSpanColor("green");
    // window.location.reload();
    if (existingUser) {
      setSpanMsg("username already exists ! try another one");
      setSpanColor("red");
    }
  } else {
    setIsUserNameSame(false);
    setDisabledUserName(true);
    setSpanMsg("userName entered is invalid!");
    setSpanColor("red");
    console.log("test4");
  }
  console.log(existingUser);
 }

  // Handling userName onBlur event
  const userNameBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsUserNameFocus(false);
    setIsUserNameBlur(true);
    setDisabledUserName(false);
    const existingUser = userList?.find(
      (user) => user.userName === event.target.value
    );
    // Validate entered userName
    if (userUsername == "") {
      setDisabledUserName(true);
      setIsUserNameSame(true);
      setSpanMsg("userName is required");
      setSpanColor("red");
      console.log("test1");
    } else if (userUsername == userName) {
      setDisabledUserName(true);
      setIsUserNameSame(true);
      setSpanMsg("");
      setSpanColor("black");
      console.log("test2");
    } else if (userUsername.match(/^[a-zA-Z0-9][a-zA-Z0-9\s]*$/)) {
      setIsUserNameSame(false);
      setDisabledUserName(false);
      setSpanMsg("click the button to save changes!");
      setSpanColor("green");
      console.log("test3");
      if (existingUser) {
        setSpanMsg("username already exists ! try another one");
        setSpanColor("red");
      }
    } else {
      setIsUserNameSame(false);
      setDisabledUserName(true);
      setSpanMsg("userName entered is invalid!");
      setSpanColor("red");
      console.log("test4");
    }
  };
  const save = () => {
    if (user) {
      const newUser: User = {
        _id: user._id,
        userName: userUsername,
        lastName: user.lastName,
        firstName: user.firstName,
        birthDate: user.birthDate,
        userRole: user.userRole,
        userState: user.userState,
        createdBy: user.createdBy,
        isDeleted: user.isDeleted,
        __v: 0,
      };
      console.log("new user", newUser);
      dispatch(userActions.updateData(new User(newUser)));
      setSpanMsg("userName have been saved successfully!");
      setSpanColor("green");
      setDisabledUserName(true);
    }
  };
  return (
    <div>
      <ChangeStringLabeledInput
        label={"USERNAME"}
        type={"text"}
        onChange={onUsernameChange}
        placeholder={"your Username"}
        value={userUsername}
        disabled={disabledUserName}
        onBlur={userNameBlurHandler}
        onFocus={userNameFocusHandler}
        onClick={save}
        saveChangesButtonHidden={disabledUserName}
      ></ChangeStringLabeledInput>
      <ProfileNameHint
        text={userNameSpanMsg}
        color={userNameSpanColor}
      ></ProfileNameHint>
    </div>
  );
};
