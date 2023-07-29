import {
  RegistrationContactTemplate,
  RegistrationPhotoTemplate,
  RegistrationTemplate,
  RegistrationPasswordTemplate,
} from "../../components/templates/registration-template/RegistrationTemplate";
require("./RegistrationPage.css");

export function RegistrationPage() {
  return (
    <div className="registration_page">
      <RegistrationTemplate></RegistrationTemplate>
    </div>
  );
}

export function RegistrationPhotoPage() {
  return (
    <div className="registration_page">
      <RegistrationPhotoTemplate></RegistrationPhotoTemplate>
    </div>
  );
}

export function RegistrationPasswordPage() {
  return (
    <div className="registration_page">
      <RegistrationPasswordTemplate></RegistrationPasswordTemplate>
    </div>
  );
}

export function RegistrationContactPage() {
  return (
    <div className="registration_page">
      <RegistrationContactTemplate></RegistrationContactTemplate>
    </div>
  );
}
