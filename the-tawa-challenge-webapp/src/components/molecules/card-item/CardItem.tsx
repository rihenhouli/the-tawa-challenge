import {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
  MouseEventHandler,
} from "react";
import {
  LoginForgotPasswordRecoveryQuestionInput,
  LoginForgotPasswordUsernameInput,
  LoginInput,
  LoginResetPasswordPasswordInput,
  RegistrationInput,
} from "../../atoms/input/Input";
import {
  LoginHint,
  LoginHintForgotPwdUsername,
  LoginHintResetPwd,
  RegistrationHint,
} from "../../atoms/span/Span";
import { LoginCardTitle, ProfileCardItemTitle } from "../../atoms/title/Title";
import {
  ProfileCardItemText,
  ProfileCardPhotoItemText,
} from "../../atoms/paragraph/Paragraph";
import { ProfileCardArrow } from "../../atoms/arrow/Arrow";
import { ProfileCardImage } from "../../atoms/image/Image";
import { RegisterationItemLabel } from "../../atoms/label/Label";

require("./CardItem.css");
export const LoginPageCardItem = (props: {
  type: HTMLInputTypeAttribute | undefined;
  text: string;
  color: string;
  onBlur: FocusEventHandler<HTMLInputElement> | undefined;
  onFocus: FocusEventHandler<HTMLInputElement> | undefined;
  placeholder: string | undefined;
  value: string | undefined;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}) => (
  <div className="login_page_card_item">
    <LoginInput
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
    <LoginHint color={props.color} text={props.text}></LoginHint>
  </div>
);

export const RegistrationPageCardItem = (props: {
  type: HTMLInputTypeAttribute | undefined;
  text: string;
  title:string;
  color: string;
  onBlur: FocusEventHandler<HTMLInputElement> | undefined;
  onFocus: FocusEventHandler<HTMLInputElement> | undefined;
  placeholder: string | undefined;
  value: string | undefined;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}) => (
  <div className="registration_page_card_item">
    <div className="registration_page_card_item_input_label" >
      <RegisterationItemLabel text={props.title}></RegisterationItemLabel>
      <RegistrationInput
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
    <RegistrationHint color={props.color} text={props.text}></RegistrationHint>
  </div>
);


export const LoginPageForgotPasswordUsernameCardItem = (props: {
  text: string;
  color: string;
  onBlur: FocusEventHandler<HTMLInputElement> | undefined;
  onFocus: FocusEventHandler<HTMLInputElement> | undefined;
  placeholder: string | undefined;
  value: string | undefined;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}) => (
  <div className="login_page_forgot_password_card_item_username">
    <LoginForgotPasswordUsernameInput
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    ></LoginForgotPasswordUsernameInput>
    <LoginHintForgotPwdUsername
      color={props.color}
      text={props.text}
    ></LoginHintForgotPwdUsername>
  </div>
);
export const LoginPageForgotPasswordRecoveryQuestionCardItem = (props: {
  text: string;
  color: string;
  onBlur: FocusEventHandler<HTMLInputElement> | undefined;
  onFocus: FocusEventHandler<HTMLInputElement> | undefined;
  placeholder: string | undefined;
  value: string | undefined;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}) => (
  <div className="login_page_forgot_password_card_item_username">
    <LoginForgotPasswordRecoveryQuestionInput
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    ></LoginForgotPasswordRecoveryQuestionInput>
    <LoginHintForgotPwdUsername
      color={props.color}
      text={props.text}
    ></LoginHintForgotPwdUsername>
  </div>
);

export const LoginPageResetPasswordCardItem = (props: {
  type: HTMLInputTypeAttribute | undefined;
  text: string;
  color: string;
  onBlur: FocusEventHandler<HTMLInputElement> | undefined;
  onFocus: FocusEventHandler<HTMLInputElement> | undefined;
  placeholder: string | undefined;
  value: string | undefined;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}) => (
  <div className="login_page_reset_password_card_item">
    <LoginResetPasswordPasswordInput
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      type={props.type}
    ></LoginResetPasswordPasswordInput>
    <LoginHintResetPwd
      color={props.color}
      text={props.text}
    ></LoginHintResetPwd>
  </div>
);

export const ProfileCardItem = (props: {
  title: string;
  text: string;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}) => (
  <div className="profile_card_item" onClick={props.onClick}>
    <ProfileCardItemTitle text={props.title}></ProfileCardItemTitle>
    <ProfileCardItemText text={props.text}></ProfileCardItemText>
    <ProfileCardArrow></ProfileCardArrow>
  </div>
);

export const ProfileCardAddItem = (props: {
  title: string;
  text: string;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
  hidden: boolean;
}) => (
  <div
    className="profile_card_item"
    onClick={props.onClick}
    hidden={props.hidden}
  >
    <ProfileCardItemTitle text={props.title}></ProfileCardItemTitle>
    <ProfileCardItemText text={props.text}></ProfileCardItemText>
    <ProfileCardArrow></ProfileCardArrow>
  </div>
);

export const ProfileCardDoubleItem = (props: {
  title: string;
  text: string;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}) => (
  <div className="profile_card_item" onClick={props.onClick}>
    <ProfileCardItemTitle text={props.title}></ProfileCardItemTitle>
    <ProfileCardItemText text={props.text}></ProfileCardItemText>
    <ProfileCardArrow></ProfileCardArrow>
  </div>
);

export const ProfileCardImageItem = (props: {
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
  title: string;
  text: string;
  src: string;
}) => (
  <div className="profile_card_image_item" onClick={props.onClick}>
    <ProfileCardItemTitle text={props.title}></ProfileCardItemTitle>
    <ProfileCardPhotoItemText text={props.text}></ProfileCardPhotoItemText>
    <ProfileCardImage src={props.src}></ProfileCardImage>
  </div>
);
