import User from "@rihenhouli/ttcsm_user/lib/models/User";
import React, { useEffect, useState } from "react";
import "./RegistrationStep.css";
import { ProfileContactInfoCard } from "../card/contact-info-card/ProfileContactInfoCard";
import { useDispatch, useSelector } from "react-redux";
import { phoneNumberActions } from "@rihenhouli/ttcsm_phone-number/lib/state";
import { mailAddressActions } from "@rihenhouli/ttcsm_mail-address/lib/state";
import { userPasswordActions } from "@rihenhouli/ttcsm_user-password/lib/state";
import { userActions } from "@rihenhouli/ttcsm_user/lib/state";
import { RegisterStepLabel } from "../../atoms/label/Label";
import { RegistrationPageCardItem } from "../../molecules/card-item/CardItem";
import { getUserData } from "@rihenhouli/ttcsm_user/lib/selectors";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserPassword from "@rihenhouli/ttcsm_user-password/lib/models/UserPassword";
export const RegistrationPasswordStep = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(getUserData);
  const [password, setPassword] = React.useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordFocus, setIsPasswordFocus] = useState(false);
  const [isPasswordBlur, setIsPasswordBlur] = useState(false);
  const [passwordSpanColor, setPasswordSpanColor] = useState("gray");
  const [passwordSpanText, setPasswordSpanText] = useState("");

  const [passwordValidation, setPasswordValidation] = React.useState("");
  const [isPasswordValidationValid, setIsPasswordValidationValid] =
    useState(false);
  const [isPasswordValidationFocus, setIsPasswordValidationFocus] =
    useState(false);
  const [isPasswordValidationBlur, setIsPasswordValidationBlur] =
    useState(false);
  const [passwordValidationSpanColor, setPasswordValidationSpanColor] =
    useState("gray");
  const [passwordValidationSpanText, setPasswordValidationSpanText] =
    useState("");

  const [passwordType, setPasswordType] = useState("password");
  const [saveBtnDisabled, setIsBtnDisabled] = React.useState(true);

  useEffect(() => {
    if (isPasswordValid && isPasswordValidationValid) {
      setIsBtnDisabled(false);
    }
  }, [password,passwordValidation]);

  const onPasswordChanged = (event: any) => {
    setPassword(event.target.value);
    const hasUpperCase = /[A-Z]/.test(event.target.value);
    const hasLowerCase = /[a-z]/.test(event.target.value);
    const hasNumber = /\d/.test(event.target.value);
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(event.target.value);
  
    if (event.target.value.length === 0) {
      setPasswordSpanText("Password required");
      setPasswordSpanColor("red");
    } else if (event.target.value.length < 6) {
      setPasswordSpanText("Minimum length is 6 characters");
      setPasswordSpanColor("red");
    } else if (hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar) {
      setPasswordSpanText("Valid strong password");
      setPasswordSpanColor("green");
      setIsPasswordValid(true);
    } else {
      setPasswordSpanText("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character");
      setPasswordSpanColor("red");
    }
  
    console.log(event.target.value);
  };
  const passwordFocusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsPasswordFocus(true);
    setIsPasswordBlur(false);
    setPasswordSpanText("use special charachters to make it strong!");
    setPasswordSpanColor("gray");
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
  
    if (password.length === 0) {
      setPasswordSpanText("Password required");
      setPasswordSpanColor("red");
    } else if (password.length < 6) {
      setPasswordSpanText("Minimum length is 6 characters");
      setPasswordSpanColor("red");
    } else if (hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar) {
      setPasswordSpanText("Valid strong password");
      setPasswordSpanColor("green");
      setIsPasswordValid(true);
    } else {
      setPasswordSpanText("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character");
      setPasswordSpanColor("red");
    }
  };
  const passwordBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    // Validate entered password
    setIsPasswordFocus(false);
    setIsPasswordBlur(true);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
  
    if (password.length === 0) {
      setPasswordSpanText("Password required");
      setPasswordSpanColor("red");
    } else if (password.length < 6) {
      setPasswordSpanText("Minimum length is 6 characters");
      setPasswordSpanColor("red");
    } else if (hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar) {
      setPasswordSpanText("Valid strong password");
      setPasswordSpanColor("green");
      setIsPasswordValid(true);
    } else {
      setPasswordSpanText("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character");
      setPasswordSpanColor("red");
    }
  
  };

  const onPasswordValidationChanged = (event: any) => {
    setPasswordValidation(event.target.value);
    if (event.target.value.length == 0) {
      setPasswordValidationSpanText("password validation required");
      setPasswordValidationSpanColor("red");
    } else if (password === event.target.value) {
      setPasswordValidationSpanText("Password matches");
      setPasswordValidationSpanColor("green");
      setIsPasswordValidationValid(true);
    } else {
      setPasswordValidationSpanText("Passwords do not match");
      setPasswordValidationSpanColor("red");
      setIsPasswordValidationValid(false);
    }
    console.log(event.target.value);
  };
  const passwordValidationFocusHandler = (
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    setIsPasswordValidationFocus(true);
    setIsPasswordValidationBlur(false);
    if (passwordValidation.length == 0) {
      setPasswordValidationSpanText("password validation required");
      setPasswordValidationSpanColor("red");
    } else if (password === passwordValidation) {
      setPasswordValidationSpanText("Password matches");
      setPasswordValidationSpanColor("green");
      setIsPasswordValidationValid(true);
    } else {
      setPasswordValidationSpanText("Passwords do not match");
      setPasswordValidationSpanColor("red");
      setIsPasswordValidationValid(false);
    }
  };
  const passwordValidationBlurHandler = (
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    // Validate entered passwordValidation
    setIsPasswordValidationFocus(false);
    setIsPasswordValidationBlur(true);
    if (passwordValidation.length == 0) {
      setPasswordValidationSpanText("password validation required");
      setPasswordValidationSpanColor("red");
    } else if (password === passwordValidation) {
      setPasswordValidationSpanText("Password matches");
      setPasswordValidationSpanColor("green");
      setIsPasswordValidationValid(true);
    } else {
      setPasswordValidationSpanText("Passwords do not match");
      setPasswordValidationSpanColor("red");
      setIsPasswordValidationValid(false);
    }
  };

  const onChangePasswordType = () => {
    if (passwordType === "text") {
      setPasswordType("password");
    } else {
      setPasswordType("text");
    }
  };
  const savePassword = () => {
    console.log(password);
    console.log(passwordValidation);
    const newPassword :UserPassword ={
      _id: "",
      userPasswordValue: password,
      user: user?._id || "",
      createdBy: user?.userName || "",
      isDeleted: false,
      __v: 0
    }
    dispatch(userPasswordActions.addData(newPassword))
    dispatch(userActions.listData());
    dispatch(mailAddressActions.listData());
    dispatch(phoneNumberActions.listData());
    sessionStorage.setItem("registrationStep", JSON.stringify("contact-step"));
    navigate("/register-contact");
  };
  return (
    <div className="registration_step">
      <RegisterStepLabel text="Password Validation"></RegisterStepLabel>
      <RegistrationPageCardItem
        type={passwordType}
        text={passwordSpanText}
        color={passwordSpanColor}
        onBlur={passwordBlurHandler}
        onFocus={passwordFocusHandler}
        placeholder={"Type your password here"}
        value={password}
        onChange={onPasswordChanged}
        title={"Password"}
      ></RegistrationPageCardItem>

      <RegistrationPageCardItem
        type={passwordType}
        text={passwordValidationSpanText}
        color={passwordValidationSpanColor}
        onBlur={passwordValidationBlurHandler}
        onFocus={passwordValidationFocusHandler}
        placeholder={"Repeate your password here"}
        value={passwordValidation}
        onChange={onPasswordValidationChanged}
        title={"Repeat   :"}
      ></RegistrationPageCardItem>
      <input
        className="registration_step_view_password"
        type="checkbox"
        onChange={onChangePasswordType}
      />
      <label>display password</label>
      <div className="step_button_div">
        <Button
          disabled={saveBtnDisabled}
          variant="primary"
          onClick={savePassword}
        >
          {" "}
          next{" "}
        </Button>
      </div>
    </div>
  );
};
