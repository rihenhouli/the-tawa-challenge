/* eslit-disable */
import User from "@rihenhouli/ttcsm_user/lib/models/User";
import { getUserData } from "@rihenhouli/ttcsm_user/lib/selectors";
import { userActions } from "@rihenhouli/ttcsm_user/lib/state";
import React, { SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  DayInput,
  MonthInput,
  YearInput,
} from "../../../atoms/input/date-input/DateInput";
import { ProfileLabel } from "../../../atoms/label/Label";
import { ProfileNameHint } from "../../../atoms/span/Span";
import {
  MonthNameGenerator,
  MonthNumberGenerator,
} from "../../../operations/Month";
import {
  ChangeGenderButton,
  ValidateChangesButton,
} from "../../../atoms/button/Button";
require("./Birthdate.css");

export const Birthdate = () => {
  const user = useSelector(getUserData);
  const dispatch = useDispatch();
  const [birthDate, setBirthDate] = React.useState(user?.birthDate.toString());
  const [disabledBirthdate, setDisabledBirthdate] = React.useState(true);
  const [isBirthdateSame, setIsBirthdateSame] = React.useState(true);
  const [isBirthdateFocus, setIsBirthdateFocus] = React.useState(false);
  const [isBirthdateBlur, setIsBirthdateBlur] = React.useState(false);
  const [birthdateSpanColor, setBirthdateSpanColor] = useState("gray");
  const [birthdateSpanMsg, setBirthdateSpanMsg] = useState("");
  let oldMonth = MonthNameGenerator(birthDate?.substring(5, 7) + "");
  let monthName = MonthNameGenerator(birthDate?.substring(5, 7) + "");
  const [month, setMonth] = useState(monthName);
  let monthNumber = MonthNumberGenerator(oldMonth);
  const [monthNum, setMonthNumber] = useState(0);

  const changeMonthHandler = (e: any) => {
    setMonth(e.target.value);
    setMonthNumber(MonthNumberGenerator(month));
    setDisabledBirthdate(false);
    setIsBirthdateSame(false);
    setBirthdateSpanMsg("click the button to save the changes you made!");
    setBirthdateSpanColor("green");
  };
  let oldDay = parseInt(birthDate?.substring(8, 10) + "");
  let day = parseInt(birthDate?.substring(8, 10) + "");
  const [aday, setDay] = useState(day);

  const changeDayHandler = (e: any) => {
    e.preventDefault();
    setDay(parseInt(e.target.value));
    setDisabledBirthdate(false);
    setIsBirthdateSame(false);
    setBirthdateSpanMsg("click the button to save the changes you made!");
    setBirthdateSpanColor("green");
  };
  let oldYear = parseInt(birthDate?.substring(0, 4) + "");
  let year = parseInt(birthDate?.substring(0, 4) + "");
  const [ayear, setYear] = useState(year);

  const changeYearHandler = (e: any) => {
    setYear(parseInt(e.target.value));
    setDisabledBirthdate(false);
    setIsBirthdateSame(false);
    setBirthdateSpanMsg("click the button to save the changes you made!");
    setBirthdateSpanColor("green");
  };
  const birthdateFocusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    if (year === oldYear && aday === oldDay && monthName === oldMonth) {
      setIsBirthdateFocus(true);
      setIsBirthdateBlur(false);
      setBirthdateSpanMsg("you may change your birthdate");
      setBirthdateSpanColor("gray");
    } else {
      setIsBirthdateFocus(true);
      setIsBirthdateBlur(false);
      setBirthdateSpanMsg("only numbers allowed");
      setBirthdateSpanColor("gray");
    }
  };
  const birthdateBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsBirthdateFocus(false);
    setIsBirthdateBlur(true);
    setDisabledBirthdate(false);
    console.log(monthName, oldMonth);

    // Validate entered Birthdate
    if (!year.toString().trim().length || !day.toString().trim().length) {
      setDisabledBirthdate(false);
      setIsBirthdateSame(true);
      setBirthdateSpanMsg("full date is required");
      setBirthdateSpanColor("red");
    } else if (
      (year != oldYear && year.toString().length != 0) ||
      (day != oldDay && day.toString().length != 0) ||
      monthName != oldMonth
    ) {
      setDisabledBirthdate(false);
      setIsBirthdateSame(false);
      setBirthdateSpanMsg("click the button to save the changes you made!");
      setBirthdateSpanColor("green");
    } else if (ayear === oldYear && aday === oldDay && month === oldMonth) {
      setDisabledBirthdate(true);
      setIsBirthdateSame(true);
      setBirthdateSpanMsg("");
      setBirthdateSpanColor("black");
    }
  };
  let date = new Date(ayear, MonthNumberGenerator(month) - 1, aday, 0, 0, 0, 0);

  const save = () => {
    console.log("year", ayear);
    console.log("month", month);
    console.log("month number", MonthNumberGenerator(month));
    console.log("aday", aday);
    console.log("the prev birthdate", birthDate);
    console.log("the new birthdate", date);
    console.log(monthName, oldMonth);

    if (user) {
      const newUser: any = {
        firstName: user.firstName,
        lastName: user.lastName,
        birthDate: new Date(
          ayear,
          MonthNumberGenerator(month) - 1,
          aday + 1,
          0,
          0,
          0,
          0
        ),
        userName: user.userName,
        userRole: user.userRole,
        _id: user._id,
        __v: user.__v,
        userState: user.userState,
        createdBy: user.createdBy,
        isDeleted: user.isDeleted,
      };
      dispatch(userActions.updateData(new User(newUser)));
      setBirthdateSpanMsg("birthdate have been saved successfully!");
      setBirthdateSpanColor("green");
      setDisabledBirthdate(true);
      window.location.reload();
    }
  };
  return (
    <div>
      <div className="change_date_labeled_input_div">
        <ProfileLabel text={"Update birthday"}></ProfileLabel>
        <div className="change_date_button_input">
          <div className="change_date_inputs">
            <MonthInput
              defaultValue={month}
              onChange={changeMonthHandler}
              onBlur={birthdateBlurHandler}
              onFocus={birthdateFocusHandler}
            ></MonthInput>
            <DayInput
              onBlur={birthdateBlurHandler}
              onChange={changeDayHandler}
              defaultValue={aday}
              onFocus={birthdateFocusHandler}
            ></DayInput>
            <YearInput
              onBlur={birthdateBlurHandler}
              onChange={changeYearHandler}
              defaultValue={ayear}
              onFocus={birthdateFocusHandler}
            ></YearInput>
          </div>
          <ValidateChangesButton
            onClick={save}
            disabled={disabledBirthdate}
          ></ValidateChangesButton>
        </div>
        <ChangeGenderButton
          onClick={save}
          disabled={disabledBirthdate}
          saveChangesButtonHidden={disabledBirthdate}
        ></ChangeGenderButton>
      </div>
      <ProfileNameHint
        text={birthdateSpanMsg}
        color={birthdateSpanColor}
      ></ProfileNameHint>
    </div>
  );
};
