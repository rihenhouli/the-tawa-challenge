import User from "@rihenhouli/ttcsm_user/lib/models/User";
import React, { useEffect } from "react";
import { FC } from "react";
import { ProfileBasicInfoCard } from "../card/basic-info-card/ProfileBasicInfoCard";
import { ProfileHeader } from "../../molecules/profile-header/ProfileHeader";
import { ProfileIntro } from "../../molecules/profile-intro/ProfileIntro";
import "./ProfileInfo.css";
import { ProfileContactInfoCard } from "../card/contact-info-card/ProfileContactInfoCard";
import { useDispatch } from "react-redux";
import { phoneNumberActions} from "@rihenhouli/ttcsm_phone-number/lib/state"
import { mailAddressActions } from "@rihenhouli/ttcsm_mail-address/lib/state";


interface IProps {
  user: User | null | undefined;
}
export const ProfileInfo: FC<IProps> = ({ user }) => {
  const userIdFromSession = sessionStorage.getItem("userId");
  const userId = userIdFromSession ? JSON.parse(userIdFromSession) : "";  
  const dispatch= useDispatch()
  useEffect(() => {
    dispatch(phoneNumberActions.listData())
    dispatch(mailAddressActions.listDataByUser(userId));
}, []);
  return (
    <div className="profile_info">
      <ProfileHeader></ProfileHeader>
      <ProfileIntro></ProfileIntro>
      <ProfileBasicInfoCard></ProfileBasicInfoCard>
      <ProfileContactInfoCard></ProfileContactInfoCard>
    </div>
  );
};
