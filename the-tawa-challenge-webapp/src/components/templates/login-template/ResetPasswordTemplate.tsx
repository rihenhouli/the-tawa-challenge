import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import {
  LoginPageForgotPasswordCard,
  LoginPageResetPasswordCard,
} from "../../molecules/card/Card";
import { userPasswordActions } from "@rihenhouli/ttcsm_user-password/lib/state";
import { userActions } from "@rihenhouli/ttcsm_user/lib/state";
import { getMailAddressState } from "@rihenhouli/ttcsm_mail-address/lib/selectors";
import { getUserData } from "@rihenhouli/ttcsm_user/lib/selectors";
import { getUserState } from "@rihenhouli/ttcsm_user/lib/selectors";
import UserPassword from "@rihenhouli/ttcsm_user-password/lib/models/UserPassword";
import reset from '../../../assets/reset_pwd.png'
import jwtDecode from "jwt-decode";

require("./LoginTemplate.css");
export type Payload = {
    userId: string;
    userName: string ;
    userRole: string ;
    userMailAddress: string;
}
export const ResetPasswordTemplate = () => {
  
  const { access_token } = useParams();
  const [payload, setPayload] = useState<Payload>({
    userId: "",
    userName: "",
    userRole: "",
    userMailAddress: "",
  });
  let decodedToken : any
  useEffect(() => {
    console.log(access_token);
    if (access_token) {
      const decodedToken = jwtDecode<Partial<Payload>>(access_token);
      console.log(decodedToken);
      if(decodedToken){
        setPayload((prevPayload) => ({
          ...prevPayload,
          userId: decodedToken.userId || "",
          userName: decodedToken.userName || "",
          userRole: decodedToken.userRole || "",
          userMailAddress: decodedToken.userMailAddress || "",
        }));
      }
    }
  }, [access_token]);
  const dispatch = useDispatch();
  const mailAdressState = useSelector(getMailAddressState);
  const accountState = useSelector(getUserState);
  const user = useSelector(getUserData);
  const navigate = useNavigate();
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
  }, [password, passwordValidation]);

  const onPasswordChanged = (event: any) => {
    setPassword(event.target.value);
    const hasUpperCase = /[A-Z]/.test(event.target.value);
    const hasLowerCase = /[a-z]/.test(event.target.value);
    const hasNumber = /\d/.test(event.target.value);
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(
      event.target.value
    );

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
      setPasswordSpanText(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      );
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
      setPasswordSpanText(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      );
      setPasswordSpanColor("red");
    }
  };
  const passwordBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
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
      setPasswordSpanText(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      );
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
  const userId = user?._id || "";
  const resetPassword = () => {
    const newPassword: UserPassword = {
      _id: "",
      userPasswordValue: password,
      user: payload.userId || "",
      createdBy: payload.userName || "",
      isDeleted: false,
      __v: 0,
    };
    console.log("new password",newPassword)
    console.log("reset password btn running");
    dispatch(userPasswordActions.addData(newPassword));
    setIsBtnDisabled(true);
   alert("You'll be redirected to log in");
    navigate("/");
  };
  return (
    <div className="manage_pwd_template">
    <img className="manage_pwd_template_image" src={reset}/>
    <LoginPageResetPasswordCard
      onBlurPassword={passwordBlurHandler}
      onFocusPassword={passwordFocusHandler}
      valuePassword={password}
      onChangePassword={onPasswordChanged}
      passwordSpanText={passwordSpanText}
      passwordSpanColor={passwordSpanColor}
      disabed={saveBtnDisabled}
      confirmSpanText={passwordValidationSpanText}
      confirmSpanColor={passwordValidationSpanColor}
      onBlurConfirm={passwordValidationBlurHandler}
      onFocusConfirm={passwordValidationFocusHandler}
      valueConfirm={passwordValidation}
      onChangeConfirm={onPasswordValidationChanged}
      onClick={resetPassword}
      type={passwordType}
      showPassword={onChangePasswordType}
    ></LoginPageResetPasswordCard>
       </div>
  );
};
