/* eslit-disable */
import { getUserData } from "@rihenhouli/ttcsm_user/lib/selectors";
import React, { SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { UpdatePhoneNumberButton } from "../../../atoms/button/Button";
import { ProfileLabel } from "../../../atoms/label/Label";
import { ProfileNameHint } from "../../../atoms/span/Span";
import { listPhoneNumberData } from "@rihenhouli/ttcsm_phone-number/lib/selectors";
import { ProfilePhoneNumberParagraph } from "../../../atoms/paragraph/Paragraph";
import { AddProfileNumberButtonDiv } from "../../button-div/ButtonDiv";
import { phoneNumberActions } from "@rihenhouli/ttcsm_phone-number/lib/state";
import PhoneNumber from "@rihenhouli/ttcsm_phone-number/lib/models/PhoneNumber";
import {
  AddPhoneNumberLabeledInput,
  UpdatePhoneNumberLabeledInput,
} from "../../labeled-input/number-labeled-input/phone-labeled-input/PhoneLabeledInput";
import { CountriesList } from "../../../constants/Countries";

require("./PhoneNumber.css");

export const ProfilePhoneNumber = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUserData);
  let phoneNumbers = useSelector(listPhoneNumberData);
  console.log(phoneNumbers)
  const countryList = CountriesList
  const userId = user?._id;
  const phoneNumber = phoneNumbers?.find(
    (phone) => phone.user === userId && phone.isDeleted === false
  );
  const [phoneHintText, setPhoneHintText] = useState("");
  const [phoneHintColor, setPhoneHintColor] = useState("gray");
  const theCountryPhoneCode =
    countryList?.find((country) => country.code === phoneNumber?.countryCode)
      ?.code || 0;
  const thecountry = countryList?.find(
    (country) => country.code === phoneNumber?.countryCode
  );
  const [updatePhoneInputHidden, setUpdatePhoneInputHidden] = useState(true);
  const [addPhoneInputHidden, setAddPhoneInputHidden] = useState(true);
  const [addPhoneValidatorHidden, setAddPhoneValidatorHidden] = useState(true);
  const [saveButtonHidden, setSaveButtonHidden] = useState(true);
  let oldCountry = thecountry?.name || "";
  let countryName = thecountry?.name || "";
  const [country, setCountry] = useState(countryName);
  let oldCountryCode =
    countryList?.find((c) => c.name == country)?.code || 0;
  let countryPhoneCode =
    countryList?.find((c) => c.name == country)?.code || 0;
  const [phoneCode, setCountryCode] = useState(countryPhoneCode);
  let phoneNumberLabel =
    " +" + countryPhoneCode + " " + phoneNumber?.phoneNumberValue;
  let anewphonecode =
    countryList?.find((c) => c.name == country)?.code || 0;
  let acode = anewphonecode;

  const phone = phoneNumber?.phoneNumberValue || 0;
  const [phoneNum, setPhoneNumber] = useState(phone);
  const onUpdateClick = () => {
    setUpdatePhoneInputHidden(!updatePhoneInputHidden);
    setAddPhoneInputHidden(true);
  };
  const onAddClick = () => {
    setAddPhoneInputHidden(!addPhoneInputHidden);
    setUpdatePhoneInputHidden(true);
  };
  const countryPC =
    countryList?.find((c) => c.name == "Afghanistan")
      ?.code || 0;
  const [codeLabelValue, setCodeLabelValue] = useState(countryPC);
  let id =-1
  const [countryId, setCountryId] = useState(id);
  let vn =0
  const [newPhoneNumberValue, setNewPhoneNumberValue] = useState(0);
  const [newCountryCodeValue, setNewCountryCodeValue] = useState(0);

  const changePhoneNumberHandler = (e: any) => {
    setSaveButtonHidden(false);
    setPhoneNumber(e.target.value);
  };
  const updateNumber = () => {
    if (phoneNumber) {
      console.log("phoneNum", phoneNum);
      const newPhoneNumber :PhoneNumber = {
        _id: phoneNumber._id ,
        phoneNumberValue: phoneNum,
        countryCode : phoneCode,
        __v: phoneNumber.__v,
        createdBy:phoneNumber.createdBy,
        user: phoneNumber.user,
        isDeleted: phoneNumber.isDeleted,
        isMain :phoneNumber.isMain
      };
      console.log("new PhoneNumber", newPhoneNumber);
      dispatch(
        phoneNumberActions.updateData(
          new PhoneNumber(newPhoneNumber)
        )
      );
      phoneNumberLabel = " +" + countryPhoneCode + " " + phoneNum;
      setUpdatePhoneInputHidden(true);
      window.location.reload();
    }
  };
  const changeCountryHandler = (e: any) => {
    setNewCountryCodeValue(e.target.value);
    console.log(e.target.value)
    setCountryId(id)
  };

  const changeNewPhoneNumberHandler = (e: any) => {
    setSaveButtonHidden(false);
    console.log(e.target.value)
    setNewPhoneNumberValue(e.target.value);
    console.log(newPhoneNumberValue);
  };

  const addNumber = () => {
      console.log(newPhoneNumberValue);
      console.log(newCountryCodeValue);
      const newPhoneNumber = {
        createdBy: JSON.parse(sessionStorage.getItem("userName") || ""),
        _id: "",
        phoneNumberValue: newPhoneNumberValue || 0,
        countryCode: newCountryCodeValue,
        __v: 0,
        user: "",
        isDeleted: false,
        isMain:false
      };
      console.log("new PhoneNumber", newPhoneNumber);
      dispatch(
        phoneNumberActions.addData(
          new PhoneNumber(newPhoneNumber)
        )
      );
      setAddPhoneInputHidden(true);
      setNewPhoneNumberValue(0);
      setCodeLabelValue(0);
      setCountryId(0);
      window.location.reload()
    
  };
  return (
    <div>
      <div className="change_phone_labeled_input_div">
        <ProfileLabel text={"Phone number"}></ProfileLabel>
        <div className="change_email_button_label" hidden={false}>
          <ProfilePhoneNumberParagraph
            text={" +" + countryPhoneCode + " " + phoneNum}
          ></ProfilePhoneNumberParagraph>
          <AddProfileNumberButtonDiv
            onClickAdd={onAddClick}
            onClickUpdate={onUpdateClick}
            updatePhoneNumberButtonText={"Add"}
            addPhoneNumberButtonText={"Update"}
            updateButtonHidden={false}
            addButtonHidden={false}
          ></AddProfileNumberButtonDiv>
        </div>
        <div className="change_phone_button_input">
          <div className="change_phone_inputs">
            <UpdatePhoneNumberLabeledInput
              updatePhoneInputHidden={updatePhoneInputHidden}
              updateNumber={updateNumber}
              changePhoneNumberHandler={changePhoneNumberHandler}
              defaultValue={phoneNum}
            ></UpdatePhoneNumberLabeledInput>
            <AddPhoneNumberLabeledInput
              addPhoneInputHidden={addPhoneInputHidden}
              addNumber={addNumber}
              changePhoneNumberHandler={changeNewPhoneNumberHandler}
              newPhoneNumberValue={newPhoneNumberValue}
              changeCountryHandler={changeCountryHandler}
              countryDefaultValue={"Tunisia"}
            ></AddPhoneNumberLabeledInput>
          </div>
          <UpdatePhoneNumberButton
            onClick={undefined}
            disabled={false}
            hidden={addPhoneValidatorHidden}
          ></UpdatePhoneNumberButton>
        </div>
      </div>
      <ProfileNameHint
        text={phoneHintText}
        color={phoneHintColor}
      ></ProfileNameHint>
    </div>
  );
};
