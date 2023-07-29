/* eslint-disable */
import { Outlet } from "react-router-dom";
import { Navbar } from "../../organisms/navbar/Navbar";
import { Sidebar } from "../../organisms/sidebar/Sidebar";
import { userActions } from "@rihenhouli/ttcsm_user/lib/state";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAuthState } from "@rihenhouli/ttcsm_auth/lib/selectors";
import { userImageActions } from "@rihenhouli/ttcsm_user-image/lib/state";

require("../../../components/organisms/page-component/PageComponent");

export function Dashboard() {
  const dispatch = useDispatch();
  const userIdFromSession = sessionStorage.getItem("userId");
  const userId = userIdFromSession ? JSON.parse(userIdFromSession) : "";
  const authState = useSelector(getAuthState);
  useEffect(() => {
    if (authState.login.success && authState.userLoggedIn)
   { dispatch(userActions.getData(userId));
    console.log("dispatching user images dashboard ")
    dispatch(userImageActions.listDataByUser(userId));
  }
  }, [userId]);
  return (
    <div className="dashboard_page">
      <Navbar />
      <div className="dashboard_page_sidebar_outlet">
        <Sidebar/>
        <Outlet />
      </div>
    </div>
  );
}
