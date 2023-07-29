import React, { MouseEventHandler } from 'react';
import PropTypes  from 'prop-types';

require('./Anchor.css');

export const LoginForgotPasswordAnchor = (props: {
  onClick: MouseEventHandler<HTMLAnchorElement> | undefined; text: string | undefined; 
}) => (
  <a className="forgot_password_anchor" onClick={props.onClick}>{props.text}</a>
);

LoginForgotPasswordAnchor.propTypes = {
  text: PropTypes.string.isRequired,
};

export const LoginCreateAccountAnchor = (props: {
  onClick: MouseEventHandler<HTMLAnchorElement> | undefined; text: string | undefined; 
}) => (
  <a className="create_account_anchor" onClick={props.onClick}>{props.text}</a>
);

LoginCreateAccountAnchor.propTypes = {
  text: PropTypes.string.isRequired,
};

