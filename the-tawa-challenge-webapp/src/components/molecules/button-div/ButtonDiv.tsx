import { MouseEventHandler } from "react";
import {
  AddEmailButton,
  AddPhoneNumberButton,
  ChangeProfilePhotoButton,
  SidebarButton,
  SidebarHeaderButton,
} from "../../atoms/button/Button";
import {
  ProfileModalAddPicImg,
  SidebarButtonImage,
} from "../../atoms/image/Image";

require("./ButtonDiv.css")

export const AddProfilePhotoButtonDiv = (props: {
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}) => (
  <div className="add_profile_picture_div" onClick={props.onClick}>
    <span> Add profile picture </span>
  </div>
);

export const AddProfileNumberButtonDiv = (props: {
  onClickAdd: MouseEventHandler<HTMLButtonElement> | undefined;
  onClickUpdate: MouseEventHandler<HTMLButtonElement> | undefined;
  updatePhoneNumberButtonText: string;
  addPhoneNumberButtonText: string;
  updateButtonHidden: boolean;
  addButtonHidden: boolean;
}) => (
  <div className="add_profile_phone_number_div">
    <AddPhoneNumberButton
      text={props.addPhoneNumberButtonText}
      onClick={props.onClickUpdate}
      hidden={props.addButtonHidden}
    ></AddPhoneNumberButton>
    <AddPhoneNumberButton
      text={props.updatePhoneNumberButtonText}
      onClick={props.onClickAdd}
      hidden={props.updateButtonHidden}
    ></AddPhoneNumberButton>
  </div>
);

export const SidebarButtonDiv = (props: {
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
  src: string;
  alt: string;
  text: string;
}) => (
  <div className="sidebar_btn_div" onClick={props.onClick}>
    <SidebarButtonImage src={props.src} alt={props.alt}></SidebarButtonImage>
    <SidebarButton text={props.text}></SidebarButton>
  </div>
);

export const SidebarHeaderDiv = (props: {
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
  text: string;
}) => (
  <div className="sidebar_header_div" onClick={props.onClick}>
    <SidebarHeaderButton text={props.text}></SidebarHeaderButton>
  </div>
);