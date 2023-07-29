/// <reference types="redux-persist/types/types" />
import { Store } from 'redux';
import { Saga } from 'redux-saga';
import { PersistGate } from 'redux-persist/integration/react';
import { PersistConfig } from 'redux-persist';
import { State as authState } from './state';
import authEffects from './effects';
export declare const initialSagas: {
    auth: typeof authEffects;
};
export declare const initialStates: {
    auth: authState;
};
export declare const sagas: (typeof authEffects)[];
export type States = {
    auth: authState;
};
export type StateName = 'auth';
export declare const StateNames: {
    [prop: string]: StateName;
};
export declare const reducers: {
    auth: import("immer-reducer").ImmerReducerFunction<typeof import("./state").authState>;
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
