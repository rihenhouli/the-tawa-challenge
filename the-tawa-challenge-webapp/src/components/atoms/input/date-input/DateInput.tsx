import React, { ChangeEventHandler, FocusEventHandler } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getUserData } from "@rihenhouli/ttcsm_user/lib/selectors";
import { Months } from "../../../constants/Month";

require("./DateInput.css");

export const MonthInput = (props: {
  onBlur: FocusEventHandler<HTMLElement> | undefined;
  onFocus: FocusEventHandler<HTMLElement> | undefined;
  defaultValue: string;
  onChange: ChangeEventHandler<HTMLSelectElement> | undefined;
}) => {
  let monthList = Months;
  return (
    <div>
      <FloatingLabel
        controlId="floatingSelectGrid"
        label="Month"
        className="Floating_labbel"
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      >
        <Form.Select
          aria-label="Floating label select example"
          value={props.defaultValue}
          onChange={props.onChange}
        >
          {monthList.map((month, i) => (
            <option key={i} value={month.month}>
              {month.month}{" "}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>
    </div>
  );
};

export const DayInput = (props: {
  onFocus: FocusEventHandler<HTMLInputElement> | undefined;

  onBlur: FocusEventHandler<HTMLInputElement> | undefined;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  defaultValue: number;
}) => {
  const user = useSelector(getUserData);
  const [birthDate, setBirthDate] = React.useState(
    user?.birthDate.toString()
  );

  return (
    <div>
      <FloatingLabel controlId="floatingSelectGrid" label="Day">
        <Form.Control
          type="number"
          placeholder="Day"
          value={props.defaultValue}
          onChange={props.onChange}
          max={31}
          min={1}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
        />
      </FloatingLabel>
    </div>
  );
};

export const YearInput = (props: {
  onFocus: FocusEventHandler<HTMLInputElement> | undefined;

  onBlur: FocusEventHandler<HTMLInputElement> | undefined;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  defaultValue: number;
}) => {
  return (
    <div>
      <FloatingLabel controlId="floatingSelectGrid" label="Year">
        <Form.Control
          type="number"
          placeholder="Year"
          defaultValue={props.defaultValue}
          onChange={props.onChange}
          max={2018}
          min={1940}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
        />
      </FloatingLabel>
    </div>
  );
};
