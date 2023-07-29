import User from "@rihenhouli/ttcsm_user/lib/models/User";
import React, { useEffect, useState } from "react";
import "./RegistrationStep.css";
import { ProfileContactInfoCard } from "../card/contact-info-card/ProfileContactInfoCard";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "@rihenhouli/ttcsm_user/lib/state";
import { RegisterStepLabel } from "../../atoms/label/Label";
import { RegistrationPageCardItem } from "../../molecules/card-item/CardItem";
import { listUserData } from "@rihenhouli/ttcsm_user/lib/selectors";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export const RegistrationPersonalInfoStep = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userList = useSelector(listUserData);
  const [userName, setUserName] = React.useState("");
  const [isUserNameValid, setIsUserNameValid] = useState(false);
  const [isUserNameFocus, setIsUserNameFocus] = useState(false);
  const [isUserNameBlur, setIsUserNameBlur] = useState(false);
  const [userNameSpanColor, setUserNameSpanColor] = useState("gray");
  const [userNameSpanText, setUserNameSpanText] = useState("");

  const [firstName, setFirstName] = React.useState("");
  const [isFirstNameValid, setIsFirstNameValid] = useState(false);
  const [isFirstNameFocus, setIsFirstNameFocus] = useState(false);
  const [isFirstNameBlur, setIsFirstNameBlur] = useState(false);
  const [firstNameSpanColor, setFirstNameSpanColor] = useState("gray");
  const [firstNameSpanText, setFirstNameSpanText] = useState("");

  const [lastName, setLastName] = React.useState("");
  const [isLastNameValid, setIsLastNameValid] = useState(false);
  const [isLastNameFocus, setIsLastNameFocus] = useState(false);
  const [isLastNameBlur, setIsLastNameBlur] = useState(false);
  const [lastNameSpanColor, setLastNameSpanColor] = useState("gray");
  const [lastNameSpanText, setLastNameSpanText] = useState("");

  const [birthDate, setBirthDate] = React.useState(new Date());
  const [isBirthDateValid, setIsBirthDateValid] = useState(false);
  const [isBirthDateFocus, setIsBirthDateFocus] = useState(false);
  const [isBirthDateBlur, setIsBirthDateBlur] = useState(false);
  const [birthDateSpanColor, setBirthDateSpanColor] = useState("gray");
  const [birthDateSpanText, setBirthDateSpanText] = useState("");
  const [ipAddress, setIPAddress] = useState("");

  const [saveBtnDisabled, setIsBtnDisabled] = React.useState(true);

  useEffect(() => {
    if (isUserNameValid && isFirstNameValid && isLastNameValid) {
      setIsBtnDisabled(false);
    }
    const getLocalIPAddress = async () => {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      setIPAddress(data.ip);
    };
    getLocalIPAddress();
  }, [userName,firstName,lastName,birthDate]);

  const onUserNameChanged = (event: any) => {
    console.log(userList);
    setUserName(event.target.value);
    const existingUser = userList?.find(
      (user) => user.userName === event.target.value
    );
    console.log(existingUser);
    if (event.target.value.length == 0) {
      setUserNameSpanText("user name required");
      setUserNameSpanColor("red");
    } else if (event.target.value.length < 3) {
      setUserNameSpanText("min length 3 ");
      setUserNameSpanColor("red");
    } else if (event.target.value.match(/^[a-zA-Z0-9][a-zA-Z0-9\s]*$/)) {
      setUserNameSpanText("valid");
      setUserNameSpanColor("green");
      setIsUserNameValid(true);
      if (existingUser) {
        setUserNameSpanText("username already exists ! try another one");
        setUserNameSpanColor("red");
      }
    } else {
      setUserNameSpanText("this format isn't allowed");
      setUserNameSpanColor("red");
    }
    console.log(event.target.value);
  };
  const userNameFocusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsUserNameFocus(true);
    setIsUserNameBlur(false);
    setUserNameSpanText("only letters and numbers are acceptable");
    setUserNameSpanColor("gray");
  };
  const userNameBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    // Validate entered userName
    const existingUser = userList?.find((user) => user.userName === userName);
    setIsUserNameFocus(false);
    setIsUserNameBlur(true);
    if (userName.length == 0) {
      setUserNameSpanText("user name required");
      setUserNameSpanColor("red");
    } else if (event.target.value.length < 3) {
      setUserNameSpanText("min length 3 ");
      setUserNameSpanColor("red");
    } else if (userName.match(/^[a-zA-Z0-9][a-zA-Z0-9\s]*$/)) {
      setUserNameSpanText("valid");
      setUserNameSpanColor("green");
      setIsUserNameValid(true);
      if (existingUser) {
        setUserNameSpanText("username already exists ! try another one");
        setUserNameSpanColor("red");
      }
    } else {
      setUserNameSpanText("this format isn't allowed");
      setUserNameSpanColor("red");
    }
  };

  const onFirstNameChanged = (event: any) => {
    setFirstName(event.target.value);
    if (event.target.value.length == 0) {
      setFirstNameSpanText("first name required");
      setFirstNameSpanColor("red");
    } else if (event.target.value.length < 3) {
      setFirstNameSpanText("min length 3 ");
      setFirstNameSpanColor("red");
    } else if (event.target.value.match(/^[a-z][a-z\s]*$/i)) {
      setFirstNameSpanText("valid");
      setFirstNameSpanColor("green");
      setIsFirstNameValid(true);
    } else {
      setFirstNameSpanText("this format isn't allowed");
      setFirstNameSpanColor("red");
    }
    console.log(event.target.value);
  };
  const firstNameFocusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFirstNameFocus(true);
    setIsFirstNameBlur(false);
    setFirstNameSpanText("only letters and spaces are acceptable");
    setFirstNameSpanColor("gray");
  };
  const firstNameBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    // Validate entered firstName
    setIsFirstNameFocus(false);
    setIsFirstNameBlur(true);
    if (firstName.length == 0) {
      setFirstNameSpanText("first name required");
      setFirstNameSpanColor("red");
    } else if (event.target.value.length < 3) {
      setFirstNameSpanText("min length 3 ");
      setFirstNameSpanColor("red");
    } else if (firstName.match(/^[a-z][a-z\s]*$/i)) {
      setFirstNameSpanText("valid");
      setFirstNameSpanColor("green");
      setIsFirstNameValid(true);

    } else {
      setFirstNameSpanText("this format isn't allowed");
      setFirstNameSpanColor("red");
    }
  };

  const onLastNameChanged = (event: any) => {
    setLastName(event.target.value);
    if (event.target.value.length == 0) {
      setLastNameSpanText("last name required");
      setLastNameSpanColor("red");
    } else if (event.target.value.length < 3) {
      setLastNameSpanText("min length 3 ");
      setLastNameSpanColor("red");
    } else if (event.target.value.match(/^[a-z][a-z\s]*$/i)) {
      setLastNameSpanText("valid");
      setLastNameSpanColor("green");
      setIsLastNameValid(true);

    } else {
      setLastNameSpanText("this format isn't allowed");
      setLastNameSpanColor("red");
    }
    console.log(event.target.value);
  };
  const lastNameFocusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsLastNameFocus(true);
    setIsLastNameBlur(false);
    setLastNameSpanText("only letters and spaces are acceptable");
    setLastNameSpanColor("gray");
  };
  const lastNameBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    // Validate entered lastName
    setIsLastNameFocus(false);
    setIsLastNameBlur(true);
    if (lastName.length == 0) {
      setLastNameSpanText("last name required");
      setLastNameSpanColor("red");
    } else if (event.target.value.length < 3) {
      setLastNameSpanText("min length 3 ");
      setLastNameSpanColor("red");
    } else if (lastName.match(/^[a-z][a-z\s]*$/i)) {
      setLastNameSpanText("valid");
      setLastNameSpanColor("green");
      setIsLastNameValid(true);
  
    } else {
      setLastNameSpanText("this format isn't allowed");
      setLastNameSpanColor("red");
    }
  };
  let newUserList = useSelector(listUserData);

  const onBirthDateChanged = (event: any) => {
    setBirthDate(event.target.value);
    setIsBirthDateValid(true);
    if (!event.target.value) {
      setBirthDateSpanText("Birth date is required");
      setBirthDateSpanColor("red");
    } else {
      const currentDate = new Date();
      const selectedDate = new Date(event.target.value);
      const ageDifference = currentDate.getFullYear() - selectedDate.getFullYear();
      if (ageDifference < 18) {
        setBirthDateSpanText("You must be at least 18 years old");
        setBirthDateSpanColor("red");
        setIsBirthDateValid(false);
      } else {
        setBirthDateSpanText("Valid birth date");
        setBirthDateSpanColor("green");
        setIsBirthDateValid(true);
      }
    }
    console.log(event.target.value);
  };
  const birthDateFocusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsBirthDateFocus(true);
    setIsBirthDateBlur(false);
    setBirthDateSpanText("Type your birth date here (e.g., YYYY-MM-DD)");
    setBirthDateSpanColor("gray");
  };
  const birthDateBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsBirthDateFocus(false);
    setIsBirthDateBlur(true);
  };

  const saveUser = () => {
    console.log(firstName);
    console.log(lastName);
    console.log(ipAddress);
    const user: User = {
      _id: "",
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      birthDate: birthDate,
      userRole: "user",
      userState: "created",
      createdBy: ipAddress,
      isDeleted: false,
      __v: 0,
    };
    console.log(user);
    dispatch(userActions.addData(user));
    console.log("after add",user);
    sessionStorage.setItem("userName", JSON.stringify(userName));
    sessionStorage.setItem("registrationStep", JSON.stringify("photo-step"));
    navigate("/register-photo");
    dispatch(userActions.listData());
  };
  return (
    <div className="registration_step" >
      <RegisterStepLabel text="Personal Info"></RegisterStepLabel>
      <RegistrationPageCardItem
        type={"text"}
        text={userNameSpanText}
        color={userNameSpanColor}
        onBlur={userNameBlurHandler}
        onFocus={userNameFocusHandler}
        placeholder={"Type your user name here"}
        value={userName}
        onChange={onUserNameChanged}
        title={"Username:"}
      ></RegistrationPageCardItem>

      <RegistrationPageCardItem
        type={"text"}
        text={firstNameSpanText}
        color={firstNameSpanColor}
        onBlur={firstNameBlurHandler}
        onFocus={firstNameFocusHandler}
        placeholder={"Type your first name here"}
        value={firstName}
        onChange={onFirstNameChanged}
        title={"First name:"}
      ></RegistrationPageCardItem>

      <RegistrationPageCardItem
        type={"text"}
        text={lastNameSpanText}
        color={lastNameSpanColor}
        onBlur={lastNameBlurHandler}
        onFocus={lastNameFocusHandler}
        placeholder={"Type your last name here"}
        value={lastName}
        onChange={onLastNameChanged}
        title={"Last name :   "}
      ></RegistrationPageCardItem>
      <RegistrationPageCardItem
        type={"date"}
        text={birthDateSpanText}
        title={"Birth date:"}
        color={birthDateSpanColor}
        onBlur={birthDateBlurHandler}
        onFocus={birthDateFocusHandler}
        placeholder={""}
        value={undefined}
        onChange={onBirthDateChanged}
      ></RegistrationPageCardItem>
      <div className="step_button_div">
        <Button disabled={saveBtnDisabled} variant="primary" onClick={saveUser}>
          {" "}
          next{" "}
        </Button>
      </div>
    </div>
  );
};
