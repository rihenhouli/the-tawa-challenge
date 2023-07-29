import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { ProfileCardTitle } from "../../../atoms/title/Title";
import { ProfileCardDoubleItem, ProfileCardItem } from "../../../molecules/card-item/CardItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAuthState } from "@rihenhouli/ttcsm_auth/lib/selectors";
import {
  ProfileContactInfoEmailModal,
  ProfileContactInfoPhoneModal,
} from "../../modal/contact-info-modal/Modal";
import { listMailAddressData } from "@rihenhouli/ttcsm_mail-address/lib/selectors";
import { listPhoneNumberData } from "@rihenhouli/ttcsm_phone-number/lib/selectors";
import { phoneNumberActions } from "@rihenhouli/ttcsm_phone-number/lib/state";
import MailAddress from '@rihenhouli/ttcsm_mail-address/lib/models/MailAddress'
import { CountriesList } from "../../../constants/Countries";


require("./ProfileContactInfoCard.css");

export const ProfileContactInfoCard = (props: {}) => {
  const dispatch = useDispatch();
  const mailAddresses = useSelector(listMailAddressData) ;
  const email = mailAddresses?.find((email)=>email.isMain===true)
  useEffect(() => {}, []);
  const authState = useSelector(getAuthState);
 const userIdFromSession = sessionStorage.getItem("userId");
 const userId = userIdFromSession ? JSON.parse(userIdFromSession) : "";
  const phoneNumbers = useSelector(listPhoneNumberData);
  const phoneNumber = phoneNumbers?.find(
    (phone) => phone.user === userId && phone.isMain === true
  );
  const countryList = CountriesList
  const countryPhoneCode = phoneNumber?.countryCode
  
  const [adminPhone, setPhone] = React.useState(" +"+countryPhoneCode+" "+phoneNumber?.phoneNumberValue);
  const [emailShow, setEmailShow] = React.useState(false);
  const [phoneShow, setPhoneShow] = React.useState(false);
  const [changeEmailShow, setChangeEmailShow] = React.useState(false);
  const [changePhoneShow, setChangePhoneShow] = React.useState(false);

  const openEmail = () => {
    setEmailShow(!emailShow);
  };
  const addEmailBack = () => {
    window.location.reload();
  };
  const changePhone = () => {
    setChangePhoneShow(!changeEmailShow);
  };
  const QuitPhone = () => {
    window.location.reload();
    setChangePhoneShow(!changePhoneShow);
  };
  const changeEmail = () => {
    setChangeEmailShow(!changeEmailShow);
  };
  const QuitEmail = () => {
    window.location.reload();
    setChangeEmailShow(!changeEmailShow);
  };
  return (
    <div className="profile_basic_info_card">
      <ProfileCardTitle text={"Contact info"}></ProfileCardTitle>
      <ProfileCardDoubleItem
        title={"Email"}
        text={email?.mailAddressValue + ""}
        onClick={changeEmail}
      ></ProfileCardDoubleItem>
      <ProfileContactInfoEmailModal
        show={changeEmailShow}
        onClick={QuitEmail}
      ></ProfileContactInfoEmailModal>
      <ProfileCardItem
        title={"Phone"}
        text={" +"+countryPhoneCode+" "+phoneNumber?.phoneNumberValue}
        onClick={changePhone}
      ></ProfileCardItem>
      <ProfileContactInfoPhoneModal
        show={changePhoneShow}
        onClick={QuitPhone}
      ></ProfileContactInfoPhoneModal>
    </div>
  );
};
