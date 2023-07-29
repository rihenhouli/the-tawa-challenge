import { useDispatch } from "react-redux";
import { RegisterLabel } from "../../atoms/label/Label";
import { RegistrationPersonalInfoStep } from "../../organisms/registration-step/RegistrationPersonalInfoStep";
import { userActions } from "@rihenhouli/ttcsm_user/lib/state";
import { useEffect, useState } from "react";
import { RegistrationContactInfoStep } from "../../organisms/registration-step/RegistrationContactInfoStep";
import { phoneNumberActions } from "@rihenhouli/ttcsm_phone-number/lib/state";
import { mailAddressActions } from "@rihenhouli/ttcsm_mail-address/lib/state";
import { RegistrationPhotoStep } from "../../organisms/registration-step/RegistrationPhotoStep";
import { RegistrationPasswordStep } from "../../organisms/registration-step/RegistrationPasswordStep";
require("./RegistrationTemplate.css");

export const RegistrationTemplate = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.listData());
  }, []);
  return (
    <div className="registration_template">
      <RegisterLabel text="REGISTER"></RegisterLabel>
      <RegistrationPersonalInfoStep />
    </div>
  );
};

export const RegistrationPhotoTemplate = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.listData());
  }, []);
  return (
    <div className="registration_photo_template">
      <RegisterLabel text="REGISTER"></RegisterLabel>
      <RegistrationPhotoStep />
    </div>
  );
};

export const RegistrationPasswordTemplate = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.listData());
    dispatch(mailAddressActions.listData());
    dispatch(phoneNumberActions.listData());
  }, []);
  return (
    <div className="registration_template">
      <RegisterLabel text="REGISTER"></RegisterLabel>
      <RegistrationPasswordStep />
    </div>
  );
};

export const RegistrationContactTemplate = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.listData());
  }, []);
  return (
    <div className="registration_template">
      <RegisterLabel text="REGISTER"></RegisterLabel>
      <RegistrationContactInfoStep />
    </div>
  );
};
