/// <reference types="redux-persist/types/types" />
import { Store } from 'redux';
import { Saga } from 'redux-saga';
import { PersistGate } from 'redux-persist/integration/react';
import { PersistConfig } from 'redux-persist';
import { State as userState } from './state';
import userEffects from './effects';
export declare const initialSagas: {
    user: typeof userEffects;
};
export declare const initialStates: {
    user: userState;
};
export declare const sagas: (typeof userEffects)[];
export type States = {
    user: userState;
};
export type StateName = 'user';
export declare const StateNames: {
    [prop: string]: StateName;
};
export declare const reducers: {
    user: import("immer-reducer").ImmerReducerFunction<typeof import("./state").userState>;
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
