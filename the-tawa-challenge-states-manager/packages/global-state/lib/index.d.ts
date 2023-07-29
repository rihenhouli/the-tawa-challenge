/// <reference types="redux-persist/types/types" />
import { Store } from "redux";
import { Saga } from "redux-saga";
import { PersistGate } from "redux-persist/integration/react";
import { PersistConfig } from "redux-persist";
import { State as authState } from "@rihenhouli/ttcsm_auth/lib/state";
import { State as userState } from "@rihenhouli/ttcsm_user/lib/state";
import { State as userImageState } from "@rihenhouli/ttcsm_user-image/lib/state";
import { State as userPasswordState } from "@rihenhouli/ttcsm_user-password/lib/state";
import { State as phoneNumberState } from "@rihenhouli/ttcsm_phone-number/lib/state";
import { State as mailAddressState } from "@rihenhouli/ttcsm_mail-address/lib/state";
import { State as articleState } from "@rihenhouli/ttcsm_article/lib/state";
import { State as articleImageState } from "@rihenhouli/ttcsm_article-image/lib/state";
import { State as articleSectionState } from "@rihenhouli/ttcsm_article-section/lib/state";
import authSaga from "@rihenhouli/ttcsm_auth/lib/effects";
import userSaga from "@rihenhouli/ttcsm_user/lib/effects";
import userImageSaga from "@rihenhouli/ttcsm_user-image/lib/effects";
import userPasswordSaga from "@rihenhouli/ttcsm_user-password/lib/effects";
import mailAddressSaga from "@rihenhouli/ttcsm_mail-address/lib/effects";
import phoneNumberSaga from "@rihenhouli/ttcsm_phone-number/lib/effects";
import articleSaga from "@rihenhouli/ttcsm_article/lib/effects";
import articleImageSaga from "@rihenhouli/ttcsm_article-image/lib/effects";
import articleSectionSaga from "@rihenhouli/ttcsm_article-section/lib/effects";
export declare const sagaMiddleware: import("redux-saga").SagaMiddleware<object>;
export declare const reducers: {
    auth: import("immer-reducer").ImmerReducerFunction<typeof import("@rihenhouli/ttcsm_auth/lib/state").authState>;
    user: import("immer-reducer").ImmerReducerFunction<typeof import("@rihenhouli/ttcsm_user/lib/state").userState>;
    userImage: import("immer-reducer").ImmerReducerFunction<typeof import("@rihenhouli/ttcsm_user-image/lib/state").userImageState>;
    userPassword: import("immer-reducer").ImmerReducerFunction<typeof import("@rihenhouli/ttcsm_user-password/lib/state").userPasswordState>;
    mailAddress: import("immer-reducer").ImmerReducerFunction<typeof import("@rihenhouli/ttcsm_mail-address/lib/state").mailAddressState>;
    phoneNumber: import("immer-reducer").ImmerReducerFunction<typeof import("@rihenhouli/ttcsm_phone-number/lib/state").phoneNumberState>;
    article: import("immer-reducer").ImmerReducerFunction<typeof import("@rihenhouli/ttcsm_article/lib/state").articleState>;
    articleImage: import("immer-reducer").ImmerReducerFunction<typeof import("@rihenhouli/ttcsm_article-image/lib/state").articleImageState>;
    articleSection: import("immer-reducer").ImmerReducerFunction<typeof import("@rihenhouli/ttcsm_article-section/lib/state").articleSectionState>;
};
export declare const initialSagas: {
    auth: typeof authSaga;
    user: typeof userSaga;
    userImage: typeof userImageSaga;
    userPassword: typeof userPasswordSaga;
    mailAddress: typeof mailAddressSaga;
    phoneNumber: typeof phoneNumberSaga;
    article: typeof articleSaga;
    articleImage: typeof articleImageSaga;
    articleSection: typeof articleSectionSaga;
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
export type StateName = "auth" | "user" | "userImage" | "userPassword" | "mailAddress" | "phoneNumber" | "article" | "articleImage" | "articleSection";
export declare const sagas: (typeof authSaga | typeof userSaga | typeof userImageSaga | typeof userPasswordSaga | typeof mailAddressSaga | typeof phoneNumberSaga | typeof articleSaga | typeof articleImageSaga | typeof articleSectionSaga)[];
export declare function initSagaMiddleware(extraSagas?: Array<Saga>, // local sagas from frontEnd Client
waitForRehydrate?: boolean): void;
declare function configStore(extraMiddleWares: any[] | undefined, // Adding other middlewares
persistConfig: PersistConfig<unknown, any, any, any>, // Configuration for persistState
extraStates?: any, // Adding other states in the store
replaceAllStates?: boolean): {
    store: Store<any, any>;
    persistor: import("redux-persist").Persistor;
    PersistGate: typeof PersistGate;
};
export default configStore;
