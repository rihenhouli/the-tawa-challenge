import React, { ChangeEventHandler, FocusEventHandler, HTMLInputTypeAttribute } from "react";
import PropTypes from "prop-types";
import { FloatingLabel, Form } from "react-bootstrap";
import { useSelector } from "react-redux";


require("./TextInput.css");

export const ProfileInput = (props: {
  placeholder: string | undefined;
  value: string | undefined | number;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  onBlur: FocusEventHandler<HTMLInputElement> | undefined;
  onFocus: FocusEventHandler<HTMLInputElement> | undefined;
}) => (
  <input
    aria-required
    className="profile_input"
    type={"text"}
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
  />
);

ProfileInput.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf([
    "text",
    "password",
    "email",
    "date",
    "time",
    "datetime-local",
  ]),
  placeholder: PropTypes.string,
};



ProfileInput.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf([
    "text",
    "password",
    "email",
    "date",
    "time",
    "datetime-local",
  ]),
  placeholder: PropTypes.string,
};


export const ProfileEmailInput = (props: {
  disabled: boolean | undefined;
  placeholder: string | undefined;
  value: string | undefined | number;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  onBlur: FocusEventHandler<HTMLInputElement> | undefined;
  onFocus: FocusEventHandler<HTMLInputElement> | undefined;
}) => (
  <input
    aria-required
    className="profile_email_input"
    type={"text"}
    placeholder={props.placeholder}
    defaultValue={props.value}
    onChange={props.onChange}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    disabled={props.disabled}
  />
);

export const ProfileAddEmailInput = (props: {
  disabled: boolean | undefined;
  placeholder: string | undefined;
  value: string | undefined | number;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  onBlur: FocusEventHandler<HTMLInputElement> | undefined;
  onFocus: FocusEventHandler<HTMLInputElement> | undefined;
}) => (
  <input
    aria-required
    className="profile_add_email_input"
    type={"text"}
    placeholder={props.placeholder}
    defaultValue={props.value}
    onChange={props.onChange}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    disabled={props.disabled}
    
  />
);




