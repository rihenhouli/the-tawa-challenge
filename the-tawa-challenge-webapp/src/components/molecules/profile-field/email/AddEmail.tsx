import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ProfileNameHint } from "../../../atoms/span/Span";
import { getMailAddressState } from "@rihenhouli/ttcsm_mail-address/lib/selectors";
import { mailAddressActions } from "@rihenhouli/ttcsm_mail-address/lib/state";
import MailAddress from "@rihenhouli/ttcsm_mail-address/lib/models/MailAddress";

import { listMailAddressData } from "@rihenhouli/ttcsm_mail-address/lib/selectors";
import { getAuthState } from "@rihenhouli/ttcsm_auth/lib/selectors";
import { AddEmailParagraph } from "../../../atoms/paragraph/Paragraph";
import {
  AddEmailButton,
  ChangeEmailButton,
} from "../../../atoms/button/Button";
import { ChangeEmailLabeledInput } from "../../labeled-input/string-labeled-input/email-labeled-input/change-email/ChangeEmailLabeledInput";

export const AddEmail = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (mailAddresses?.length === 0) {
      setIsEmailButtonHidden(true);
      setIsEmailInputHidden(false);
    } else {
      setIsEmailButtonHidden(false);
      setIsEmailInputHidden(false);
      setIsAddButtonHidden(false);
    }
  }, []);
  const authState = useSelector(getAuthState);
  const userId = JSON.parse(sessionStorage.getItem("userId") || "");
  const mailAddresses = useSelector(listMailAddressData);
  const [theEmail, setEmail] = React.useState("");
  const email =
    mailAddresses?.find((email) => email.isDeleted === false)
      ?.mailAddressValue || "";
  const [disabledEmail, setDisabledEmail] = React.useState(true);
  const [isEmailSame, setIsEmailSame] = React.useState(true);
  const [isEmailValid, setIsEmailValid] = React.useState(false);
  const [isEmailFocus, setIsEmailFocus] = React.useState(false);
  const [isEmailBlur, setIsEmailBlur] = React.useState(false);
  const [emailSpanColor, setLastSpanColor] = useState("gray");
  const [emailSpanMsg, setLastSpanMsg] = useState("");
  const [isEmailButtonHidden, setIsEmailButtonHidden] = React.useState(true);
  const [isAddButtonHidden, setIsAddButtonHidden] = React.useState(true);
  const [isEmailInputHidden, setIsEmailInputHidden] = React.useState(
    !isEmailButtonHidden
  );

  const emailFocusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    if (theEmail === email) {
      setIsEmailFocus(true);
      setIsEmailBlur(false);
      setLastSpanMsg("you may change your email");
      setLastSpanColor("gray");
    } else {
      setIsEmailFocus(true);
      setIsEmailBlur(false);
      setLastSpanMsg("email format should be like : example@example.example");
      setLastSpanColor("gray");
    }
  };

  // Handling Last name onBlur event
  const emailBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsEmailFocus(false);
    setIsEmailBlur(true);
    setDisabledEmail(false);

    // Validate entered Email
    if (theEmail == "") {
      setDisabledEmail(true);
      setIsEmailSame(true);
      setLastSpanMsg("email is required");
      setLastSpanColor("red");
      console.log("test1");
    } else if (theEmail == email) {
      setDisabledEmail(true);
      setIsEmailSame(true);
      setLastSpanMsg("");
      setLastSpanColor("black");
      console.log("test2");
    } else if (theEmail.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
      setIsEmailSame(false);
      setDisabledEmail(false);
      setLastSpanMsg("click the button to save changes!");
      setLastSpanColor("green");
      console.log("test3");
    } else {
      setIsEmailSame(false);
      setDisabledEmail(true);
      setLastSpanMsg("email format entered is invalid!");
      setLastSpanColor("red");
      console.log("test4");
    }
  };
  const addEmail = () => {
    setIsEmailInputHidden(false);
    setIsEmailButtonHidden(true);
  };
  const newEmail: MailAddress = {
    _id: "",
    mailAddressValue: theEmail,
    __v: 0,
    createdBy: "",
    user: "",
    isDeleted: false,
    isMain: false,
  };
  const save = () => {
    console.log("new email", newEmail);
    dispatch(mailAddressActions.addData(newEmail));
  };
  return (
    <div>
      <ChangeEmailLabeledInput
        type={"text"}
        placeholder={"email address"}
        value={theEmail}
        hiddenButton={isEmailButtonHidden}
        inputDisabled={undefined}
        updateEmailButtonText={""}
        email={newEmail}
      ></ChangeEmailLabeledInput>
      <ChangeEmailButton
        onClick={save}
        disabled={disabledEmail}
        saveChangesButtonHidden={disabledEmail}
      ></ChangeEmailButton>
      <ProfileNameHint
        text={emailSpanMsg}
        color={emailSpanColor}
      ></ProfileNameHint>
      <div
        className="change_email_button_label"
        hidden={isEmailButtonHidden}
      ></div>
    </div>
  );
};
