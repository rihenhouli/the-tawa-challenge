import React, { MouseEventHandler } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

require("./Image.css");

export const LoginCardImage = (props: {
  src: string | undefined;
  alt: string | undefined;
}) => <img className="login_card_image" src={props.src} alt={props.alt} />;

LoginCardImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export const NavbarPersonalImage = (props: {
  src: string | undefined;
  alt: string | undefined;
}) => <img className="navbar_personal_image" src={props.src} alt={props.alt} />;

NavbarPersonalImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export const NavbarLogoutImage = (props: {
  src: string;
  onClick: MouseEventHandler<HTMLImageElement>;
}) => (
  <img
    className="navbar_logout_image"
    src={props.src}
    onClick={props.onClick}
    alt={"logout"}
  />
);
export const SidebarButtonImage = (props: { src: string; alt: string }) => (
  <img className="sidebar_link_img" src={props.src} alt={props.alt} />
);

export const ProfileIntroImage = (props: { src: string | undefined }) => (
  <img
    className="profile_intro_image"
    src={props.src}
    alt={"profile_intro_image"}
  />
);

export const ProfileCardImage = (props: { src: string | undefined }) => (
  <img className="profile_card_image" src={props.src} />
);

export const ProfileModalImage = (props: { src: string | undefined }) => (
  <img className="profile_modal_image" src={props.src} />
);

export const ProfileModalAddPicImg = (props: { src: string | undefined }) => (
  <img src={props.src} className="change_profile_picture_img" />
);

export const ProfileModalPicListImg = (props: {
  alt: string | undefined;
  onClick: MouseEventHandler<HTMLImageElement> | undefined;
  src: string | undefined;
}) => {
  return (
    <img
      src={props.src}
      onClick={props.onClick}
      alt={props.alt}
      className="change_profile_picture_list_img"
    />
  );
};

export const AccountImage = (props: {
  link: any;
  src: string | undefined;
  alt: string | undefined;
}) => (
  <Link to={""}>
    <img className="account_header_image" src={props.src} alt={props.alt} />
  </Link>
);
export const AccountItemCardImage = (props: {
  src: string | undefined;
  alt: string | undefined;
}) => (
  <img
    className="account_item_card_image"
    src={props.src}
    alt={props.alt}
  />
);

AccountItemCardImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export const SectionCardImage = (props: {
  onClick: MouseEventHandler<HTMLImageElement> | undefined;
  alt: string | undefined;
  src: string | undefined;
}) => <img className="section_card_image" onClick={props.onClick} src={props.src} alt={props.alt} />;

export const SectionModalAddPicImg = (props: { src: string | undefined }) => (
  <img src={props.src} className="section_modal_add_pic_img" />
);