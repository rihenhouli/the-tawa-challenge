import React, {
  ChangeEventHandler,
  FocusEventHandler,
  MouseEventHandler,
} from "react";
import { ProfileLabel } from "../../../atoms/label/Label";
import { ValidateChangesButton } from "../../../atoms/button/Button";
import { Form } from "react-bootstrap";
import {
  DayInput,
  MonthInput,
  YearInput,
} from "../../../atoms/input/date-input/DateInput";


require("./DateLabeledInput.css");

export const ChangeBirthdayAdmiLabeledInput = (props: {
  yearDefaultValue: number;
  dayDefaultValue: number;
  changeYearHandler: ChangeEventHandler<HTMLInputElement> | undefined;
  changeDayHandler: ChangeEventHandler<HTMLInputElement> | undefined;
  changeMonthHandler: ChangeEventHandler<HTMLSelectElement> | undefined;
  monthDefaultValue: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  disabled: boolean | undefined;
  onBlur: FocusEventHandler<HTMLInputElement> | undefined;
  onFocus: FocusEventHandler<HTMLInputElement> | undefined;
}) => {
  return (
    <div className="change_date_labeled_input_div">
      <ProfileLabel text={"Update birthday"}></ProfileLabel>
      <div className="change_date_button_input">
        <div className="change_date_inputs">
          {/* <MonthInput
            defaultValue={props.monthDefaultValue}
            onChange={props.changeMonthHandler}
          ></MonthInput> */}
          <DayInput
            onBlur={props.onBlur}
            onChange={props.changeDayHandler}
            defaultValue={props.dayDefaultValue}
            onFocus={props.onFocus}
          ></DayInput>
          <YearInput
            onBlur={props.onBlur}
            onChange={props.changeYearHandler}
            defaultValue={props.yearDefaultValue}
            onFocus={props.onFocus}
          ></YearInput>
        </div>
        <ValidateChangesButton
          onClick={props.onClick}
          disabled={props.disabled}
        ></ValidateChangesButton>
      </div>
    </div>
  );
};
