import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { EmailParagraph } from "../../../atoms/paragraph/Paragraph";
import {
  ProfileEmailLabel,
} from "../../../atoms/label/Label";
import MailAddress from '@rihenhouli/ttcsm_mail-address/lib/models/MailAddress'
import { ChangeEmailLabeledInput } from "../../labeled-input/string-labeled-input/email-labeled-input/change-email/ChangeEmailLabeledInput";

export const ProfessionalEmail = (props:{professionalEmails:MailAddress[] | undefined}) => {
  const dispatch = useDispatch();
  useEffect(() => {
  }, []);

  const [isEmailButtonHidden, setIsEmailButtonHidden] = React.useState(true);
  const [isExistingInputDisabled, setIsExistingInputDisabled] = useState(true);
  return (
    <div>
      <ProfileEmailLabel text={"Professionnal"}></ProfileEmailLabel>
      {props.professionalEmails?.map((email, index) => (
        <ChangeEmailLabeledInput
          key={email._id}
          hiddenButton={isEmailButtonHidden}
          value={email.mailAddressValue}
          placeholder={" email address"}
          type={"text"}
          updateEmailButtonText={""}
          inputDisabled={isExistingInputDisabled}
          email = {email}
        ></ChangeEmailLabeledInput>
      ))}
      <EmailParagraph
        text={
          "The address where your organization can contact you for your activity in your account or if you get locked out you may use it to reset your password."
        }
      ></EmailParagraph>
    </div>
  );
};
