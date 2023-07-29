import User from "@rihenhouli/ttcsm_user/lib/models/User";
import { getUserData } from "@rihenhouli/ttcsm_user/lib/selectors";
import { userActions } from "@rihenhouli/ttcsm_user/lib/state";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ProfileNameHint } from "../../../atoms/span/Span";
import { ChangeStringLabeledInput } from "../../labeled-input/string-labeled-input/name-labeled-input/StringLabeledInput";

export const FirstName = () => {
  const user = useSelector(getUserData);
  const dispatch = useDispatch();
  const [personFirstName, setPersonFirstName] = React.useState(
    user?.firstName || ""
  );
  const firstName = user?.firstName || "";
  const [disabledFirstName, setDisabledFirstName] = React.useState(true);
  const [isFirstNameSame, setIsFirstNameSame] = React.useState(true);
  const [isFirstNameValid, setIsFirstNameValid] = React.useState(false);
  const [isFirstNameFocus, setIsFirstNameFocus] = React.useState(false);
  const [isFirstNameBlur, setIsFirstNameBlur] = React.useState(false);
  const [firstNameSpanColor, setFirstSpanColor] = useState("gray");
  const [firstNameSpanMsg, setFirstSpanMsg] = useState("");
  const firstNameFocusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    if (personFirstName === firstName) {
      setIsFirstNameFocus(true);
      setIsFirstNameBlur(false);
      setFirstSpanMsg("you may change your first name");
      setFirstSpanColor("gray");
    } else {
      setIsFirstNameFocus(true);
      setIsFirstNameBlur(false);
      setFirstSpanMsg("only letters and spaces allowed");
      setFirstSpanColor("gray");
    }
  };

  // Handling first name onBlur event
  const firstNameBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFirstNameFocus(false);
    setIsFirstNameBlur(true);
    setDisabledFirstName(false);

    // Validate entered firstName
    if (personFirstName == "") {
      setDisabledFirstName(true);
      setIsFirstNameSame(true);
      setFirstSpanMsg("first name is required");
      setFirstSpanColor("red");
      console.log("test1");
    } else if (personFirstName == firstName) {
      setDisabledFirstName(true);
      setIsFirstNameSame(true);
      setFirstSpanMsg("");
      setFirstSpanColor("black");
      console.log("test2");
    } else if (personFirstName.match(/^[a-z][a-z\s]*$/i)) {
      setIsFirstNameSame(false);
      setDisabledFirstName(false);
      setFirstSpanMsg("click the button to save changes!");
      setFirstSpanColor("green");
      console.log("test3");
    } else {
      setIsFirstNameSame(false);
      setDisabledFirstName(true);
      setFirstSpanMsg("first name entered is invalid!");
      setFirstSpanColor("red");
      console.log("test4");
    }
  };
  const save = () => {
    if (user) {
      const newUser: User = {
        _id: user._id,
        firstName: personFirstName,
        lastName: user.lastName,
        userName: user.userName,
        birthDate: user.birthDate,
        userRole: user.userRole,
        userState: user.userState,
        createdBy: user.createdBy,
        isDeleted: user.isDeleted,
        __v: 0
      };
      console.log("new user", newUser);
      dispatch(
        userActions.updateData(new User(newUser))
      );
      setFirstSpanMsg("first name have been saved successfully!");
      setFirstSpanColor("green");
      setDisabledFirstName(true);
    }
  };
  return (
    <div>
      <ChangeStringLabeledInput
        label={"FIRST NAME"}
        type={"text"}
        onChange={(e) => setPersonFirstName(e.target.value)}
        placeholder={"first name"}
        value={personFirstName}
        disabled={disabledFirstName}
        onBlur={firstNameBlurHandler}
        onFocus={firstNameFocusHandler}
        onClick={save} saveChangesButtonHidden={disabledFirstName}  ></ChangeStringLabeledInput>
      <ProfileNameHint
        text={firstNameSpanMsg}
        color={firstNameSpanColor}
      ></ProfileNameHint>
    </div>
  );
};
