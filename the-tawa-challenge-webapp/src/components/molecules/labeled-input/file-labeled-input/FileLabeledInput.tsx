/* eslint-disable */
import { ChangeEvent, ChangeEventHandler, SetStateAction, useState } from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";

export const AddProfilePictureLabeledInput = (props: {
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  text: string;
}) => {
  return (
    <Form.Group controlId="formFileSm" className="mb-3">
      <Form.Control accept=".png, .jpg, .jpeg" type="file" size="sm" onChange={props.onChange}  />
    </Form.Group>
  );
};


export const AddSectionPictureLabeledInput = (props: {
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  text: string;
}) => {
  return (
    <Form.Group controlId="formFileSm" className="mb-3">
      <Form.Control accept=".png, .jpg, .jpeg" type="file" size="sm" onChange={props.onChange}  />
    </Form.Group>
  );
};

