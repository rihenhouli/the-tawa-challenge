import { MouseEventHandler, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  ChangeEmailModalFooter,
  ChangeNameModalFooter,
} from "../../../molecules/modal-footer/ModalFooter";
import {
  ChangeEmailModalHeader,
  ChangePhoneModalHeader,
} from "../../../molecules/modal-header/ModalHeader";
import { getAuthState } from "@rihenhouli/ttcsm_auth/lib/selectors";
import { listMailAddressData } from "@rihenhouli/ttcsm_mail-address/lib/selectors";
import {
  AddEmailModalBody,
  ChangePhoneNumberModalBody,
  ChangeEmailModalBody,
} from "../../../molecules/modal-body/contact-info/ModalBody";
import MailAddress from '@rihenhouli/ttcsm_mail-address/lib/models/MailAddress'

require("./Modal.css");

export const ProfileContactInfoEmailModal = (props: {
  show: boolean | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  const authState = useSelector(getAuthState);
  const dispatch = useDispatch();
  const [isHidden,setIsHidden]=useState(false)
  const mailAddresses = useSelector(listMailAddressData)?.filter((email)=>email.isDeleted===false);
  useEffect(() => {
    if (mailAddresses?.length === 3) {
      setIsHidden(true);
    } else setIsHidden(false);
  }, []);
  return (
    <Modal
      backdrop="static"
      className="profile_contact_info_email_modal"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      animation={false}
      keyboard={false}
    >
      <ChangeEmailModalHeader onClick={props.onClick}></ChangeEmailModalHeader>
      <ChangeEmailModalBody mailAddresses={mailAddresses}></ChangeEmailModalBody>
      <AddEmailModalBody addBodyHidden={isHidden}></AddEmailModalBody>
      <ChangeEmailModalFooter></ChangeEmailModalFooter>
    </Modal>
  );
};

export const ProfileContactInfoPhoneModal = (props: {
  show: boolean | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <Modal
      backdrop="static"
      className="profile_basic_info_name_modal"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      animation={false}
      keyboard={false}
    >
      <ChangePhoneModalHeader onClick={props.onClick}></ChangePhoneModalHeader>
      <ChangePhoneNumberModalBody></ChangePhoneNumberModalBody>
      <ChangeNameModalFooter></ChangeNameModalFooter>
    </Modal>
  );
};
