import React, {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
  MouseEventHandler,
} from "react";
import PropTypes from "prop-types";
import {
  AccountItemCardTitle,
  LoginCardTitle,
  LoginCardTitleResetPassword,
} from "../../atoms/title/Title";
import login_page from "../../../assets/online_article.png";
import {
  AccountItemCardImage,
  LoginCardImage,
  SectionCardImage,
} from "../../atoms/image/Image";
import { Link, To } from "react-router-dom";
import { LoginResetPasswordShowPassword } from "../../atoms/input/Input";
import {
  LoginPageCardItem,
  LoginPageForgotPasswordUsernameCardItem,
  LoginPageResetPasswordCardItem,
} from "../card-item/CardItem";
import {
  LoginButton,
  LoginResetPasswordButton,
} from "../../atoms/button/Button";
import { LoginMessage } from "../../atoms/span/Span";
import {
  LoginCreateAccountAnchor,
  LoginForgotPasswordAnchor,
} from "../../atoms/anchor/Anchor";
import { Badge, Image } from "react-bootstrap";

import user_img from "../../../assets/profile_img.png";
import { Icon } from "@iconify/react";

require("./Card.css");

export const LoginPageCard = (props: {
  type: HTMLInputTypeAttribute | undefined;
  disabed: boolean | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  showPassword: MouseEventHandler<HTMLInputElement> | undefined;
  passwordSpanText: string;
  passwordSpanColor: string;
  onBlurPassword: FocusEventHandler<HTMLInputElement> | undefined;
  onFocusPassword: FocusEventHandler<HTMLInputElement> | undefined;
  valuePassword: string | undefined;
  onChangePassword: ChangeEventHandler<HTMLInputElement> | undefined;
  loginSpanText: string;
  loginSpanColor: string;
  onBlurLogin: FocusEventHandler<HTMLInputElement> | undefined;
  onFocusLogin: FocusEventHandler<HTMLInputElement> | undefined;
  valueLogin: string | undefined;
  onChangeLogin: ChangeEventHandler<HTMLInputElement> | undefined;
  forgotPassword: MouseEventHandler<HTMLAnchorElement> | undefined;
  createAccount: MouseEventHandler<HTMLAnchorElement> | undefined;
}) => (
  <div className="wrap_login_card">
    <LoginCardImage src={login_page} alt="login portal"></LoginCardImage>
    <div className="login_items ">
      <LoginCardTitle text="SIGN IN" />
      <LoginPageCardItem
        onBlur={props.onBlurLogin}
        onFocus={props.onFocusLogin}
        placeholder={"username or email"}
        value={props.valueLogin}
        onChange={props.onChangeLogin}
        text={props.loginSpanText}
        color={props.loginSpanColor}
        type={"text"}
      ></LoginPageCardItem>
      <LoginPageCardItem
        onBlur={props.onBlurPassword}
        onFocus={props.onFocusPassword}
        placeholder={"password"}
        value={props.valuePassword}
        onChange={props.onChangePassword}
        text={props.passwordSpanText}
        color={props.passwordSpanColor}
        type={props.type}
      ></LoginPageCardItem>
      <LoginResetPasswordShowPassword
        onClick={props.showPassword}
      ></LoginResetPasswordShowPassword>
      <LoginButton
        disabled={props.disabed}
        onClick={props.onClick}
        text={"sign in"}
      ></LoginButton>
      <LoginForgotPasswordAnchor
        text="forgot your password?"
        onClick={props.forgotPassword}
      ></LoginForgotPasswordAnchor>
      <LoginCreateAccountAnchor
        text="create an account"
        onClick={props.createAccount}
      ></LoginCreateAccountAnchor>
    </div>
  </div>
);

export const LoginPageForgotPasswordCard = (props: {
  disabed: boolean | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  loginSpanText: string;
  loginSpanColor: string;
  messageText: string;
  messageColor: string;
  onBlurEmail: FocusEventHandler<HTMLInputElement> | undefined;
  onFocusEmail: FocusEventHandler<HTMLInputElement> | undefined;
  valueEmail: string | undefined;
  onChangeEmail: ChangeEventHandler<HTMLInputElement> | undefined;
}) => (
  <div className="login_page_forgot_password_card">
    <LoginCardTitleResetPassword text={"Forgot password?"} />
    <LoginPageForgotPasswordUsernameCardItem
      onBlur={props.onBlurEmail}
      onFocus={props.onFocusEmail}
      placeholder={"email"}
      value={props.valueEmail}
      onChange={props.onChangeEmail}
      text={props.loginSpanText}
      color={props.loginSpanColor}
    ></LoginPageForgotPasswordUsernameCardItem>
    <LoginResetPasswordButton
      disabled={props.disabed}
      onClick={props.onClick}
      text={"reset"}
    ></LoginResetPasswordButton>
    <LoginMessage
      color={props.messageColor}
      text={props.messageText}
    ></LoginMessage>
  </div>
);
LoginPageCard.propTypes = {
  title: PropTypes.string,
};

