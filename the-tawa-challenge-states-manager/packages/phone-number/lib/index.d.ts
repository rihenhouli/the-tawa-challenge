/// <reference types="redux-persist/types/types" />
import { Store } from 'redux';
import { Saga } from 'redux-saga';
import { PersistGate } from 'redux-persist/integration/react';
import { PersistConfig } from 'redux-persist';
import { State as phoneNumberState } from './state';
import phoneNumberEffects from './effects';
export declare const initialSagas: {
    phoneNumber: typeof phoneNumberEffects;
};
export declare const initialStates: {
    phoneNumber: phoneNumberState;
};
export declare const sagas: (typeof phoneNumberEffects)[];
export type States = {
    phoneNumber: phoneNumberState;
};
export type StateName = 'phoneNumber';
export declare const StateNames: {
    [prop: string]: StateName;
};
export declare const reducers: {
    phoneNumber: import("immer-reducer").ImmerReducerFunction<typeof import("./state").phoneNumberState>;
};
export declare const newReducer: (stateImmerClass: any, initialState: any) => import("immer-reducer").ImmerReducerFunction<any>;
export declare const sagaMiddleware: import("redux-saga").SagaMiddleware<object>;
declare function configStore(extraMiddleWares: any[] | undefined, // Adding other middlewares
persistConfig: PersistConfig<unknown, any, any, any>, // Configuration for persistState
extraStates?: any, // Adding other states in the store
replaceAllStates?: boolean): {
    store: Store<any, any>;
    persistor: import("redux-persist").Persistor;
    PersistGate: typeof PersistGate;
};
export declare function initSagaMiddleware(extraSagas?: Array<Saga>, // local sagas from frontEnd Client
waitForRehydrate?: boolean): void;
export default configStore;
