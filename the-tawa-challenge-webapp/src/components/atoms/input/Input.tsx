import React, { ChangeEventHandler, FocusEventHandler, HTMLInputTypeAttribute, KeyboardEventHandler, MouseEventHandler, ReactNode } from "react";
import PropTypes from "prop-types";
import { RecoveryQuestonList } from "../../constants/RecoveryQuestion";
import { FloatingLabel, Form } from "react-bootstrap";
import { CategoriesList } from "../../constants/Categories";

require("./Input.css");

export const LoginInput = (props: {
  onBlur: FocusEventHandler<HTMLInputElement> | undefined;
  onFocus: FocusEventHandler<HTMLInputElement> | undefined;
  type: HTMLInputTypeAttribute | undefined;
  placeholder: string | undefined;
  value: string | undefined;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}) => (
  <input
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    className="login_input"
    type={props.type}
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}
  />
);

export const RegistrationInput = (props: {

  onBlur: FocusEventHandler<HTMLInputElement> | undefined;
  onFocus: FocusEventHandler<HTMLInputElement> | undefined;
  type: HTMLInputTypeAttribute | undefined;
  placeholder: string | undefined;
  value: string | undefined;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}) => (
  <input
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    className="the_registration_input"
    type={props.type}
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}
  />
);

export const LoginForgotPasswordUsernameInput = (props: {
  onBlur: FocusEventHandler<HTMLInputElement> | undefined;
  onFocus: FocusEventHandler<HTMLInputElement> | undefined;
  placeholder: string | undefined;
  value: string | undefined;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}) => (
 <input
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    className="login_input_forgot_password_username"
    type={"email"}
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange} />
);
export const LoginForgotPasswordRecoveryQuestionInput = (props: {
  onBlur: FocusEventHandler<HTMLInputElement> | undefined;
  onFocus: FocusEventHandler<HTMLInputElement> | undefined;
  placeholder: string | undefined;
  value: string | undefined;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}) => {
  const questions =RecoveryQuestonList
  return(
  <><input
  list={"data"}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    className="login_input_forgot_password_username"
    type={"text"}
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange} />
    <datalist id="data" className="recovery_question_list">
       {questions.map((question,i)=>(<option key={i}>{question.value}</option>))}
    </datalist></>
);}

export const LoginResetPasswordPasswordInput = (props: {
  type: HTMLInputTypeAttribute | undefined;
  onBlur: FocusEventHandler<HTMLInputElement> | undefined;
  onFocus: FocusEventHandler<HTMLInputElement> | undefined;
  placeholder: string | undefined;
  value: string | undefined;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}) => (
 <input
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    className="login_input_reset_password_password"
    type={props.type}
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange} />
);
export const LoginResetPasswordShowPassword = (props: {
  onClick: MouseEventHandler<HTMLInputElement> | undefined;
}) => (
 <div className="login_input_reset_password_show_password"><input
    onClick={props.onClick}
    className="login_input_reset_password_checkbox"
    type={"checkbox"}>
  </input><label className="label_checkbox_login">show password</label></div>
    
);

export const SearchInput = (props: {
  onKeyDown: KeyboardEventHandler<HTMLInputElement> | undefined;
  type: string | (string & {});
  placeholder: string | undefined;
  value: string | undefined;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}) => (
  <input
  autoFocus
    className="search_input"
    type={props.type}
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}
    onKeyDown={props.onKeyDown}
  />
);

SearchInput.propTypes = {
  text: PropTypes.string,
  placeholder: PropTypes.string,
};


export const CategoryInput = (props: {
  defaultValue: string;
  onChange: ChangeEventHandler<HTMLSelectElement> | undefined;
}) => {
  const categories = CategoriesList
  return (
    <div>
      <FloatingLabel
        controlId="floatingSelectGrid"
        label="Category*"
        className="Floating_labbel "
      >
        <Form.Select
          aria-label="Floating label select example"
          defaultValue={props.defaultValue}
          onChange={props.onChange}
          className="article_category_input"
        >
          {categories?.map((category, i) => (
            <option key={i} value={category.name}>
              {category.name}{" "}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>
    </div>
  );
};


export const AddArticleInput = (props: {
  onFocus: FocusEventHandler<HTMLInputElement> | undefined;
  onBlur: FocusEventHandler<HTMLInputElement> | undefined;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  value: string | undefined;
}) => {
  return (
    <div>
      <FloatingLabel controlId="floatingSelectGrid" label="Title*">
        <Form.Control
          type="text"
          placeholder="Title*"
          defaultValue={props.value}
          onChange={props.onChange}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
        />
      </FloatingLabel>
    </div>
  );
};

export const AddArticleContentInput = (props: {
  onFocus: FocusEventHandler<HTMLInputElement> | undefined;
  onBlur: FocusEventHandler<HTMLInputElement> | undefined;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  value: string | undefined;
}) => {
  return (
    <div className="add_section_content_input_div">
      <FloatingLabel controlId="floatingSelectGrid" label="Content*">
        <Form.Control
          as="textarea"
          placeholder="Content*"
          defaultValue={props.value}
          onChange={props.onChange}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          rows={10}
        />
      </FloatingLabel>
    </div>
  );
};
