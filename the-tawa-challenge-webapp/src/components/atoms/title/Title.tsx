import React from "react";
import PropTypes from "prop-types";

require("./Title.css");

export const LoginCardTitle = (props: { text: string }) => (
  <h2 className="login_card_title">{props.text}</h2>
);

LoginCardTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export const LoginCardTitleResetPassword = (props: { text: string }) => (
  <h2 className="login_card_title_fp">{props.text}</h2>
);

LoginCardTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export const ProfileTitle = (props: { text: string }) => (
  <h2 className="profile_title">{props.text}</h2>
);

ProfileTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export const ProfileCardTitle = (props: { text: string }) => (
  <h2 className="profile_card_title">{props.text}</h2>
);

export const ProfileCardItemTitle = (props: { text: string }) => (
  <h2 className="profile_card_item_title">{props.text}</h2>
);

export const ProfileModalTitle = (props: { text: string }) => (
  <h2 className="profile_modal_title">{props.text}</h2>
);

export const AccountItemCardTitle = (props: { text: string }) => (
  <h2 className="account_item_card_title">{props.text}</h2>
);

AccountItemCardTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export const ArticleOverviewTitle = (props: { text: string }) => (
  <h2 className="article_overview_title">{props.text}</h2>
);

export const ThTableHeader = (props: {titre : string | undefined}) => {
  return <th className="thTest">{props.titre}</th>;
};
