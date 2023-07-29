import { MouseEventHandler } from "react";
import { Modal } from "react-bootstrap";
import {
  ChangeProfilePhotoButton,
  ChooseProfilePhotoButton,
} from "../../atoms/button/Button";
import {
  AddArticleText,
  AddArticleParagraph,
  ChangeBirthdayParagraph,
  ChangeBirthdayText,
  ChangeNameParagraph,
  ChangeNameText,
} from "../../atoms/paragraph/Paragraph";

require("./ModalFooter.css");

export const ChangeProfilePhotoModalFooter = (props: {
  openAdd: MouseEventHandler<HTMLButtonElement> | undefined;
}) => (
  <Modal.Footer className="profile_basic_info_photo_modal_footer">
    <ChangeProfilePhotoButton
      onClick={props.openAdd}
    ></ChangeProfilePhotoButton>
  </Modal.Footer>
);

export const ChooseProfilePhotoModalFooter = (props: {
  save: MouseEventHandler<HTMLButtonElement> | undefined;
  download: MouseEventHandler<HTMLButtonElement> | undefined;
}) => (
  <Modal.Footer className="profile_basic_info_photo_modal_footer">
    <ChooseProfilePhotoButton
      onClick={props.download}
      text={"download"}
    ></ChooseProfilePhotoButton>
    <ChooseProfilePhotoButton
      text={"save as profile picture"}
      onClick={props.save}
    ></ChooseProfilePhotoButton>
  </Modal.Footer>
);

export const AddProfilePhotoModalFooter = (props: {
  openAdd: MouseEventHandler<HTMLButtonElement> | undefined;
}) => <Modal.Footer></Modal.Footer>;

export const ChangeNameModalFooter = (props: {}) => (
  <Modal.Footer className="change_name_modal_footer">
    <ChangeNameText text={"Who can see your name?"}></ChangeNameText>
    <ChangeNameParagraph
      text={
        "Anyone can see this info when they communicate with you or view content you create in this app."
      }
    ></ChangeNameParagraph>
  </Modal.Footer>
);

export const ChangeUsernameModalFooter = (props: {}) => (
  <Modal.Footer className="change_name_modal_footer">
    <ChangeNameText text={"Who can see your username?"}></ChangeNameText>
    <ChangeNameParagraph
      text={
        "Anyone can see this info when they communicate with you or view content you publish in this app."
      }
    ></ChangeNameParagraph>
  </Modal.Footer>
);

export const ChangeBirthdayModalFooter = (props: {}) => (
  <Modal.Footer className="change_birthday_modal_footer">
    <ChangeBirthdayText
      text={"Who can see your birthday?"}
    ></ChangeBirthdayText>
    <ChangeBirthdayParagraph
      text={"Anyone can see this info within your organization"}
    ></ChangeBirthdayParagraph>
  </Modal.Footer>
);

export const ChangeGenderModalFooter = (props: {}) => (
  <Modal.Footer className="change_birthday_modal_footer">
    <ChangeBirthdayText text={"Who can see your Gender?"}></ChangeBirthdayText>
    <ChangeBirthdayParagraph
      text={"Anyone can see this info within your organization"}
    ></ChangeBirthdayParagraph>
  </Modal.Footer>
);

export const ChangeFamilySituationModalFooter = (props: {}) => (
  <Modal.Footer className="change_birthday_modal_footer">
    <ChangeBirthdayText
      text={"Who can see your Family Situation?"}
    ></ChangeBirthdayText>
    <ChangeBirthdayParagraph
      text={"The access to this info is restricted within your organization"}
    ></ChangeBirthdayParagraph>
  </Modal.Footer>
);

export const ChangeEmailModalFooter = (props: {}) => (
  <Modal.Footer className="change_name_modal_footer">
    <ChangeNameText text={"What can I do?"}></ChangeNameText>
    <ChangeNameParagraph
      text={
        "Manage the email addresses associated with your Organization Account.."
      }
    ></ChangeNameParagraph>
  </Modal.Footer>
);

export const ChangeHomeAddressModalFooter = (props: {}) => (
  <Modal.Footer className="change_name_modal_footer">
    <ChangeNameText text={"How it serves?"}></ChangeNameText>
    <ChangeNameParagraph
      text={
        "Your home and work addresses are used to personalize your experiences across Google products, like showing search results near your home, directions to work in Maps, and for more relevant ads. You can remove them any time"
      }
    ></ChangeNameParagraph>
  </Modal.Footer>
);

export const ChangeWorkAddressModalFooter = (props: {}) => (
  <Modal.Footer className="change_name_modal_footer">
    <ChangeNameText text={"How it serves?"}></ChangeNameText>
    <ChangeNameParagraph
      text={
        "Your home and work addresses are used to personalize your experiences across Google products, like showing search results near your home, directions to work in Maps, and for more relevant ads. You can remove them any time"
      }
    ></ChangeNameParagraph>
  </Modal.Footer>
);

export const ChangeAddressModalFooter = (props: {}) => (
  <Modal.Footer className="change_name_modal_footer">
    <ChangeNameText text={"How it serves?"}></ChangeNameText>
    <ChangeNameParagraph
      text={"Your Additional addresses are used to help in cases!"}
    ></ChangeNameParagraph>
  </Modal.Footer>
);

export const AddArticleModalFooter = (props: {}) => (
  <Modal.Footer className="change_birthday_modal_footer">
    <AddArticleText text={"Who can see your article?"}></AddArticleText>
    <AddArticleParagraph
      text={"Your article will remain discrete untill you publish it"}
    ></AddArticleParagraph>
  </Modal.Footer>
);

export const AddArticleSectionModalFooter = (props: {}) => (
  <Modal.Footer className="change_birthday_modal_footer">
    <AddArticleText text={"Who can see this section?"}></AddArticleText>
    <AddArticleParagraph
      text={
        "This section visibility depends on the article publish situation! Your article will remain discrete untill you publish it"
      }
    ></AddArticleParagraph>
  </Modal.Footer>
);

export const AddArticleSectionImageModalFooter = (props: {}) => (
  <Modal.Footer className="change_birthday_modal_footer">
    <AddArticleText text={"Who can see this image?"}></AddArticleText>
    <AddArticleParagraph
      text={
        "This section image visibility depends on the article publish situation! Your article will remain discrete untill you publish it"
      }
    ></AddArticleParagraph>
  </Modal.Footer>
);
