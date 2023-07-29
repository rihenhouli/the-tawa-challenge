import React, { ChangeEventHandler, MouseEventHandler }      from 'react';
import PropTypes  from 'prop-types';
import { Button } from 'react-bootstrap';

require('./Button.css');

export const LoginButton = (props: {
  disabled: boolean | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined; text: string | undefined; 
}) => (
  <button disabled={props.disabled} className="login_button" onClick={props.onClick}>{props.text}</button>
);

LoginButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export const LoginResetPasswordButton = (props: {
  disabled: boolean | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined; text: string | undefined; 
}) => (
  <button disabled={props.disabled} className="login_button" onClick={props.onClick}>{props.text}</button>
);

LoginButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export const ProfileButton = (props: {
  text: string | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
}) => (
  <button hidden={false} className="profile_button" onClick={props.onClick} > {props.text} </button>
);

ProfileButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export const ChangeProfilePhotoButton = (props: {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
}) => (
  <Button className='change_profile_picture' onClick={props.onClick} >{'change profile picture'}</Button>
);

export const ChooseProfilePhotoButton = (props: {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined; text:string|undefined
}) => (
  <Button className='change_profile_picture' onClick={props.onClick} >{props.text}</Button>
);

export const ChangeProfilePhotoCloseButton = (props: {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
}) => (
  
  <Button className='close_change_profile_picture' onClick={props.onClick} ></Button>
);
export const AddProfilePhotoBackButton = (props: {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
}) => (
  
  <Button className='back_add_profile_picture' onClick={props.onClick} ></Button>
);

export const ModalBackButton = (props: {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
}) => (
  
  <Button className='back_add_profile_picture' onClick={props.onClick} ></Button>
);


export const AddProfilePhotoButton = (props: {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
}) => (
  <Button className='add_profile_picture' onClick={props.onClick} >{'save as profile picture'}</Button>
);

export const ChangeNameButton = (props: {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
}) => (
  <Button className='change_profile_name' onClick={props.onClick} >{'Save changes'}</Button>
);

export const ValidateChangesButton = (props: {
  disabled: boolean | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
}) => (
  <Button hidden={props.disabled} className='change_name' onClick={props.onClick} ></Button>
);

export const AddEmailButton = (props: {
  hidden: boolean | undefined;
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
}) => (
  <Button hidden={props.hidden} variant="primary" className='change_email' onClick={props.onClick}>{props.text}</Button>

);

export const SaveEmailButton = (props: {
  disabled: boolean | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
}) => (
  <Button disabled={props.disabled} className='change_email' onClick={props.onClick} ></Button>
);

export const AddGenderButton = (props: {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
}) => (
  <Button  variant="primary" className='change_email' onClick={props.onClick}>{props.text}</Button>

);

export const ChangeGenderButton = (props: {
  disabled: boolean | undefined;
  saveChangesButtonHidden: boolean | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
}) => (
  <Button disabled={props.disabled} hidden={props.saveChangesButtonHidden} variant="success"  className='change_gender'   onClick={props.onClick}>{"save"}</Button>
);

export const AddFamilySituationButton = (props: {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
}) => (
  <Button  variant="primary" className='change_email' onClick={props.onClick}>{props.text}</Button>

);

export const ChangeFamilySituationButton = (props: {
  disabled: boolean | undefined;
  saveChangesButtonHidden: boolean | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
}) => (
  <Button disabled={props.disabled} hidden={props.saveChangesButtonHidden} variant="success"  className='change_gender'   onClick={props.onClick}>{"save"}</Button>
);

export const ChangeEmailButton = (props: {
  disabled: boolean | undefined;
  saveChangesButtonHidden: boolean | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
}) => (
  <Button disabled={props.disabled} hidden={props.saveChangesButtonHidden} variant="success"  className='change_gender'   onClick={props.onClick}>{"save"}</Button>
);
export const AddPhoneNumberButton = (props: {
  hidden: boolean | undefined;
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
}) => (
  <Button variant="primary" hidden={props.hidden} className='change_phone_number' onClick={props.onClick}>{props.text}</Button>

);

export const UpdateEmailButton = (props: {
  hidden: boolean | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
}) => (
  <Button variant="primary" hidden={props.hidden} className='change_email' onClick={props.onClick}></Button>
);
export const DeleteEmailButton = (props: {
  hidden: boolean | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
}) => (
  <Button variant="primary" hidden={props.hidden} className='delete_email' onClick={props.onClick}></Button>
);
export const SetEmailButton = (props: {
  hidden: boolean | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
  text:string;
}) => (
  <Button variant="success" hidden={props.hidden} className='set_email' onClick={props.onClick}>{props.text}</Button>
);

export const UpdatePhoneNumberButton = (props: {
  hidden: boolean | undefined;
  disabled: boolean | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
}) => (
  <Button hidden={props.hidden} disabled={props.disabled} className='change_phone_number_validator' onClick={props.onClick} ></Button>
);

export const AddAddressButton = (props: {
  hidden: boolean | undefined;
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
}) => (
  <Button hidden={props.hidden} variant="primary" className='change_email' onClick={props.onClick}>{props.text}</Button>

);

export const DeleteAddressButton = (props: {
  hidden: boolean | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
}) => (
  <Button variant="primary" hidden={props.hidden} className='delete_email' onClick={props.onClick}></Button>
);

export const SetAddressButton = (props: {
  hidden: boolean | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
  text:string;
}) => (
  <Button variant="success" hidden={props.hidden} className='set_address' onClick={props.onClick}>{props.text}</Button>
);

export const DiscardAddressButton = (props: {
  hidden: boolean | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
  text:string;
}) => (
  <Button variant="danger" hidden={props.hidden} className='discard_address' onClick={props.onClick}>{props.text}</Button>
);

export const UpdateAddressButton = (props: {
  hidden: boolean | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined; 
}) => (
  <Button variant="primary" hidden={props.hidden} className='change_email' onClick={props.onClick}></Button>
);


export const SidebarButton = (props: {
  text : string 
}) => (
  <Button className='sidebar_button'> {props.text}</Button>
);

export const SidebarHeaderButton = (props: {
  text : string 
}) => (
  <Button className='sidebar_header_button'> {props.text}</Button>
);

