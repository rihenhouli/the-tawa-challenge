import { ChangeEventHandler, FocusEventHandler, MouseEventHandler, useState } from "react";
import { ChangeGenderButton } from "../../../../atoms/button/Button";
import {
  AddPhoneNumberInput,
  CountryInput,
  PhoneNumberInput,
} from "../../../../atoms/input/phone-input/PhoneInput";
import { getUserData } from "@rihenhouli/ttcsm_user/lib/selectors";
import { listPhoneNumberData } from "@rihenhouli/ttcsm_phone-number/lib/selectors";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { PhoneCodeLabel } from "../../../../atoms/label/Label";
export const UpdatePhoneNumberLabeledInput = (props: {
  updatePhoneInputHidden: boolean;
  updateNumber: MouseEventHandler<HTMLButtonElement> | undefined;
  changePhoneNumberHandler: ChangeEventHandler<HTMLInputElement> | undefined;
  defaultValue: number;
}) => {
  const dispatch = useDispatch();
  const user = useSelector(getUserData);
  const _id = user?._id;
  const phoneNumbers = useSelector(listPhoneNumberData);
  const phoneNumber = phoneNumbers?.find(
    (phone) => phone._id === _id && phone.isDeleted === false
  );
  let phone = phoneNumber?.phoneNumberValue || 0;
  const [phoneNum, setPhoneNumber] = useState(phone);
  const [saveButtonHidden, setSaveButtonHidden] = useState(true);
  const changePhoneNumberBlurHandler = () => {
    if (phone === phoneNumber?.phoneNumberValue) {
      setSaveButtonHidden(false);
    }
  };
  const changePhoneNumberFocusHandler = () => {
    setSaveButtonHidden(false);
  };
  return (
    <div
      className="phone_number_input"
      hidden={props.updatePhoneInputHidden}
    >
      <PhoneNumberInput
        onBlur={changePhoneNumberBlurHandler}
        onChange={props.changePhoneNumberHandler}
        defaultValue={props.defaultValue}
        onFocus={changePhoneNumberFocusHandler}
      ></PhoneNumberInput>
      <ChangeGenderButton
        onClick={props.updateNumber}
        disabled={saveButtonHidden}
        saveChangesButtonHidden={saveButtonHidden}
      ></ChangeGenderButton>
    </div>
  );
};

export const AddPhoneNumberLabeledInput = (props: {
  addPhoneInputHidden: boolean;
  addNumber: MouseEventHandler<HTMLButtonElement> | undefined;
  changePhoneNumberHandler: ChangeEventHandler<HTMLInputElement> | undefined;
  changeCountryHandler: ChangeEventHandler<HTMLSelectElement> | undefined;
  countryDefaultValue: string;
  newPhoneNumberValue : number | undefined
}) => {
  const dispatch = useDispatch();
  const [saveButtonHidden, setSaveButtonHidden] = useState(true);

  const changePhoneNumberBlurHandler = () => {
    setSaveButtonHidden(false);
  };
  const changePhoneNumberFocusHandler = () => {
    setSaveButtonHidden(false);
  };
  return (
    <div
      className="change_phone_inputs"
      hidden={props.addPhoneInputHidden}
    >
      <CountryInput
        defaultValue={props.countryDefaultValue}
        onChange={props.changeCountryHandler}
      ></CountryInput>
      <div className="phone_number_input">
        <AddPhoneNumberInput
          onBlur={changePhoneNumberBlurHandler}
          onChange={props.changePhoneNumberHandler}
          value={props.newPhoneNumberValue}
          onFocus={changePhoneNumberFocusHandler}
        ></AddPhoneNumberInput>
      </div>
      <ChangeGenderButton
        onClick={props.addNumber}
        disabled={saveButtonHidden}
        saveChangesButtonHidden={saveButtonHidden}
      ></ChangeGenderButton>
    </div>
  );
};


export const RegistrationPhoneNumberLabeledInput = (props: {
  phoneNumberFocusHnadler: FocusEventHandler<HTMLInputElement> | undefined;
  phoneNumberBlurHnadler: FocusEventHandler<HTMLInputElement> | undefined;
  changePhoneNumberHandler: ChangeEventHandler<HTMLInputElement> | undefined;
  changeCountryHandler: ChangeEventHandler<HTMLSelectElement> | undefined;
  countryDefaultValue: string;
  newPhoneNumberValue : number | undefined
}) => {
  const dispatch = useDispatch();
  const [saveButtonHidden, setSaveButtonHidden] = useState(true);

  return (
    <div
      className="change_phone_inputs"
    >
      <CountryInput
        defaultValue={props.countryDefaultValue}
        onChange={props.changeCountryHandler}
      ></CountryInput>
      <div className="phone_number_input">
        <AddPhoneNumberInput
          onBlur={props.phoneNumberBlurHnadler}
          onChange={props.changePhoneNumberHandler}
          value={props.newPhoneNumberValue}
          onFocus={props.phoneNumberFocusHnadler}
        ></AddPhoneNumberInput>
      </div>
    </div>
  );
};
