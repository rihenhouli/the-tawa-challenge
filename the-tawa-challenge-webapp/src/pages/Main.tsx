import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Main.css";
import { RoutesList } from "../routes/Routes";
import {
  ArticleDetailsPagePR,
  ArticleOverviewPagePR,
  ArticlePagePR,
  BlogPagePR,
  DashboardPR,
  ForgetPasswordPR,
  HomePagePR,
  LoginPR,
  ProfilePagePR,
  RegistrationContactPR,
  RegistrationPagePR,
  RegistrationPasswordPR,
  RegistrationPhotoPR,
  ResetPasswordPR,
} from "../routes/PrivateRoute";

function Main() {
  const routes = RoutesList;
  return (
    <Router>
      <Routes>
        <Route path="" element={<LoginPR />} />
        <Route path="reset-password/:access_token" element={<ResetPasswordPR />} />
        <Route path="forgot-password" element={<ForgetPasswordPR />} />
        <Route path="register" element={<RegistrationPagePR />} />
        <Route path="register-photo" element={<RegistrationPhotoPR />} />
        <Route path="register-password" element={<RegistrationPasswordPR />} />
        <Route path="register-contact" element={<RegistrationContactPR />} />
        <Route path="dashboard" element={<DashboardPR />}>
          <Route index element={<HomePagePR />} />
          <Route path="profile" element={<ProfilePagePR />}></Route>
          <Route path="blog" element={<BlogPagePR />}></Route>
          <Route path="overview/:articleId" element={<ArticleOverviewPagePR />}></Route>
          <Route path="articles" element={<ArticlePagePR />}></Route>
          <Route path="datails/:articleId" element={<ArticleDetailsPagePR />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default Main;
