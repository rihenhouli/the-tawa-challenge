import React from 'react';
import PropTypes  from 'prop-types';

require('./Span.css');

export const LoginSpanFocusInput = (props:any) => (
  <span className="login_span_focus_input" />
);

export const LoginSpanSymbolInput = () => (
    <span className="login_span_symbol_input" >
        <i className="login_span_symbol_input_tag" />
    </span>
  );


export const LoginHint = (props: {
    color: string ; text: string 
}) => (
    <span style={{color:props.color}} className="login_hint">{props.text}</span>
);

export const RegistrationHint = (props: {
  color: string ; text: string 
}) => (
  <span style={{color:props.color}} className="registration_hint">{props.text}</span>
);

export const LoginHintForgotPwdUsername = (props: {
  color: string ; text: string 
}) => (
  <span style={{color:props.color}} className="login_hint_fp_password">{props.text}</span>
);

export const LoginMessage = (props: {
  color: string ; text: string 
}) => (
  <span style={{color:props.color}} className="login_hint_fp_password">{props.text}</span>
);

export const LoginHintResetPwd = (props: {
  color: string ; text: string 
}) => (
  <span style={{color:props.color}} className="login_hint_reset_password">{props.text}</span>
);

export const ProfileNameHint = (props: {
  color: string ; text: string 
}) => (
  <span style={{color:props.color}} className="name_hint">{props.text}</span>
);