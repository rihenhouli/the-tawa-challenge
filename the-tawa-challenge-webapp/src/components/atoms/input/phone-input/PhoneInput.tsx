/* eslint-disable */
import { FocusEventHandler, ChangeEventHandler } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import React from "react";
import { E164Number, } from "libphonenumber-js/core";
import { CountriesList } from "../../../constants/Countries";


export const CountryInput = (props: {
  defaultValue: string;
  onChange: ChangeEventHandler<HTMLSelectElement> | undefined;
}) => {
  const countries = CountriesList
  return (
    <div>
      <FloatingLabel
        controlId="floatingSelectGrid"
        label="Country*"
        className="Floating_labbel "
      >
        <Form.Select
          aria-label="Floating label select example"
          defaultValue={props.defaultValue}
          onChange={props.onChange}
          className="profile_country_input"
        >
          {countries?.map((country, i) => (
            <option key={i} value={country.code}>
              {country.name}{" "}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>
    </div>
  );
};

export type PhoneValue = E164Number; 

export const PhoneNumberInput = (props: {
  onFocus: FocusEventHandler<HTMLInputElement> | undefined;
  onBlur: FocusEventHandler<HTMLInputElement> | undefined;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  defaultValue: number;
}) => {
  return (
    <div>
      <FloatingLabel controlId="floatingSelectGrid" label="Phone number*">
        <Form.Control
          type="number"
          placeholder="Phone number*"
          defaultValue={props.defaultValue}
          onChange={props.onChange}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
        />
      </FloatingLabel>
    </div>
  );
};


export const AddPhoneNumberInput = (props: {
  onFocus: FocusEventHandler<HTMLInputElement> | undefined;
  onBlur: FocusEventHandler<HTMLInputElement> | undefined;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  value: number | undefined;
}) => {
  return (
    <div>
      <FloatingLabel controlId="floatingSelectGrid" label="Phone number*">
        <Form.Control
          type="number"
          placeholder="Phone number*"
          defaultValue={props.value}
          onChange={props.onChange}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
        />
      </FloatingLabel>
    </div>
  );
};


