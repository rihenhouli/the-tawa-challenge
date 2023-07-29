import React, { useState } from "react";
import { ProfileEmailInput } from "../../../../../atoms/input/text-input/TextInput";
import {
  AddEmailButton,
  DeleteEmailButton,
  SetEmailButton,
  UpdateEmailButton,
  ValidateChangesButton,
} from "../../../../../atoms/button/Button";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { mailAddressActions } from "@rihenhouli/ttcsm_mail-address/lib/state";
import {
  getMailAddressData,
  listMailAddressData,
} from "@rihenhouli/ttcsm_mail-address/lib/selectors";
import MailAddress from "@rihenhouli/ttcsm_mail-address/lib/models/MailAddress";

import { ProfileNameHint } from "../../../../../atoms/span/Span";

require("./ChangeEmailLabeledInput.css");

export const ChangeEmailLabeledInput = (props: {
  hiddenButton: boolean;
  inputDisabled: boolean | undefined;
  value: string | undefined;
  placeholder: string | undefined;
  type: string | (string & {});
  email: MailAddress;

  updateEmailButtonText: string;
}) => {
  const dispatch = useDispatch();
  const [isExistingInputDisabled, setIsExistingInputDisabled] = useState(true);
  const [email, setEmail] = React.useState("");
  const [disabledEmail, setDisabledEmail] = React.useState(true);
  const [isEmailSame, setIsEmailSame] = React.useState(true);
  const [isEmailValid, setIsEmailValid] = React.useState(false);
  const [isEmailFocus, setIsEmailFocus] = React.useState(false);
  const [isEmailBlur, setIsEmailBlur] = React.useState(false);
  const [emailSpanColor, setLastSpanColor] = useState("gray");
  const [emailSpanMsg, setLastSpanMsg] = useState("");
  const [isEmailButtonHidden, setIsEmailButtonHidden] = React.useState(true);
  const [isDeleteButtonHidden, setIsDeleteButtonHidden] = React.useState(false);
  const [isUpdateButtonHidden, setIsUpdateButtonHidden] = React.useState(false);
  const [theEmail, setTheEmail] = React.useState<string>(props.value || "");
  const [saveBtnDisabled, setIsBtnDisabled] = React.useState(true);
  const [saveBtnHidden, setIsBtnHidden] = React.useState(true);

  const [isEmailInputHidden, setIsEmailInputHidden] = React.useState(false);
  const userAddresses = useSelector(listMailAddressData);
  const [theemail, setMailAddress] = React.useState(
    props.email.mailAddressValue
  );
  const [isMailAddressValid, setIsMailAddressValid] = useState(false);
  const [isMailAddressFocus, setIsMailAddressFocus] = useState(false);
  const [isMailAddressBlur, setIsMailAddressBlur] = useState(false);
  const [mailAddressSpanColor, setMailAddressSpanColor] = useState("gray");
  const [mailAddressSpanText, setMailAddressSpanText] = useState("");
  const onMailAddressChanged = (event: any) => {
    console.log(userAddresses);
    setMailAddress(event.target.value);
    const existingMailAddress = userAddresses?.find(
      (user) => user.mailAddressValue === event.target.value
    );
    if (event.target.value.length == 0) {
      setMailAddressSpanText("mail address required");
      setMailAddressSpanColor("red");
    } else if (
      event.target.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
    ) {
      setMailAddressSpanText("valid");
      setMailAddressSpanColor("green");
      setIsMailAddressValid(true);
      setIsBtnHidden(false)
      if (existingMailAddress) {
        setMailAddressSpanText("mail address already exists ! try another one");
        setMailAddressSpanColor("red");
      }
    } else {
      setMailAddressSpanText("this format isn't allowed");
      setMailAddressSpanColor("red");
    }
  };
  const mailAddressFocusHandler = (
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    setIsMailAddressFocus(true);
    setIsMailAddressBlur(false);
    setMailAddressSpanText(
      "email format should be like : example@example.example"
    );
    setMailAddressSpanColor("gray");
  };
  const mailAddressBlurHandler = (
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    // Validate entered mailAddress
    const existingMailAddress = userAddresses?.find(
      (user) => user.mailAddressValue === event.target.value
    );
    console.log(existingMailAddress);
    if (event.target.value.length == 0) {
      setMailAddressSpanText("mail address required");
      setMailAddressSpanColor("red");
    } else if (
      event.target.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
    ) {
      setMailAddressSpanText("valid");
      setMailAddressSpanColor("green");
      setIsMailAddressValid(true);
      setIsBtnHidden(false)
      if (existingMailAddress) {
        setMailAddressSpanText("mail address already exists ! try another one");
        setMailAddressSpanColor("red");
      }
    } else {
      setMailAddressSpanText("this format isn't allowed");
      setMailAddressSpanColor("red");
    }
    setIsBtnDisabled(false);
  };

  const mailAddress = useSelector(getMailAddressData);
  const onClickUpdateIcon = (e: any) => {
    dispatch(mailAddressActions.getDataByValue(props.value || ""));
    setIsExistingInputDisabled(false);
    console.log("clicked", mailAddress);
    setTheEmail(mailAddress?.mailAddressValue || "");
    console.log("clicked theEmail", theEmail);
    setLastSpanMsg("you may change your professional email");
    setIsDeleteButtonHidden(true);
  };

  const save = () => {
    const newEmail: MailAddress = {
      _id: mailAddress?._id || "",
      mailAddressValue: theEmail,
      __v: mailAddress?.__v || 0,
      createdBy: mailAddress?.createdBy || "",
      user: mailAddress?.user || "",
      isDeleted: mailAddress?.isDeleted || false,
      isMain: mailAddress?.isMain || false,
    };
    console.log("new email", newEmail);
    console.log("onchange", theEmail);
    setDisabledEmail(true);
    setLastSpanMsg("");
    setIsUpdateButtonHidden(false);
    setIsDeleteButtonHidden(false);
    setIsBtnHidden(true);
  };
  const deleteHandler = () => {
    dispatch(mailAddressActions.deleteData(props.email._id));
    console.log("web app  mail address id", props.email._id);
    dispatch(mailAddressActions.listDataByUser(props.email.user));
    setIsEmailInputHidden(true);
  };
  return (
    <div className="change_email_labeled_input_div">
      {/* <ProfileLabel text={props.label}></ProfileLabel> */}
      <div className="change_email_button_input" hidden={isEmailInputHidden}>
        <ProfileEmailInput
          value={theEmail}
          disabled={isExistingInputDisabled}
          onChange={(e) => {
            setEmail(e.target.value);
            console.log("onchange", theEmail);
          }}
          placeholder={"email address"}
          onBlur={mailAddressBlurHandler}
          onFocus={mailAddressFocusHandler}
        ></ProfileEmailInput>
        <ValidateChangesButton
          onClick={save}
          disabled={saveBtnDisabled}
        ></ValidateChangesButton>
        <UpdateEmailButton
          onClick={onClickUpdateIcon}
          hidden={isUpdateButtonHidden}
        ></UpdateEmailButton>
        <DeleteEmailButton
          onClick={deleteHandler}
          hidden={isDeleteButtonHidden}
        ></DeleteEmailButton>
      </div>
      <ProfileNameHint
        text={mailAddressSpanText}
        color={mailAddressSpanColor}
      ></ProfileNameHint>
      <SetEmailButton
        onClick={save}
        hidden={saveBtnHidden}
        text={"save"}
      ></SetEmailButton>
    </div>
  );
};
