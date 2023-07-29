import { MouseEventHandler } from "react";
import { Modal } from "react-bootstrap";
import { AddProfilePhotoBackButton, ModalBackButton, ChangeProfilePhotoCloseButton } from "../../atoms/button/Button";
require("./ModalHeader.css");

export const ChangeProfilePhotoModalHeader = (props: {
    onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
  }) => (
    <Modal.Header className="profile_basic_info_photo_modal_header">
    <Modal.Title
      id="contained-modal-title-vcenter"
      className="profile_basic_info_photo_modal_title"
    >
      Profile picture
      <ChangeProfilePhotoCloseButton
        onClick={props.onClick}
      ></ChangeProfilePhotoCloseButton>
      <p>
        A picture helps people to recognise you and lets you know when
        you’re signed in to your account
      </p>
    </Modal.Title>
  </Modal.Header>
  );


  export const AddProfilePhotoModalHeader = (props: {
    onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
  }) => (
<Modal.Header className="profile_basic_info_add_photo_modal_header">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="profile_basic_info_add_photo_modal_title"
        >
          <AddProfilePhotoBackButton
            onClick={props.onClick}
          ></AddProfilePhotoBackButton>
          <p> Add profile picture</p>
        </Modal.Title>
      </Modal.Header>
  );

  export const ChangeNameModalHeader = (props: {
    onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
  }) => (
<Modal.Header className="profile_basic_info_change_name_modal_header">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="profile_basic_info_change_name_modal_title"
        >
          <ModalBackButton
            onClick={props.onClick}
          ></ModalBackButton>
          <p> Name</p>
        </Modal.Title>
      </Modal.Header>
  );

  export const ChangeBirthdayModalHeader = (props: {
    onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
  }) => (
<Modal.Header className="profile_basic_info_change_birthday_modal_header">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="profile_basic_info_change_birthday_modal_title"
        >
          <ModalBackButton
            onClick={props.onClick}
          ></ModalBackButton>
          <p> Birthday</p>
        </Modal.Title>
      </Modal.Header>
  );

  export const ChangeGenderModalHeader = (props: {
    onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
  }) => (
<Modal.Header className="profile_basic_info_change_birthday_modal_header">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="profile_basic_info_change_birthday_modal_title"
        >
          <ModalBackButton
            onClick={props.onClick}
          ></ModalBackButton>
          <p> Gender</p>
        </Modal.Title>
      </Modal.Header>
  );

  export const ChangeFamilySituationModalHeader = (props: {
    onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
  }) => (
<Modal.Header className="profile_basic_info_change_birthday_modal_header">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="profile_basic_info_change_birthday_modal_title"
        >
          <ModalBackButton
            onClick={props.onClick}
          ></ModalBackButton>
          <p> Family Situation</p>
        </Modal.Title>
      </Modal.Header>
  );

  export const ChangeEmailModalHeader = (props: {
    onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
  }) => (
<Modal.Header className="profile_basic_info_change_name_modal_header">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="profile_basic_info_change_name_modal_title"
        >
          <ModalBackButton
            onClick={props.onClick}
          ></ModalBackButton>
          <p> Email</p>
        </Modal.Title>
      </Modal.Header>
  );

  export const ChangePhoneModalHeader = (props: {
    onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
  }) => (
<Modal.Header className="profile_basic_info_change_name_modal_header">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="profile_basic_info_change_name_modal_title"
        >
          <ModalBackButton
            onClick={props.onClick}
          ></ModalBackButton>
          <p> Phone</p>
        </Modal.Title>
      </Modal.Header>
  );

  export const ChangeHomeAddressModalHeader = (props: {
    onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
  }) => (
<Modal.Header className="profile_basic_info_change_name_modal_header">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="profile_basic_info_change_name_modal_title"
        >
          <ModalBackButton
            onClick={props.onClick}
          ></ModalBackButton>
          <p> Home Address</p>
        </Modal.Title>
      </Modal.Header>
  );

  export const AddHomeAddressModalHeader = (props: {
    onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
  }) => (
<Modal.Header className="profile_basic_info_change_name_modal_header">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="profile_basic_info_change_name_modal_title"
        >
          <ModalBackButton
            onClick={props.onClick}
          ></ModalBackButton>
          <p> Address</p>
        </Modal.Title>
      </Modal.Header>
  );

  export const ChangeWorkAddressModalHeader = (props: {
    onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
  }) => (
<Modal.Header className="profile_basic_info_change_name_modal_header">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="profile_basic_info_change_name_modal_title"
        >
          <ModalBackButton
            onClick={props.onClick}
          ></ModalBackButton>
          <p> Work Address</p>
        </Modal.Title>
      </Modal.Header>
  );

  export const ChangeAddressModalHeader = (props: {
    onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
  }) => (
<Modal.Header className="profile_basic_info_change_name_modal_header">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="profile_basic_info_change_name_modal_title"
        >
          <ModalBackButton
            onClick={props.onClick}
          ></ModalBackButton>
          <p>  Address</p>
        </Modal.Title>
      </Modal.Header>
  );


  export const AddArticleModalHeader = (props: {
    onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
  }) => (
<Modal.Header className="profile_basic_info_change_birthday_modal_header">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="profile_basic_info_change_birthday_modal_title"
        >
          <ModalBackButton
            onClick={props.onClick}
          ></ModalBackButton>
          <p> New Article</p>
        </Modal.Title>
      </Modal.Header>
  );

  export const AddArticleSectionModalHeader = (props: {
    onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
  }) => (
<Modal.Header className="profile_basic_info_change_birthday_modal_header">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="profile_basic_info_change_birthday_modal_title"
        >
          <ModalBackButton
            onClick={props.onClick}
          ></ModalBackButton>
          <p> New Section</p>
        </Modal.Title>
      </Modal.Header>
  );

  export const UpdateArticleSectionModalHeader = (props: {
    onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
  }) => (
<Modal.Header className="profile_basic_info_change_birthday_modal_header">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="profile_basic_info_change_birthday_modal_title"
        >
          <ModalBackButton
            onClick={props.onClick}
          ></ModalBackButton>
          <p> Update Section</p>
        </Modal.Title>
      </Modal.Header>
  );

  export const AddArticleSectionImageModalHeader = (props: {
    onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
  }) => (
<Modal.Header className="profile_basic_info_change_birthday_modal_header">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="profile_basic_info_change_birthday_modal_title"
        >
          <ModalBackButton
            onClick={props.onClick}
          ></ModalBackButton>
          <p> Add section Image</p>
        </Modal.Title>
      </Modal.Header>
  );

  export const ChangeUsernameModalHeader = (props: {
    onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
  }) => (
<Modal.Header className="profile_basic_info_change_name_modal_header">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="profile_basic_info_change_name_modal_title"
        >
          <ModalBackButton
            onClick={props.onClick}
          ></ModalBackButton>
          <p> Username</p>
        </Modal.Title>
      </Modal.Header>
  );