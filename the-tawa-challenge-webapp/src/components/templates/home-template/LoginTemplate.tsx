import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginPageCard } from "../../molecules/card/Card";

require("./LoginTemplate.css");
export const LoginTemplate = () => {
  const navigate = useNavigate();
  const [login, setLogin] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const dispatch = useDispatch();
  const [isLoginValid, setIsLoginValid] = useState(false);
  const [isLoginFocus, setIsLoginFocus] = useState(false);
  const [isLoginBlur, setIsLoginBlur] = useState(false);
  const [loginSpanColor, setLoginSpanColor] = useState("gray");
  const [loginSpanText, setLoginSpanText] = useState("");
  const [isPwdValid, setIsPwdValid] = useState(false);
  const [isPwdFocus, setIsPwdFocus] = useState(false);
  const [isPwdBlur, setIsPwdBlur] = useState(false);
  const [pwdSpanColor, setPwdSpanColor] = useState("gray");
  const [pwdSpanText, setPwdSpanText] = useState("");
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [inputType, setInputType] = useState("password");

  const onLoginChanged = (event: any) => {
    setLogin(event.target.value);
  };
  const onPwdChanged = (event: any) => {
    setPwd(event.target.value);
  };
  const loginFocusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsLoginFocus(true);
    setIsLoginBlur(false);
    setLoginSpanText("create your login");
    setLoginSpanColor("gray");
  };

  // Handling login onBlur event
  const loginBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    // Validate entered login
    setIsLoginFocus(false);
    setIsLoginBlur(true);
    if (login.length == 0) {
      setLoginSpanText("field required to login");
      setLoginSpanColor("red");
    } else if (login.match(/^[a-z][a-z\s]*$/i)) {
      setLoginSpanText("field format seems good");
      setLoginSpanColor("green");
      setIsLoginValid(true);
      if (isPwdValid == true) {
        setIsBtnDisabled(false);
      }
    } else {
      setLoginSpanText("this format isn't allowed");
      setLoginSpanColor("red");
    }
  };

  const PwdFocusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsPwdFocus(true);
    setIsPwdBlur(false);
    setPwdSpanText("only letters and spaces are acceptable");
    setPwdSpanColor("gray");
  };

  // Handling password onBlur event
  const pwdBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    // Validate entered login
    setIsPwdFocus(false);
    setIsPwdBlur(true);
    if (pwd.length == 0) {
      setPwdSpanText("field required to login");
      setPwdSpanColor("red");
    } else if (pwd.match(/^[a-z][a-z\s]*$/i)) {
      setPwdSpanText("field format seems good");
      setPwdSpanColor("green");
      setIsPwdValid(true);
      if (isLoginValid == true) {
        setIsBtnDisabled(false);
      }
    } else {
      setPwdSpanText("this format isn't allowed");
      setPwdSpanColor("red");
    }
  };
  const showPassword = () => {
    if (inputType == "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };
  const onClick = () => {
    console.log("running");
  };
  useEffect(() => {
    if (pwd.match(/^[a-z][a-z\s]*$/i) && login.match(/^[a-z][a-z\s]*$/i)) {
      setIsBtnDisabled(false);
    }
  }, []);
  return (
    <div>
      <LoginPageCard
        loginSpanColor={loginSpanColor}
        loginSpanText={loginSpanText}
        type={inputType}
        disabed={isBtnDisabled}
        onClick={onClick}
        showPassword={showPassword}
        passwordSpanText={pwdSpanText}
        passwordSpanColor={pwdSpanColor}
        onBlurPassword={pwdBlurHandler}
        onFocusPassword={PwdFocusHandler}
        valuePassword={pwd}
        onChangePassword={onPwdChanged}
        onBlurLogin={loginBlurHandler}
        onFocusLogin={loginFocusHandler}
        valueLogin={login}
        onChangeLogin={onLoginChanged}
        forgotPassword={() => navigate(`/admin/forgot-password`)} 
        createAccount={() => navigate(`/register`)}        
      ></LoginPageCard>
    </div>
  );
};