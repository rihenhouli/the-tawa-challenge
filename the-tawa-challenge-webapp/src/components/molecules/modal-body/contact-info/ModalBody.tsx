/* eslint-disable */
import { Modal } from "react-bootstrap";
import {
  AddEmailParagraph,
  EmailParagraph,
} from "../../../atoms/paragraph/Paragraph";
import { ProfessionalEmail } from "../../profile-field/email/ProfessionalEmail";
import { ProfilePhoneNumber } from "../../profile-field/phone/PhoneNumber";
import MailAddress from "@rihenhouli/ttcsm_mail-address/lib/models/MailAddress";
import {  TheEmail } from "../../profile-field/email/TheEmail";
import { AddEmailLabeledInput } from "../../labeled-input/string-labeled-input/email-labeled-input/add-admin-email/AddEmailLabeledInput";

require("./ModalBody.css");

export const ChangeEmailModalBody = (props: { mailAddresses: MailAddress[] | undefined;}) => {
  return (
    <Modal.Body
      className="profile_contact_info_change_email_modal_body"
      data-backdrop="static"
      data-keyboard="false"
    >
     <TheEmail mailAddresses={props.mailAddresses} />
    </Modal.Body>
  );
};
export const AddEmailModalBody = (props: {
  addBodyHidden: boolean;
}) => {
  return (
    <Modal.Body
      className="profile_contact_info_change_email_modal_body"
      data-backdrop="static"
      data-keyboard="false"
      hidden={props.addBodyHidden}
    >
      <div className="change_email_button_label">
        <AddEmailLabeledInput
        ></AddEmailLabeledInput>
      </div>
    </Modal.Body>
  );
};

export const ChangePhoneNumberModalBody = (props: {}) => {
  return (
    <Modal.Body
      className="profile_contact_info_change_phone_modal_body"
      data-backdrop="static"
      data-keyboard="false"
    >
      <ProfilePhoneNumber></ProfilePhoneNumber>
    </Modal.Body>
  );
};
