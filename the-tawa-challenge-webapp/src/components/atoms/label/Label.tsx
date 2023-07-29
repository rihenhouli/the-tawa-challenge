import React from "react";
import PropTypes from "prop-types";

require("./Label.css");

export const LoginLabel = (props: { text: string | undefined }) => (
  <span className="login_label">{props.text}</span>
);

LoginLabel.propTypes = {
  text: PropTypes.string.isRequired,
};

export const RegisterLabel = (props: { text: string | undefined }) => (
  <span className="register_label">{props.text}</span>
);

RegisterLabel.propTypes = {
  text: PropTypes.string.isRequired,
};

export const RegisterStepLabel = (props: { text: string | undefined }) => (
  <span className="register_step_label">{props.text}</span>
);

RegisterStepLabel.propTypes = {
  text: PropTypes.string.isRequired,
};

export const RegisterationItemLabel = (props: { text: string | undefined }) => (
  <label className="register_item_label">{props.text}</label>
);

RegisterationItemLabel.propTypes = {
  text: PropTypes.string.isRequired,
};
export const NavbarLabel = (props: { text: string | undefined }) => (
  <span className="navbar_label">{props.text}</span>
);

NavbarLabel.propTypes = {
  text: PropTypes.string.isRequired,
};

export const NavbarTitle = (props: { text: string | undefined }) => (
  <span className="navbar_title_label">{props.text}</span>
);


export const ProfileLabel = (props: { text: string | undefined; }) => (
  <span className="profile_label">{props.text}</span>
);

ProfileLabel.propTypes = {
  text: PropTypes.string.isRequired,
};

export const ProfileEmailLabel = (props: { text: string | undefined; }) => (
  <span className="profile_email_label">{props.text}</span>
);


export const ProfileGenderLabel = (props: { text: string | undefined; }) => (
  <span className="profile_gender_label">{props.text}</span>
);

export const ProfileFamilySituationLabel = (props: { text: string | undefined; }) => (
  <span className="profile_gender_label">{props.text}</span>
);

export const PhoneCodeLabel = (props: {
  codeLabelValue: string;
}) => {

  return (
    <div  className="profile_code_label">
      <label>{props.codeLabelValue}</label>
    </div>
  );
};

export const ProfileAddressLabel = (props: { text: string | undefined; }) => (
  <span className="profile_email_label">{props.text}</span>
);

export const ProfileTheAddressLabel = (props: {
   text: string | undefined; 
}) => (
  <span className="profile_address_label" >{props.text}</span>
);

export const AddArticleSectionImageLabel = (props: { text: string | undefined }) => (
  <label className="add_article_section_image_label">{props.text}</label>
);