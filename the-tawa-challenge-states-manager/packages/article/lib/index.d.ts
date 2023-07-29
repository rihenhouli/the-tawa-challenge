/// <reference types="redux-persist/types/types" />
import { Store } from 'redux';
import { Saga } from 'redux-saga';
import { PersistGate } from 'redux-persist/integration/react';
import { PersistConfig } from 'redux-persist';
import { State as articleState } from './state';
import articleEffects from './effects';
export declare const initialSagas: {
    article: typeof articleEffects;
};
export declare const initialStates: {
    article: articleState;
};
export declare const sagas: (typeof articleEffects)[];
export type States = {
    article: articleState;
};
export type StateName = 'article';
export declare const StateNames: {
    [prop: string]: StateName;
};
export declare const reducers: {
    article: import("immer-reducer").ImmerReducerFunction<typeof import("./state").articleState>;
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
