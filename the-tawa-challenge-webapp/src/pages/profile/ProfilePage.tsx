import  { FC, useEffect } from "react";
import {  useDispatch } from "react-redux";
import { ProfileTemplate } from "../../components/templates/profile-template/ProfileTemplate";
import { mailAddressActions } from "@rihenhouli/ttcsm_mail-address/lib/state";
import { phoneNumberActions } from "@rihenhouli/ttcsm_phone-number/lib/state";

interface IProps {}
export const ProfilePage: FC<IProps> = () => {
  const dispatch = useDispatch();
  const userIdFromSession = sessionStorage.getItem("userId");
  const userId = userIdFromSession ? JSON.parse(userIdFromSession) : "";

  useEffect(() => {
    dispatch(mailAddressActions.listDataByUser(userId));
    dispatch(phoneNumberActions.listDataByUser(userId));
  }, [ userId]);

  return (
    <div className="page_component">
      <ProfileTemplate></ProfileTemplate>
    </div>
  );
};
