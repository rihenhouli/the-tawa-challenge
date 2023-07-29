import {
    ImmerReducer,
    createActionCreators,
    createReducerFunction,
  } from "immer-reducer";
  import UserLoggedIn from "./models/UserLoggedIn";
  
  export type State = {
    login: {
      loading: boolean;
      success: boolean;
      errorMessage: string | null;
    };
    logout: {
      loading: boolean;
      success: boolean;
      errorMessage: string | null;
    };
    userLoggedIn: null | UserLoggedIn;
  };
  
  export const initialState: State = {
    login: {
      loading: false,
      success: false,
      errorMessage: null,
    },
    userLoggedIn: null,
    logout: {
      loading: false,
      success: false,
      errorMessage: null,
    },
  };
  export interface loginParam {
    login: string;
    password: string;
  }
  
  export class authState extends ImmerReducer<State> {
    login(payload: loginParam) {
      this.draftState.userLoggedIn = null;
      this.draftState.login.loading = true;
      this.draftState.login.errorMessage = null;
      this.draftState.login.success = false;
    }
  
    loginFailure(payload: string) {
      this.draftState.userLoggedIn = null;
      this.draftState.login.loading = false;
      this.draftState.login.errorMessage = payload;
    }
  
    loginSuccess(user: UserLoggedIn) {
      this.draftState.login.loading = false;
      this.draftState.login.success = true;
      this.draftState.userLoggedIn = user;
      this.draftState.login.errorMessage = null;
    }

    logout() {
      this.draftState.logout.loading = true;
      this.draftState.logout.success = false;
      this.draftState.logout.errorMessage = null;
    }

    logoutFailure(errorMessage: string) {
      this.draftState.logout.loading = false;
      this.draftState.logout.success = false;
      this.draftState.logout.errorMessage = errorMessage;
    }
  
    logoutSuccess() {
      this.draftState.logout.loading = false;
      this.draftState.logout.success = true;
      this.draftState.logout.errorMessage = null;
      this.draftState.userLoggedIn = null;
    }
  
    setLoggedInUser(user: UserLoggedIn) {
      if (this.draftState.userLoggedIn) {
        this.draftState.userLoggedIn._id = user._id;
        this.draftState.userLoggedIn.firstName = user.firstName;
        this.draftState.userLoggedIn.lastName = user.lastName;
        this.draftState.userLoggedIn.userName = user.userName;
        this.draftState.userLoggedIn.birthDate = user.birthDate;
        this.draftState.userLoggedIn.userRole = user.userRole;
        this.draftState.userLoggedIn.userState = user.userState;
        this.draftState.userLoggedIn.createdBy = user.createdBy;
        this.draftState.userLoggedIn.isDeleted = user.isDeleted;
        this.draftState.userLoggedIn.__v = user.__v;
      } else {
        this.draftState.userLoggedIn = new UserLoggedIn(user);
      }
    }
  }
  
  export const authActions = createActionCreators(authState);
  export const authReducerFunction = createReducerFunction(
    authState,
    initialState
  );