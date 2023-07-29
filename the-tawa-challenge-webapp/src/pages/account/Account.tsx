import { getUserData } from "@rihenhouli/ttcsm_user/lib/selectors";
import React from "react";
import { useSelector } from "react-redux";
import username from "../../assets/username.png";
import role from "../../assets/role.png";
import { AccountFooter } from "../../components/molecules/account-footer/AccountFooter";
import { AccountHeader } from "../../components/molecules/account-header/AccountHeader";
import {
  AccountItemFirstCard,
} from "../../components/molecules/card/Card";
import "./Account.css";
import { AccountUsernameModal } from "../../components/organisms/modal/basic-info-modal/Modal";

export const Account = () => {
  const user = useSelector(getUserData);
  const [changeUsernameShow, setUsernameShow] = React.useState(false);
  const changeUsername = () => {
    setUsernameShow(!changeUsernameShow);
  };
  const QuitUsername = () => {
    window.location.reload();
    setUsernameShow(!changeUsernameShow);
  };
  return (
    <div className="user_account">
      <AccountHeader></AccountHeader>
      <div className="column-2">
      <AccountItemFirstCard
          link={""}
          title={ "Role : "+user?.userRole.toUpperCase() }
          src={role}
          alt={""}
          onClick={undefined}
        ></AccountItemFirstCard>
        <AccountItemFirstCard
          link={""}
          title={ user?.userName ||""}
          src={username}
          alt={""}
          onClick={changeUsername}
        ></AccountItemFirstCard>
        <AccountUsernameModal
          show={changeUsernameShow}
          onClick={QuitUsername}
        ></AccountUsernameModal>
      </div>
      <AccountFooter></AccountFooter>
    </div>
  );
};
