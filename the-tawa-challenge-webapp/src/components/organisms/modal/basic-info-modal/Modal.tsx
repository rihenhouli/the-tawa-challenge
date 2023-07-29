import { MouseEventHandler } from "react";
import { Button, Modal } from "react-bootstrap";
import {  AddProfilePhotoModalBody, ChangeBirthdayModalBody,  ChangeNameModalBody, ChangeProfilePhotoModalBody, ChangeUsernameModalBody, ChooseProfilePhotoModalBody } from "../../../molecules/modal-body/basic-info/ModalBody";
import {
  AddArticleModalFooter,
  AddProfilePhotoModalFooter,
  ChangeBirthdayModalFooter,
  ChangeFamilySituationModalFooter,
  ChangeGenderModalFooter,
  ChangeNameModalFooter,
  ChangeProfilePhotoModalFooter,
  ChangeUsernameModalFooter,
  ChooseProfilePhotoModalFooter,
} from "../../../molecules/modal-footer/ModalFooter";
import {
  AddArticleModalHeader,
  AddProfilePhotoModalHeader,
  ChangeBirthdayModalHeader,
  ChangeFamilySituationModalHeader,
  ChangeGenderModalHeader,
  ChangeNameModalHeader,
  ChangeProfilePhotoModalHeader,
  ChangeUsernameModalHeader,
} from "../../../molecules/modal-header/ModalHeader";
import { AddArticleModalBody } from "../../../molecules/modal-body/article-modal/ModalBody";

require("./Modal.css");
export const ProfileBasicInfoPhotoModal = (props: {
  show: boolean | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  openAdd: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <Modal
      className="profile_basic_info_photo_modal"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      animation={false}
    >
      <ChangeProfilePhotoModalHeader
        onClick={props.onClick}
      ></ChangeProfilePhotoModalHeader>
      <ChangeProfilePhotoModalBody></ChangeProfilePhotoModalBody>
      <ChangeProfilePhotoModalFooter
        openAdd={props.openAdd}
      ></ChangeProfilePhotoModalFooter>
    </Modal>
  );
};

export const ProfileBasicInfoChoosePhotoModal = (props: {
  show: boolean | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  save: MouseEventHandler<HTMLButtonElement> | undefined;
  download: MouseEventHandler<HTMLButtonElement> | undefined;
  imgSrc:string;
}) => {
  return (
    <Modal
      className="profile_basic_info_photo_modal"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      animation={false}
    >
      <ChangeProfilePhotoModalHeader
        onClick={props.onClick}
      ></ChangeProfilePhotoModalHeader>
      <ChooseProfilePhotoModalBody imgSrc={props.imgSrc}></ChooseProfilePhotoModalBody>
      <ChooseProfilePhotoModalFooter
        download={props.download} save={props.save}
      ></ChooseProfilePhotoModalFooter>
    </Modal>
  );
};

export const ProfileBasicInfoAddPhotoModal = (props: {
  show: boolean | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <Modal
      className="profile_basic_info_add_photo_modal"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      animation={false}
    >
      <AddProfilePhotoModalHeader
        onClick={props.onClick}
      ></AddProfilePhotoModalHeader>
      <AddProfilePhotoModalBody></AddProfilePhotoModalBody>
    </Modal>
  );
};

export const ProfileBasicInfoNameModal = (props: {
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
      <ChangeNameModalHeader onClick={props.onClick}></ChangeNameModalHeader>
      <ChangeNameModalBody></ChangeNameModalBody>
      <ChangeNameModalFooter></ChangeNameModalFooter>
    </Modal>
  );
};
export const ProfileBasicInfoBirthdayModal = (props: {
  show: boolean | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <Modal
      backdrop="static"
      className="profile_basic_info_add_photo_modal"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      animation={false}
      keyboard={false}
    >
      <ChangeBirthdayModalHeader onClick={props.onClick}></ChangeBirthdayModalHeader>
      <ChangeBirthdayModalBody></ChangeBirthdayModalBody>
      <ChangeBirthdayModalFooter></ChangeBirthdayModalFooter>
    </Modal>
  );
};

export const AccountUsernameModal = (props: {
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
      <ChangeUsernameModalHeader onClick={props.onClick}></ChangeUsernameModalHeader>
      <ChangeUsernameModalBody></ChangeUsernameModalBody>
      <ChangeUsernameModalFooter></ChangeUsernameModalFooter>
    </Modal>
  );
};