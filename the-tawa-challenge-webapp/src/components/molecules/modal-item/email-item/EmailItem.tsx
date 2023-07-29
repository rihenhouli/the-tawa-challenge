import { MouseEventHandler } from "react";
import { UpdateEmailButton } from "../../../atoms/button/Button";

export const EmailModalItem = (props: {
    onClickUpdate: MouseEventHandler<HTMLButtonElement> | undefined;
    updateEmailButtonText: string;
    updateButtonHidden :boolean;
  }) => (
    <div className="update_profile_email_div" >
        
          <UpdateEmailButton
        onClick={props.onClickUpdate}
        hidden={props.updateButtonHidden}
      ></UpdateEmailButton>
    </div>
  );