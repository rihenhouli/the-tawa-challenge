import React, { FC, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuthState } from "@rihenhouli/ttcsm_auth/lib/selectors";
import { Dashboard } from "../components/templates/dashboard-template/Dashboard";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { Account } from "../pages/account/Account";
import {
  RegistrationContactPage,
  RegistrationPage,
  RegistrationPhotoPage,
  RegistrationPasswordPage,
} from "../pages/registration/RegistrationPage";
import { LoginTemplate } from "../components/templates/login-template/LoginTemplate";
import { useDispatch } from "react-redux";
import { userActions } from "@rihenhouli/ttcsm_user/lib/state";
import { userImageActions } from "@rihenhouli/ttcsm_user-image/lib/state";
import { ArticlePage, BlogPage, DetailArticlePage, SingleArticlePage } from "../pages/article/ArticlePage";
import { ResetPasswordTemplate } from "../components/templates/login-template/ResetPasswordTemplate";
import { ForgotPasswordTemplate } from "../components/templates/login-template/ForgotPasswordTemplate";

export const LoginPR: FC<{}> = () => {
  const authState = useSelector(getAuthState);
  return !authState.userLoggedIn?.userName ? (
    <LoginTemplate />
  ) : (
    <Navigate to="/dashboard" />
  );
};

export const ResetPasswordPR: FC<{}> = () => {
  const authState = useSelector(getAuthState);
  return !authState.userLoggedIn ? (
    <ResetPasswordTemplate />
  ) : (
    <Navigate to="/dashboard" />
  );
};

export const ForgetPasswordPR: FC<{}> = () => {
  const authState = useSelector(getAuthState);
  return !authState.userLoggedIn ? (
    <ForgotPasswordTemplate />
  ) : (
    <Navigate to="/dashboard" />
  );
};

export const RegistrationPagePR: FC<{}> = () => {
  const stepFromSession = sessionStorage.getItem("registrationStep");
  const step = stepFromSession ? JSON.parse(stepFromSession) : "";
  const authState = useSelector(getAuthState);
  if (authState.userLoggedIn) {
    return <Navigate to="/dashboard" />;
  } else if (step === "personal-step") {
    return <RegistrationPage />;
  } else if (step === "photo-step") {
    return <Navigate to="/register-photo" />;
  } else if (step === "password-step") {
    return <Navigate to="/register-password" />;
  } else if (step === "contact-step") {
    return <Navigate to="/register-contact" />;
  } else {
    return <Navigate to="/register" />;
  }
};

export const RegistrationPhotoPR: FC<{}> = () => {
  const stepFromSession = sessionStorage.getItem("registrationStep");
  const step = stepFromSession ? JSON.parse(stepFromSession) : "";
  const authState = useSelector(getAuthState);
  if (authState.userLoggedIn) {
    return <Navigate to="/dashboard" />;
  } else if (step === "photo-step") {
    return <RegistrationPhotoPage />;
  } else if (step === "personal-step") {
    return <Navigate to="/register" />;
  } else if (step === "password-step") {
    return <Navigate to="/register-password" />;
  } else if (step === "contact-step") {
    return <Navigate to="/register-contact" />;
  } else {
    return <Navigate to="/register" />;
  }
};

export const RegistrationPasswordPR: FC<{}> = () => {
  const stepFromSession = sessionStorage.getItem("registrationStep");
  const step = stepFromSession ? JSON.parse(stepFromSession) : "";
  const authState = useSelector(getAuthState);
  if (authState.userLoggedIn) {
    return <Navigate to="/dashboard" />;
  } else if (step === "photo-step") {
    return <Navigate to="/register-photo" />;
  } else if (step === "personal-step") {
    return <Navigate to="/register" />;
  } else if (step === "password-step") {
    return <RegistrationPasswordPage />;
  } else if (step === "contact-step") {
    return <Navigate to="/register-contact" />;
  } else {
    return <Navigate to="/register" />;
  }
};

export const RegistrationContactPR: FC<{}> = () => {
  const stepFromSession = sessionStorage.getItem("registrationStep");
  const step = stepFromSession ? JSON.parse(stepFromSession) : "";
  const authState = useSelector(getAuthState);
  if (authState.userLoggedIn) {
    return <Navigate to="/dashboard" />;
  } else if (step === "photo-step") {
    return <Navigate to="/register-photo" />;
  } else if (step === "personal-step") {
    return <Navigate to="/register" />;
  } else if (step === "password-step") {
    return <Navigate to="/register-password" />;
  } else if (step === "contact-step") {
    return <RegistrationContactPage />;
  } else {
    return <Navigate to="/register" />;
  }
};

export const DashboardPR: FC<{}> = () => {
  const dispatch = useDispatch();
  const userIdFromSession = sessionStorage.getItem("userId");
  const userId = userIdFromSession ? JSON.parse(userIdFromSession) : "";
  const authState = useSelector(getAuthState);
  useEffect(() => {
    if (authState.login.success && authState.userLoggedIn)
   { dispatch(userActions.getData(userId));
    console.log("dispatching user images dashboard PR ")
    dispatch(userImageActions.listDataByUser(userId));
  }
  }, [userId]);
  return authState.userLoggedIn ? <Dashboard /> : <Navigate to="/" />;
};

export const HomePagePR: FC<{}> = () => {
  const authState = useSelector(getAuthState);
  return authState.userLoggedIn ? <Account /> : <Navigate to="/" />;
};

export const ProfilePagePR: FC<{}> = () => {
  const authState = useSelector(getAuthState);
  return authState.userLoggedIn ? <ProfilePage /> : <Navigate to="/" />;
};

export const ArticlePagePR: FC<{}> = () => {
  const authState = useSelector(getAuthState);
  return authState.userLoggedIn ? <ArticlePage /> : <Navigate to="/" />;
};

export const BlogPagePR: FC<{}> = () => {
  const authState = useSelector(getAuthState);
  return authState.userLoggedIn ? <BlogPage /> : <Navigate to="/" />;
};

export const ArticleOverviewPagePR: FC<{}> = () => {
  const authState = useSelector(getAuthState);
  return authState.userLoggedIn ? <SingleArticlePage /> : <Navigate to="/" />;
};
export const ArticleDetailsPagePR: FC<{}> = () => {
  const authState = useSelector(getAuthState);
  return authState.userLoggedIn ? <DetailArticlePage /> : <Navigate to="/" />;
};