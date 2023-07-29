import User from "@rihenhouli/ttcsm_user/lib/models/User";
import React, { useEffect, useState } from "react";
import "./RegistrationStep.css";
import { useDispatch, useSelector } from "react-redux";
import { phoneNumberActions } from "@rihenhouli/ttcsm_phone-number/lib/state";
import { mailAddressActions } from "@rihenhouli/ttcsm_mail-address/lib/state";
import { userActions } from "@rihenhouli/ttcsm_user/lib/state";
import { RegisterStepLabel } from "../../atoms/label/Label";
import { RegistrationPageCardItem } from "../../molecules/card-item/CardItem";
import { listUserData } from "@rihenhouli/ttcsm_user/lib/selectors";
import { listMailAddressData } from "@rihenhouli/ttcsm_mail-address/lib/selectors";
import { listPhoneNumberData } from "@rihenhouli/ttcsm_phone-number/lib/selectors";
import { getUserData } from "@rihenhouli/ttcsm_user/lib/selectors";
import { Button } from "react-bootstrap";
import { RegistrationPhoneNumberLabeledInput } from "../../molecules/labeled-input/number-labeled-input/phone-labeled-input/PhoneLabeledInput";
import { CountriesList } from "../../constants/Countries";
import PhoneNumber from "@rihenhouli/ttcsm_phone-number/lib/models/PhoneNumber";
import MailAddress from "@rihenhouli/ttcsm_mail-address/lib/models/MailAddress";
import { useNavigate } from "react-router-dom";
export const RegistrationContactInfoStep = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector(listUserData);
  const userAddresses = useSelector(listMailAddressData);
  const userNumbers = useSelector(listPhoneNumberData);
  const countryList = CountriesList;
  const [mailAddress, setMailAddress] = React.useState("");
  const [isMailAddressValid, setIsMailAddressValid] = useState(false);
  const [isMailAddressFocus, setIsMailAddressFocus] = useState(false);
  const [isMailAddressBlur, setIsMailAddressBlur] = useState(false);
  const [mailAddressSpanColor, setMailAddressSpanColor] = useState("gray");
  const [mailAddressSpanText, setMailAddressSpanText] = useState("");

  const [phoneNumber, setPhoneNumber] = React.useState(0);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const [isPhoneNumberFocus, setIsPhoneNumberFocus] = useState(false);
  const [isPhoneNumberBlur, setIsPhoneNumberBlur] = useState(false);
  const [phoneNumberSpanColor, setPhoneNumberSpanColor] = useState("gray");
  const [phoneNumberSpanText, setPhoneNumberSpanText] = useState("");

  const [countryCode, setCountryCode] = React.useState(
    countryList.find((country) => country.name === "Tunisia")?.code
  );
  const [isCountryCodeValid, setIsCountryCodeValid] = useState(false);
  const [isCountryCodeFocus, setIsCountryCodeFocus] = useState(false);
  const [isCountryCodeBlur, setIsCountryCodeBlur] = useState(false);
  const [countryCodeSpanColor, setCountryCodeSpanColor] = useState("gray");
  const [countryCodeSpanText, setCountryCodeSpanText] = useState("");

  const userIdFromSession = sessionStorage.getItem("userId");
  const userId = userIdFromSession ? JSON.parse(userIdFromSession) : "";
  const user = useSelector(getUserData);


  const [saveBtnDisabled, setIsBtnDisabled] = React.useState(true);

  useEffect(() => {
    if (isMailAddressValid && isPhoneNumberValid) {
      setIsBtnDisabled(false);
    }
    console.log(countryCode);
  }, [mailAddress, phoneNumber]);

  const onMailAddressChanged = (event: any) => {
    console.log(userAddresses);
    console.log(countryCode);
    setMailAddress(event.target.value);
    const existingMailAddress = userAddresses?.find(
      (user) => user.mailAddressValue === event.target.value
    );
    if (event.target.value.length == 0) {
      setMailAddressSpanText("mail address required");
      setMailAddressSpanColor("red");
    } else if (
      event.target.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
    ) {
      setMailAddressSpanText("valid");
      setMailAddressSpanColor("green");
      setIsMailAddressValid(true);
      if (existingMailAddress) {
        setMailAddressSpanText("mail address already exists ! try another one");
        setMailAddressSpanColor("red");
      }
    } else {
      setMailAddressSpanText("this format isn't allowed");
      setMailAddressSpanColor("red");
    }
    console.log(user?.userName);
  };
  const mailAddressFocusHandler = (
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    setIsMailAddressFocus(true);
    setIsMailAddressBlur(false);
    setMailAddressSpanText(
      "email format should be like : example@example.example"
    );
    setMailAddressSpanColor("gray");
  };
  const mailAddressBlurHandler = (
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    // Validate entered mailAddress
    const existingMailAddress = userAddresses?.find(
      (user) => user.mailAddressValue === event.target.value
    );
    console.log(existingMailAddress);
    if (event.target.value.length == 0) {
      setMailAddressSpanText("mail address required");
      setMailAddressSpanColor("red");
    } else if (
      event.target.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
    ) {
      setMailAddressSpanText("valid");
      setMailAddressSpanColor("green");
      setIsMailAddressValid(true);
      if (existingMailAddress) {
        setMailAddressSpanText("mail address already exists ! try another one");
        setMailAddressSpanColor("red");
      }
    } else {
      setMailAddressSpanText("this format isn't allowed");
      setMailAddressSpanColor("red");
    }
    setIsBtnDisabled(false);
  };

  const onPhoneNumberChanged = (event: any) => {
    setPhoneNumber(event.target.value);
    const existingPhoneNumber = userNumbers?.find(
      (user) =>
        user.phoneNumberValue === event.target.value && user.isDeleted === false
    );

    if (event.target.value.length === 0) {
      setPhoneNumberSpanText("Phone number required");
      setPhoneNumberSpanColor("red");
    } else if (event.target.value.length < 3) {
      setPhoneNumberSpanText("Minimum length is 3 digits");
      setPhoneNumberSpanColor("red");
    } else if (!event.target.value.match(/^[0-9]*$/)) {
      setPhoneNumberSpanText("Only digits allowed");
      setPhoneNumberSpanColor("red");
    } else {
      setPhoneNumberSpanText("Valid");
      setPhoneNumberSpanColor("green");
      setIsPhoneNumberValid(true);

      if (existingPhoneNumber) {
        setPhoneNumberSpanText("Phone number already exists! Try another one");
        setPhoneNumberSpanColor("red");
      }
    }
    console.log(event.target.value);
  };

  const phoneNumberFocusHandler = (event: any) => {
    setIsPhoneNumberFocus(true);
    setIsPhoneNumberBlur(false);
    setPhoneNumberSpanText("Phone number format should only contain digits");
    setPhoneNumberSpanColor("gray");
  };

  const phoneNumberBlurHandler = (event: any) => {
    // Validate entered phone number
    const existingPhoneNumber = userNumbers?.find(
      (user) =>
        user.phoneNumberValue === event.target.value && user.isDeleted === false
    );

    if (event.target.value.length === 0) {
      setPhoneNumberSpanText("Phone number required");
      setPhoneNumberSpanColor("red");
    } else if (event.target.value.length < 3) {
      setPhoneNumberSpanText("Minimum length is 3 digits");
      setPhoneNumberSpanColor("red");
    } else if (!event.target.value.match(/^[0-9]*$/)) {
      setPhoneNumberSpanText("Only digits allowed");
      setPhoneNumberSpanColor("red");
    } else {
      setPhoneNumberSpanText("Valid");
      setPhoneNumberSpanColor("green");
      setIsPhoneNumberValid(true);

      if (existingPhoneNumber) {
        setPhoneNumberSpanText("Phone number already exists! Try another one");
        setPhoneNumberSpanColor("red");
      }
    }
  };
   const onCountryChanged=(e:any)=>{
    setCountryCode(e.target.value)
   }

  const finish = () => {
    console.log(phoneNumber);
    console.log(countryCode);
    console.log(user?.userName);
    const newPhoneNumber: PhoneNumber = {
      _id: "",
      phoneNumberValue: phoneNumber,
      countryCode: countryCode || 0,
      __v: 0,
      createdBy: user?.userName || "",
      user: user?._id  || "",
      isDeleted: false,
      isMain: true,
    };

    const newMailAddress: MailAddress = {
      _id: "",
      mailAddressValue: mailAddress,
      __v: 0,
      createdBy: user?.userName || "",
      user: user?._id  || "",
      isDeleted: false,
      isMain: true,
    };
    dispatch(phoneNumberActions.addData(newPhoneNumber));
    dispatch(mailAddressActions.addData(newMailAddress));
    sessionStorage.removeItem("registrationStep")
    sessionStorage.removeItem("userId")
    alert("An email oof confirmation will be sent to the mail address "+ newMailAddress.mailAddressValue + " momentarily ");
    dispatch(userActions.confirmData(user?._id  || ""));
    navigate("/");

  };
  return (
    <div className="registration_step">
      <RegisterStepLabel text="Contact Info"></RegisterStepLabel>
      <RegistrationPageCardItem
        type={"text"}
        text={mailAddressSpanText}
        color={mailAddressSpanColor}
        onBlur={mailAddressBlurHandler}
        onFocus={mailAddressFocusHandler}
        placeholder={"Type your mail address here"}
        value={mailAddress}
        onChange={onMailAddressChanged}
        title={"Email:"}
      ></RegistrationPageCardItem>

      <div className="phone_number_registration_div">
        <RegistrationPhoneNumberLabeledInput
          changePhoneNumberHandler={onPhoneNumberChanged}
          newPhoneNumberValue={phoneNumber}
          changeCountryHandler={onCountryChanged}
          countryDefaultValue={"Tunisia"}
          phoneNumberFocusHnadler={phoneNumberFocusHandler}
          phoneNumberBlurHnadler={phoneNumberBlurHandler}
        ></RegistrationPhoneNumberLabeledInput>
      </div>
      <div className="step_button_div">
        <Button disabled={saveBtnDisabled} variant="primary" onClick={finish}>
          {" "}
          Finish{" "}
        </Button>
      </div>
    </div>
  );
};
