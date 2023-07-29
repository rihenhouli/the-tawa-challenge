import React, {
  ChangeEventHandler,
  FocusEventHandler,
  MouseEventHandler,
} from "react";
import PropTypes from "prop-types";
import { ProfileInput } from "../../../../atoms/input/text-input/TextInput";
import { ProfileLabel } from "../../../../atoms/label/Label";
import {
  ChangeGenderButton,
  ValidateChangesButton,
} from "../../../../atoms/button/Button";

require("./StringLabeledInput.css");

export const ChangeStringLabeledInput = (props: {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  disabled: boolean | undefined;
  label: string | undefined;
  value: string | undefined;
  placeholder: string | undefined;
  type: string | (string & {});
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  onBlur: FocusEventHandler<HTMLInputElement> | undefined;
  onFocus: FocusEventHandler<HTMLInputElement> | undefined;
  saveChangesButtonHidden: boolean | undefined;
}) => (
  <div className="change_name_labeled_input_div">
    <ProfileLabel text={props.label}></ProfileLabel>
    <div className="change_name_button_input">
      <ProfileInput
        onChange={props.onChange}
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      ></ProfileInput>
      <ValidateChangesButton
        onClick={props.onClick}
        disabled={props.disabled}
      ></ValidateChangesButton>
    </div>
    <ChangeGenderButton
      onClick={props.onClick}
      disabled={props.disabled}
      saveChangesButtonHidden={props.saveChangesButtonHidden}
    ></ChangeGenderButton>
  </div>
);
ChangeStringLabeledInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.oneOf([
    "text",
    "password",
    "email",
    "date",
    "time",
    "datetime-local",
  ]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};
