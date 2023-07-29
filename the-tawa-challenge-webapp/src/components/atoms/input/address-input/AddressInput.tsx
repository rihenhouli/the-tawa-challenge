import React, { ChangeEventHandler, FocusEventHandler, HTMLInputTypeAttribute } from "react";
import PropTypes from "prop-types";
import { FloatingLabel, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { CountriesList } from "../../../constants/Countries";


require("./AddressInput.css");


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

export const ProfileAddressInput = (props: {
  text: string| undefined;
  hidden: boolean | undefined;
  type: HTMLInputTypeAttribute | undefined;
  disabled: boolean | undefined;
  placeholder: string | undefined;
  value: string | undefined | number;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  onBlur: FocusEventHandler<HTMLInputElement> | undefined;
  onFocus: FocusEventHandler<HTMLInputElement> | undefined;
}) => (
  <div hidden={props.hidden}><label>{props.text}</label><input
    aria-required
    className="profile_address_input"
    type={props.type}
    placeholder={props.placeholder}
    defaultValue={props.value}
    onChange={props.onChange}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    disabled={props.disabled} /></div>
);

export const CountryInput = (props: {
  defaultValue: string;
  onChange: ChangeEventHandler<HTMLSelectElement> | undefined;
  text: string| undefined;
  hidden: boolean | undefined;
}) => {
  const countries = CountriesList
  return (
    <div hidden={props.hidden}><label>{props.text}</label>
        <Form.Select
          aria-label="Floating label select example"
          defaultValue={props.defaultValue}
          onChange={props.onChange}
          className="profile_address_country_input"
        >
          {countries?.map((country, i) => (
            <option key={i} value={country.code}>
              {country.name}{" "}
            </option>
          ))}
        </Form.Select>
    </div>
  );
};