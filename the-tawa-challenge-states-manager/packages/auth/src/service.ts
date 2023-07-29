import axios from "axios";
import sessionStorage from "redux-persist/es/storage/session";
import { TTCS_URL } from "@rihenhouli/ttcsm_common/lib/utils";
import { string } from "prop-types";
const AUTH_URL = TTCS_URL + "user";

async function login(login: string, password: string): Promise<any> {
  return axios
    .post(AUTH_URL + "/sign-in", {
      login,
      password,
    })
    .then((response) => {
      if (response.data.access_token) {
        sessionStorage.setItem(
          "access_token",
          JSON.stringify(response.data.access_token)
        );
        sessionStorage.setItem("userId", JSON.stringify(response.data.userId));
        sessionStorage.setItem(
          "userName",
          JSON.stringify(response.data.userName)
        );
        sessionStorage.setItem(
          "userRole",
          JSON.stringify(response.data.userRole)
        );
        sessionStorage.setItem(
          "userMailAddress",
          JSON.stringify(response.data.userMailAddress)
        );
      }
      return response.data;
    });
}

async function logout(): Promise<any> {
  sessionStorage.removeItem("access_token");
  sessionStorage.removeItem("userId");
  sessionStorage.removeItem("userName");
  sessionStorage.removeItem("userRole");
  sessionStorage.removeItem("userMailAddress");
}

export { login, logout };
