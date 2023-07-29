import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { LoginPageForgotPasswordCard } from "../../molecules/card/Card";
import { mailAddressActions } from "@rihenhouli/ttcsm_mail-address/lib/state";
import { userPasswordActions } from "@rihenhouli/ttcsm_user-password/lib/state";
import { getMailAddressState } from "@rihenhouli/ttcsm_mail-address/lib/selectors";
import forgot from '../../../assets/forgot_pwd.png'
require("./LoginTemplate.css");
export const ForgotPasswordTemplate = () => {
  const dispatch = useDispatch();
  const mailAdressState = useSelector(getMailAddressState);
  const navigate = useNavigate();
  const [mailAddress, setMailAddress] = React.useState("");
  const [isMailAddressValid, setIsMailAddressValid] = useState(false);
  const [isMailAddressFocus, setIsMailAddressFocus] = useState(false);
  const [isMailAddressBlur, setIsMailAddressBlur] = useState(false);
  const [mailAddressSpanColor, setMailAddressSpanColor] = useState("gray");
  const [mailAddressSpanText, setMailAddressSpanText] = useState("");
  const [messageSpanColor, setMessageSpanColor] = useState("");
  const [messageSpanText, setMessageSpanText] = useState("");
  const [isBtnDisabled, setBtnDisabled] = React.useState(true);
  const onMailAddressChanged = (event: any) => {
    setMailAddress(event.target.value);
  };
  const mailAddressFocusHandler = (
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    setIsMailAddressFocus(true);
    setIsMailAddressBlur(false);
    setMailAddressSpanText("type your e-mail adress");
    setMailAddressSpanColor("gray");
    setBtnDisabled(true);
  };
  // Handling MailAddress onBlur event
  const mailAddressBlurHandler = (
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    // Validate entered MailAddress
    setIsMailAddressFocus(false);
    setIsMailAddressBlur(true);
    if (mailAddress.length == 0) {
      setMailAddressSpanText("email required to reset your password");
      setMailAddressSpanColor("red");
      setBtnDisabled(true);
    } else if (mailAddress.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
      setMailAddressSpanText("email format seems good");
      setMailAddressSpanColor("green");
      setIsMailAddressValid(true);
      setBtnDisabled(false);
    } else {
      setMailAddressSpanText("this email format doesn't seem acceptable!");
      setMailAddressSpanColor("red");
      setBtnDisabled(true);
    }
  };
  const reset = () => {
    console.log("reset btn running");
      dispatch(userPasswordActions.resetData(mailAddress));
      setBtnDisabled(true);
      setMailAddressSpanText("");
      setMessageSpanText("reset link sent to your  mail address ");
      setMessageSpanColor("black")
      alert("reset link sent to your mail address");
      navigate('/')
  };

  return (
   <div className="manage_pwd_template">
    <img className="manage_pwd_template_image" src={forgot}/>
     <LoginPageForgotPasswordCard
      onBlurEmail={mailAddressBlurHandler}
      onFocusEmail={mailAddressFocusHandler}
      valueEmail={mailAddress}
      onChangeEmail={onMailAddressChanged}
      loginSpanText={mailAddressSpanText}
      loginSpanColor={mailAddressSpanColor}
      disabed={isBtnDisabled}
      onClick={reset}
      messageText={messageSpanText}
      messageColor={messageSpanColor}
    ></LoginPageForgotPasswordCard>
   </div>
  );
};
