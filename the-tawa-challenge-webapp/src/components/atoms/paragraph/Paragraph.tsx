import React from 'react';
import PropTypes  from 'prop-types';

require('./Paragraph.css');

export const Paragraph = (props: { text: string | undefined; }) => (
  <p className="login_paragraph">{props.text}</p>
);

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
};


export const ProfileTitle = (props: { text: string }) => (
  <h1> Personal info</h1>
);

export const ProfileCardItemText = (props: { text: string }) => (
  <h3 className="profile_card_item_text">{props.text}</h3>
);

export const ProfileCardPhotoItemText = (props: { text: string }) => (
  <h3 className="profile_card_photo_item_text">{props.text}</h3>
);

export const AddProfilePictureText = (props: { text: string }) => (
  <h3 className="add_profile_picture_text">{props.text}</h3>
);

export const ChangeNameParagraph = (props: { text: string }) => (
  <h3 className="change_name_paragraph">{props.text}</h3>
);

export const ChangeNameText = (props: { text: string }) => (
  <h3 className="change_name_text">{props.text}</h3>
);

export const ChangeBirthdayParagraph = (props: { text: string }) => (
  <h3 className="change_birthday_paragraph">{props.text}</h3>
);

export const ChangeBirthdayText = (props: { text: string }) => (
  <h3 className="change_birthday_text">{props.text}</h3>
);
export const ChangeEmailParagraph = (props: { text: string }) => (
  <h3 className="change_email_paragraph">{props.text}</h3>
);
export const EmailParagraph = (props: { text: string }) => (
  <h3 className="add_email_paragraph">{props.text}</h3>
);
export const AddEmailParagraph = (props: { text: string ; hidden:boolean}) => (
  <h3 className="add_email_paragraph" hidden={props.hidden}>{props.text} </h3>
);

export const AddGenderParagraph = (props: { text: string }) => (
  <h3 className="add_email_paragraph">{props.text} </h3>
);

export const AddFamilySituationParagraph = (props: { text: string }) => (
  <h3 className="add_email_paragraph">{props.text} </h3>
);


export const ProfilePhoneNumberParagraph = (props: { text: string }) => (
  <h3 className="add_phone_number_paragraph">{props.text}</h3>
);

export const AddArticleText = (props: { text: string }) => (
  <h3 className="add_article_text">{props.text}</h3>
);

export const AddArticleParagraph = (props: { text: string }) => (
  <h3 className="add_article_paragraph">{props.text}</h3>
);
