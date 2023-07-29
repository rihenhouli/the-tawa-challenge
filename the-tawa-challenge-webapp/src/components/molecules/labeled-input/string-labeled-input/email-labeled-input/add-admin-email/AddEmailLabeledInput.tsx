import React, { useEffect, useState } from "react";
import {
  ProfileAddEmailInput,
  ProfileEmailInput,
} from "../../../../../atoms/input/text-input/TextInput";
import {
  AddEmailButton,
  SetEmailButton,
  ValidateChangesButton,
} from "../../../../../atoms/button/Button";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { mailAddressActions } from "@rihenhouli/ttcsm_mail-address/lib/state";
import { getMailAddressData } from "@rihenhouli/ttcsm_mail-address/lib/selectors";
import { ProfileNameHint } from "../../../../../atoms/span/Span";
import { MonthInput } from "../../../../../atoms/input/date-input/DateInput";
import { AddEmailParagraph } from "../../../../../atoms/paragraph/Paragraph";
import { listMailAddressData } from "@rihenhouli/ttcsm_mail-address/lib/selectors";

import MailAddress from "@rihenhouli/ttcsm_mail-address/lib/models/MailAddress";

require("./AddEmailLabeledInput.css");

export const AddEmailLabeledInput = (props: {}) => {
  useEffect(() => {
    setIsEmailInputDisabled(false);
  }, []);
  const dispatch = useDispatch();
  const mailAddresses = useSelector(listMailAddressData)?.filter(
    (email) => email.isDeleted === false
  );
  const [isExistingInputDisabled, setIsExistingInputDisabled] = useState(true);
  const [theEmail, setEmail] = React.useState("");
  const [disabledEmail, setDisabledEmail] = React.useState(true);
  const [isEmailSame, setIsEmailSame] = React.useState(true);
  const [isAddTextHidden, setIsAddTextHidden] = React.useState(false);
  const [isAddButtonHidden, setIsAddButtonHidden] = React.useState(false);
  const [isEmailFocus, setIsEmailFocus] = React.useState(false);
  const [isEmailBlur, setIsEmailBlur] = React.useState(false);
  const [emailSpanColor, setLastSpanColor] = useState("gray");
  const [emailSpanMsg, setLastSpanMsg] = useState("");
  const [isMain, setIsMain] = React.useState(false);
  const [isEmailInputHidden, setIsEmailInputHidden] = React.useState(true);
  const [isEmailInputDisabled, setIsEmailInputDisabled] = React.useState(false);
  const [addressType, setAddressType] = useState("Professional");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const changeAddressTypeHandler = (e: any) => {
    setAddressType(e.target.value);
    console.log(addressType);
  };
  const addressTypeBlurHandler = (
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    setIsEmailFocus(false);
    setIsEmailBlur(true);
    setIsEmailInputDisabled(false);
    if (mailAddresses?.length === 3) {
      setDisabledEmail(true);
      setIsEmailSame(true);
      setLastSpanColor("red");
      setLastSpanMsg("you may not add another email");
      setIsEmailInputDisabled(true);
    } else if (
      mailAddresses?.length === 0 ||
      mailAddresses?.length === 1 ||
      mailAddresses?.length === 2
    ) {
      setIsEmailFocus(true);
      setIsEmailBlur(false);
      setLastSpanMsg("you may add email");
      setLastSpanColor("gray");
      setIsEmailInputDisabled(false);
    } else {
      setIsEmailFocus(true);
      setIsEmailBlur(false);
      setLastSpanMsg("email format should be like : example@example.example");
      setLastSpanColor("gray");
      setIsEmailInputDisabled(false);
    }
  };
  const emailFocusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsEmailInputDisabled(false);
    if (mailAddresses?.length === 3) {
      setDisabledEmail(true);
      setIsEmailSame(true);
      setLastSpanColor("red");
      setLastSpanMsg("you may not add another email");
      setIsEmailInputDisabled(true);
    }  else if (
      mailAddresses?.length === 0 ||
      mailAddresses?.length === 1 ||
      mailAddresses?.length === 2
    ) {
      setIsEmailFocus(true);
      setIsEmailBlur(false);
      setLastSpanMsg("you may add email");
      setLastSpanColor("gray");
      setIsEmailInputDisabled(false);
    }  else {
      setIsEmailFocus(true);
      setIsEmailBlur(false);
      setLastSpanMsg("email format should be like : example@example.example");
      setLastSpanColor("gray");
      setIsEmailInputDisabled(false);
    }
  };
  // Handling Last name onBlur event
  const emailBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsEmailFocus(false);
    setIsEmailBlur(true);
    setDisabledEmail(false);
    setIsEmailInputDisabled(false);
    // Validate entered Email
    if (mailAddresses?.length === 3) {
      setDisabledEmail(true);
      setIsEmailSame(true);
      setLastSpanColor("red");
      setLastSpanMsg("you may not add another email");
      setIsEmailInputDisabled(true);
    }  else if (
      mailAddresses?.length === 0 ||
      mailAddresses?.length === 1 ||
      mailAddresses?.length === 2
    ) {
      setIsEmailFocus(true);
      setIsEmailBlur(false);
      setLastSpanMsg("you may add email");
      setLastSpanColor("gray");
      setIsEmailInputDisabled(false);
    }  else {
      setIsEmailFocus(true);
      setIsEmailBlur(false);
      setLastSpanMsg("email format should be like : example@example.example");
      setLastSpanColor("gray");
      setIsEmailInputDisabled(false);
    }
  };
  console.log("addressType", addressType);

  const save = () => {
    const newEmail: MailAddress = {
      createdBy: JSON.parse(sessionStorage.getItem("userName") || ""),
      isDeleted: false,
      _id: "",
      mailAddressValue: theEmail,
      __v: 0,
      isMain: isMain,
      user: JSON.parse(sessionStorage.getItem("userId") || ""),
    };
    const theEmailExistance = mailAddresses?.find(
      (email) => email.mailAddressValue === theEmail
    );
    console.log("theEmailExistance", theEmailExistance);
    if (theEmailExistance !== undefined) {
      console.log("email already exists", newEmail);
      setDisabledEmail(true);
      setLastSpanColor("red");
      setLastSpanMsg("email already exists");
    } else {
      dispatch(mailAddressActions.addData(newEmail));
      setDisabledEmail(true);
      setLastSpanMsg("new email added successfully");
      window.location.reload();
    }
  };
  const addEmail = () => {
    setIsAddButtonHidden(true);
    setIsEmailInputHidden(false);
    setIsAddTextHidden(true);
  };

  const onChangeEmail = (e:any) => {
    setEmail(e.target.value);
    console.log("onchange", e.target.value);
    const theEmailExistance = mailAddresses?.find(
      (email) => email.mailAddressValue === e.target.value
    );
    console.log("theEmailExistance", theEmailExistance);
    if(!emailRegex.test(e.target.value)){
      setIsEmailFocus(true);
      setIsEmailBlur(false);
      setLastSpanMsg("email format should be like : example@example.example");
      setLastSpanColor("red");
      setIsEmailInputDisabled(false);
    } else if (theEmailExistance) {
      console.log("email already exists");
      setDisabledEmail(true);
      setLastSpanColor("red");
      setLastSpanMsg("email already exists");
    } else {
      setDisabledEmail(false);
      setIsEmailSame(false);
      setLastSpanMsg("click the button to save the changes you made!");
      setLastSpanColor("green");
    }
  }
  return (
    <div className="add_email_labeled_input_div">
      <AddEmailParagraph
        text={"you may add another mail address"}
        hidden={isAddTextHidden}
      ></AddEmailParagraph>
      <AddEmailButton
        text={"Add another"}
        onClick={addEmail}
        hidden={isAddButtonHidden}
      ></AddEmailButton>
      <div className="add_email_button_input" hidden={isEmailInputHidden}>
        <ProfileAddEmailInput
          value={theEmail}
          disabled={isEmailInputDisabled}
          onChange={onChangeEmail}
          placeholder={"example@example.example"}
          onBlur={emailBlurHandler}
          onFocus={emailFocusHandler}
        ></ProfileAddEmailInput>
        <label>make it main</label>
        <input className="is_main_checkbox" type="checkbox" onChange={(e)=>(setIsMain(!isMain))}/>
        <ValidateChangesButton
          onClick={save}
          disabled={disabledEmail}
        ></ValidateChangesButton>
      </div>
      <ProfileNameHint
        text={emailSpanMsg}
        color={emailSpanColor}
      ></ProfileNameHint>
      <SetEmailButton
        onClick={save}
        hidden={disabledEmail}
        text={"save"}
      ></SetEmailButton>
    </div>
  );
};
