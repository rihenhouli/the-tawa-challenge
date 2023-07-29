import { createStore, applyMiddleware, combineReducers, Store } from "redux";
import createSagaMiddleware, { Saga } from "redux-saga";
import { all, fork, take } from "redux-saga/effects";
import { PersistGate } from "redux-persist/integration/react";
import {
  persistStore,
  persistReducer,
  PersistConfig,
  REHYDRATE,
} from "redux-persist";

//import state

import {
  authReducerFunction,
  State as authState,
} from "@rihenhouli/ttcsm_auth/lib/state";

import {
  userReducerFunction,
  State as userState,
} from "@rihenhouli/ttcsm_user/lib/state";

import {
  userImageReducerFunction,
  State as userImageState,
} from "@rihenhouli/ttcsm_user-image/lib/state";

import {
  userPasswordReducerFunction,
  State as userPasswordState,
} from "@rihenhouli/ttcsm_user-password/lib/state";

import {
  phoneNumberReducerFunction,
  State as phoneNumberState,
} from "@rihenhouli/ttcsm_phone-number/lib/state";

import {
  mailAddressReducerFunction,
  State as mailAddressState,
} from "@rihenhouli/ttcsm_mail-address/lib/state";

import {
  articleReducerFunction,
  State as articleState,
} from "@rihenhouli/ttcsm_article/lib/state";

import {
  articleImageReducerFunction,
  State as articleImageState,
} from "@rihenhouli/ttcsm_article-image/lib/state";

import {
  articleSectionReducerFunction,
  State as articleSectionState,
} from "@rihenhouli/ttcsm_article-section/lib/state";

////////////////////////////////

//import sagas
import authSaga from "@rihenhouli/ttcsm_auth/lib/effects";
import userSaga from "@rihenhouli/ttcsm_user/lib/effects";
import userImageSaga from "@rihenhouli/ttcsm_user-image/lib/effects";
import userPasswordSaga from "@rihenhouli/ttcsm_user-password/lib/effects";
import mailAddressSaga from "@rihenhouli/ttcsm_mail-address/lib/effects";
import phoneNumberSaga from "@rihenhouli/ttcsm_phone-number/lib/effects";
import articleSaga from "@rihenhouli/ttcsm_article/lib/effects";
import articleImageSaga from "@rihenhouli/ttcsm_article-image/lib/effects";
import articleSectionSaga from "@rihenhouli/ttcsm_article-section/lib/effects";

export const sagaMiddleware = createSagaMiddleware();

export const reducers = {
  auth: authReducerFunction,
  user: userReducerFunction,
  userImage: userImageReducerFunction,
  userPassword: userPasswordReducerFunction,
  mailAddress: mailAddressReducerFunction,
  phoneNumber: phoneNumberReducerFunction,
  article: articleReducerFunction,
  articleImage: articleImageReducerFunction,
  articleSection: articleSectionReducerFunction,
};

export const initialSagas = {
  auth: authSaga,
  user: userSaga,
  userImage: userImageSaga,
  userPassword: userPasswordSaga,
  mailAddress: mailAddressSaga,
  phoneNumber: phoneNumberSaga,
  article: articleSaga,
  articleImage: articleImageSaga,
  articleSection: articleSectionSaga,
};

export type States = {
  settings: authState;
  user: userState;
  userImage: userImageState;
  userPassword: userPasswordState;
  mailAddress: mailAddressState;
  phoneNumber: phoneNumberState;
  article: articleState;
  articleImage: articleImageState;
  articleSection: articleSectionState;
};

export type StateName =
  | "auth"
  | "user"
  | "userImage"
  | "userPassword"
  | "mailAddress"
  | "phoneNumber"  
  | "article"
  | "articleImage"
  | "articleSection";
export const sagas = (
  Object.keys(initialSagas) as Array<keyof typeof initialSagas>
).map((key) => initialSagas[key]);

export function initSagaMiddleware(
  extraSagas: Array<Saga> = [], // local sagas from frontEnd Client
  waitForRehydrate = false
) {
  console.log("extraSagas", extraSagas);
  const _sagas: Array<Saga> = [...sagas, ...extraSagas];
  console.log("_sagas", _sagas);
  // It will initialize all sagas
  function* rootSaga(): any {
    if (waitForRehydrate) {
      yield take(REHYDRATE);
    }
    const instSagas = yield _sagas.map(function* (saga) {
      yield fork(saga);
    });
    yield all(instSagas);
  }
  // Start the listener
  sagaMiddleware.run(rootSaga);
}

function configStore(
  extraMiddleWares: Array<any> = [], // Adding other middlewares
  persistConfig: PersistConfig<unknown, any, any, any>, // Configuration for persistState
  extraStates: any = {}, // Adding other states in the store
  replaceAllStates = false // It will keep only extraStates
) {
  console.log("configuration du store");
  console.log("extra middleware", extraMiddleWares);
  let _reducers = combineReducers({
    ...reducers,
    ...extraStates,
  });

  if (replaceAllStates) {
    _reducers = combineReducers({
      ...extraStates,
    });
  }

  const _middleWares = [...extraMiddleWares, sagaMiddleware];
  // @ts-ignore
  const persistedReducer = persistReducer(persistConfig, _reducers);
  const store: Store<any, any> = createStore(
    persistedReducer,
    applyMiddleware(..._middleWares)
  );
  const persistor = persistStore(store);

  return { store, persistor, PersistGate };
}

export default configStore;
