import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "@rihenhouli/ttcsm_auth/lib/state";
import { getAuthState } from "@rihenhouli/ttcsm_auth/lib/selectors";
import { useNavigate } from "react-router-dom";
import { LoginPageCard } from "../../molecules/card/Card";

require("./LoginTemplate.css");
export const LoginTemplate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, setLogin] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const authState = useSelector(getAuthState);
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
    console.log(isLoginFocus);
    setIsLoginFocus(true);
    setIsLoginBlur(false);
    setLoginSpanText("only letters and spaces are acceptable");
    setLoginSpanColor("gray");
  };

  // Handling login onBlur event
  const loginBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    // Validate entered login
    console.log(isLoginBlur);
    setIsLoginFocus(false);
    setIsLoginBlur(true);
    if (login.length == 0) {
      setLoginSpanText("field required to login");
      setLoginSpanColor("red");
    } else {
      setLoginSpanText("field format seems good");
      setLoginSpanColor("green");
      setIsLoginValid(true);
      if (isPwdValid == true) {
        setIsBtnDisabled(false);
      }
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
    } else {
      setPwdSpanText("field format seems good");
      setPwdSpanColor("green");
      setIsPwdValid(true);
      if (isLoginValid == true) {
        setIsBtnDisabled(false);
      }
    }
  };
  const showPassword = () => {
    if (inputType == "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };
  const userNameFromSession = sessionStorage.getItem("userName");
  const userName = userNameFromSession ? JSON.parse(userNameFromSession) : "";
  const onClick = () => {
    console.log("running");
    dispatch(authActions.login({ login: login, password: pwd }));
  };
  useEffect(() => {
    if (authState.userLoggedIn?.userName) {
      navigate("/dashboard");
    }

  }, [authState,userName]);
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
        forgotPassword={() => navigate(`/forgot-password`)}
        createAccount={() => {
          sessionStorage.setItem(
            "registrationStep",
            JSON.stringify("personal-step")
          );
          navigate(`/register`);
        }}
      ></LoginPageCard>
    </div>
  );
};