export const LoginPageResetPasswordCard = (props: {
  type: HTMLInputTypeAttribute | undefined;
  disabed: boolean | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  showPassword: MouseEventHandler<HTMLInputElement> | undefined;
  passwordSpanText: string;
  passwordSpanColor: string;
  onBlurPassword: FocusEventHandler<HTMLInputElement> | undefined;
  onFocusPassword: FocusEventHandler<HTMLInputElement> | undefined;
  valuePassword: string | undefined;
  onChangePassword: ChangeEventHandler<HTMLInputElement> | undefined;
  confirmSpanText: string;
  confirmSpanColor: string;
  onBlurConfirm: FocusEventHandler<HTMLInputElement> | undefined;
  onFocusConfirm: FocusEventHandler<HTMLInputElement> | undefined;
  valueConfirm: string | undefined;
  onChangeConfirm: ChangeEventHandler<HTMLInputElement> | undefined;
}) => (
  <div className="login_page_reset_password_card">
    <LoginCardTitleResetPassword text={"Reset password"} />
    <LoginPageResetPasswordCardItem
      onBlur={props.onBlurPassword}
      onFocus={props.onFocusPassword}
      placeholder={"password"}
      value={props.valuePassword}
      onChange={props.onChangePassword}
      text={props.passwordSpanText}
      color={props.passwordSpanColor}
      type={props.type}
    ></LoginPageResetPasswordCardItem>
    <LoginPageResetPasswordCardItem
      onBlur={props.onBlurConfirm}
      onFocus={props.onFocusConfirm}
      placeholder={"confirm password"}
      value={props.valueConfirm}
      onChange={props.onChangeConfirm}
      text={props.confirmSpanText}
      color={props.confirmSpanColor}
      type={props.type}
    ></LoginPageResetPasswordCardItem>
    <LoginResetPasswordShowPassword
      onClick={props.showPassword}
    ></LoginResetPasswordShowPassword>
    <LoginResetPasswordButton
      disabled={props.disabed}
      onClick={props.onClick}
      text={"reset password"}
    ></LoginResetPasswordButton>
  </div>
);
LoginPageCard.propTypes = {
  title: PropTypes.string,
};

export const AccountItemFirstCard = (props: {
  onClick: MouseEventHandler<HTMLImageElement> | undefined;
  src: string | undefined;
  alt: string | undefined;
  title: string;
  link: string;
}) => (
  <div className="account_nav_item_first_card" onClick={props.onClick}>
    <Link className="account_nav_item_first_card_link" to={props.link}>
      <AccountItemCardImage src={props.src} alt={props.alt} />
      <AccountItemCardTitle text={props.title} />
    </Link>
  </div>
);
AccountItemFirstCard.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  link: PropTypes.string,
};

export const AccountItemSecondCard = (props: {
  onClick: MouseEventHandler<HTMLImageElement> | undefined;
  src: string | undefined;
  alt: string | undefined;
  title: string;
  link: string;
}) => (
  <div className="account_nav_item_second_card" onClick={props.onClick}>
    <Link className="account_nav_item_second_card_link" to={props.link}>
      <AccountItemCardImage src={props.src} alt={props.alt} />
      <AccountItemCardTitle text={props.title} />
    </Link>
  </div>
);
AccountItemSecondCard.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  link: PropTypes.string,
};

export const ArticleCard = (props: {
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
  user: string | undefined;
  creationDate: string;
  category: string | undefined;
  categoryBg: string | undefined;
  witdh: string | number | undefined;
  src: string | undefined;
  path: To;
  titre: string;
  userImage: string | undefined;
}) => {
  return (
    <div className="article_card_div" onClick={props.onClick}>
      <Link to={props.path} className="article_card_link">
        <Image src={props.src} width={props.witdh} />
        <div className="article_card_main">
          <Badge className="article_badge" pill bg={props.categoryBg}>
            {props.category}
          </Badge>
          <label className="article_card_label">{props.titre}</label>
          <div className="article_creation_div">
            <img className="article_creation_img" src={props.userImage} />
            <div className="article_creation_data">
              <label className="article_creation_label">{props.user}</label>
              <label>{props.creationDate}</label>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export const SectionCard = (props: {
  isDeleted: boolean;
  onClickUpdate: MouseEventHandler<HTMLButtonElement> | undefined;
  onClickDelete: MouseEventHandler<HTMLButtonElement> | undefined;
  onClickRestore: MouseEventHandler<HTMLButtonElement> | undefined;
  onClick: MouseEventHandler<HTMLImageElement> | undefined;
  alt: string | undefined;
  title: string | undefined;
  content: string | undefined;
  src: string | undefined;
}) => {
  return (
    <div className="section_card_div">
      <div className="section_card">
        <div className="section_card_text">
          <h1> {props.title}</h1>
          <h2>{props.content}</h2>
        </div>
        <SectionCardImage
          onClick={props.onClick}
          src={props.src}
          alt={props.alt}
        ></SectionCardImage>
      </div>
      <div>
        <div className="buttonTab">
          <button
            type="submit"
            className="details_btn"
            onClick={props.onClickUpdate}
          >
            <Icon icon="bx:detail" className="details" width={25} />
          </button>
          {props.isDeleted === false && (
            <button
              type="submit"
              className="delete_btn"
              onClick={props.onClickDelete}
            >
              <Icon
                icon="mingcute:delete-2-line"
                className="delete"
                width={25}
              />
            </button>
          )}
          {props.isDeleted === true && (
            <button
              type="submit"
              className="restore_btn"
              onClick={props.onClickRestore}
            >
              <Icon icon="system-uicons:reset" className="restore" width={25} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export const PublicSectionCard = (props: {
  onClick: MouseEventHandler<HTMLImageElement> | undefined;
  alt: string | undefined;
  title: string | undefined;
  content: string | undefined;
  src: string | undefined;
}) => {
  return (
    <div className="section_card_div">
      <div className="section_card">
        <div className="section_card_text">
          <h1> {props.title}</h1>
          <h2>{props.content}</h2>
        </div>
        <SectionCardImage
          onClick={props.onClick}
          src={props.src}
          alt={props.alt}
        ></SectionCardImage>
      </div>
    </div>
  );
};
