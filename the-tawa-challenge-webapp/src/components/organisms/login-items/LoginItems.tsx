import React, {
  ChangeEventHandler,
  FocusEventHandler,
  MouseEventHandler,
} from "react";
import { LoginButton } from "../../atoms/button/Button";
import { LoginCardTitle } from "../../atoms/title/Title";
import PropTypes from "prop-types";
import { LoginForgotPasswordAnchor } from "../../atoms/anchor/Anchor";
import { LoginInput } from "../../atoms/input/Input";
require("./LoginItems.css");

export const LoginItems = (props: {
  onFocusPwd: FocusEventHandler<HTMLInputElement> | undefined;
  onBlurPwd: FocusEventHandler<HTMLInputElement> | undefined;
  onFocusLogin: FocusEventHandler<HTMLInputElement> | undefined;
  onBlurLogin: FocusEventHandler<HTMLInputElement> | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  title: string;
  loginCards: any[];
  btn_text: string | undefined;
  login: any;
  onLoginChange: ChangeEventHandler<HTMLInputElement>;
  password: any;
  onPasswordChange: ChangeEventHandler<HTMLInputElement>;
}) => (
  <div className="login_items ">
    <LoginCardTitle text="ADMINISTRATION" />
    <LoginInput
      onFocus={props.onFocusLogin}
      onBlur={props.onBlurLogin}
      type="text"
      placeholder="username"
      value={props.login}
      onChange={props.onLoginChange}
    ></LoginInput>
    <LoginInput
      onFocus={props.onFocusPwd}
      onBlur={props.onBlurPwd}
      type="password"
      placeholder="password"
      value={props.password}
      onChange={props.onPasswordChange}
    ></LoginInput>
    <LoginButton
      onClick={props.onClick}
      text="sign in"
      disabled={undefined}
    />
    <LoginForgotPasswordAnchor
      text="forgot your password?"
      onClick={undefined}
    ></LoginForgotPasswordAnchor>
  </div>
);

LoginItems.propTypes = {
  loginCards: PropTypes.array,
  title: PropTypes.string,
  btn_text: PropTypes.string,
  onLoginChange: PropTypes.func,
  onPasswordChange: PropTypes.func,
  onClick: PropTypes.func,
};

LoginItems.defaultProps = {
  loginCards: [
    {
      label: "username",
      type: "text",
      placeholder: "username",
    },
    {
      label: "password",
      type: "password",
      placeholder: "password",
    },
  ],
};
