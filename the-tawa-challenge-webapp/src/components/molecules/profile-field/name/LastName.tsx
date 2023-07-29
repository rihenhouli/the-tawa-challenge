import User from "@rihenhouli/ttcsm_user/lib/models/User";
import { getUserData } from "@rihenhouli/ttcsm_user/lib/selectors";
import { userActions } from "@rihenhouli/ttcsm_user/lib/state";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ProfileNameHint } from "../../../atoms/span/Span";
import { ChangeStringLabeledInput } from "../../labeled-input/string-labeled-input/name-labeled-input/StringLabeledInput";

export const LastName = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUserData);
  const [personLastName, setPersonLastName] = React.useState(
    user?.lastName || ""
  );
  const lastName = user?.lastName || "";
  const [disabledLastName, setDisabledLastName] = React.useState(true);
  const [isLastNameSame, setIsLastNameSame] = React.useState(true);
  const [isLastNameValid, setIsLastNameValid] = React.useState(false);
  const [isLastNameFocus, setIsLastNameFocus] = React.useState(false);
  const [isLastNameBlur, setIsLastNameBlur] = React.useState(false);
  const [lastNameSpanColor, setLastSpanColor] = useState("gray");
  const [lastNameSpanMsg, setLastSpanMsg] = useState("");
  const LastNameFocusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    if (personLastName === lastName) {
      setIsLastNameFocus(true);
      setIsLastNameBlur(false);
      setLastSpanMsg("you may change your Last name");
      setLastSpanColor("gray");
    } else {
      setIsLastNameFocus(true);
      setIsLastNameBlur(false);
      setLastSpanMsg("only letters and spaces allowed");
      setLastSpanColor("gray");
    }
  };

  // Handling Last name onBlur event
  const LastNameBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsLastNameFocus(false);
    setIsLastNameBlur(true);
    setDisabledLastName(false);

    // Validate entered LastName
    if (personLastName == "") {
      setDisabledLastName(true);
      setIsLastNameSame(true);
      setLastSpanMsg("Last name is required");
      setLastSpanColor("red");
      console.log("test1");
    } else if (personLastName == lastName) {
      setDisabledLastName(true);
      setIsLastNameSame(true);
      setLastSpanMsg("");
      setLastSpanColor("black");
      console.log("test2");
    } else if (personLastName.match(/^[a-z][a-z\s]*$/i)) {
      setIsLastNameSame(false);
      setDisabledLastName(false);
      setLastSpanMsg("click the button to save changes!");
      setLastSpanColor("green");
      console.log("test3");
    } else {
      setIsLastNameSame(false);
      setDisabledLastName(true);
      setLastSpanMsg("Last name entered is invalid!");
      setLastSpanColor("red");
      console.log("test4");
    }
  };
  const save = () => {
    if (user) {
      const newUser: any = {
        _id: user._id,
        firstName: user.firstName,
        lastName: personLastName,
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
      setLastSpanMsg("last name have been saved successfully!");
      setLastSpanColor("green");
      setDisabledLastName(true);
    }
  };
  return (
    <div>
      <ChangeStringLabeledInput
        label={"Last NAME"}
        type={"text"}
        onChange={(e) => setPersonLastName(e.target.value)}
        placeholder={"Last name"}
        value={personLastName}
        disabled={disabledLastName}
        onBlur={LastNameBlurHandler}
        onFocus={LastNameFocusHandler}
        onClick={save}
        saveChangesButtonHidden={disabledLastName}
      ></ChangeStringLabeledInput>
      <ProfileNameHint
        text={lastNameSpanMsg}
        color={lastNameSpanColor}
      ></ProfileNameHint>
    </div>
  );
};
