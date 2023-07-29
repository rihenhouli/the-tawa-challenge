import { createStore, applyMiddleware, combineReducers, Store } from 'redux'
import createSagaMiddleware, { Saga } from 'redux-saga'
import { all, fork, take } from 'redux-saga/effects'
import { PersistGate } from 'redux-persist/integration/react'
import {
    persistStore,
    persistReducer,
    PersistConfig,
    REHYDRATE
} from 'redux-persist'
import { createReducerFunction } from 'immer-reducer'

import {
    initialState as userPasswordInitialState,
    userPasswordReducerFunction as userPasswordReducerFunction,
    State as userPasswordState
} from './state'

import userPasswordEffects from './effects'

export const initialSagas = {
    userPassword: userPasswordEffects
}

export const initialStates = {
    userPassword: userPasswordInitialState
}

export const sagas = (
    Object.keys(initialSagas) as Array<keyof typeof initialSagas>
).map((key) => initialSagas[key])

// Type definition for the GlobalState
export type States = {
    userPassword: userPasswordState
}

export type StateName = 'userPassword'

export const StateNames: { [prop: string]: StateName } = {
    userPasswordStateName: 'userPassword'
}

export const reducers = {
    userPassword: userPasswordReducerFunction
}

export const newReducer = (stateImmerClass: any, initialState: any) =>
    createReducerFunction(stateImmerClass, initialState)

export const sagaMiddleware = createSagaMiddleware()

function configStore(
    extraMiddleWares: Array<any> = [], // Adding other middlewares
    persistConfig: PersistConfig<unknown, any, any, any>, // Configuration for persistState
    extraStates: any = {}, // Adding other states in the store
    replaceAllStates: boolean = false // It will keep only extraStates
) {
    let _reducers = combineReducers({
        ...reducers,
        ...extraStates
    })

    if (replaceAllStates) {
        _reducers = combineReducers({
            ...extraStates
        })
    }

    const _middleWares = [...extraMiddleWares, sagaMiddleware]
    // @ts-ignore
    const persistedReducer = persistReducer(persistConfig, _reducers)
    const store: Store<any, any> = createStore(
        persistedReducer,
        applyMiddleware(..._middleWares)
    )
    const persistor = persistStore(store)

    return { store, persistor, PersistGate }
}

export function initSagaMiddleware(
    extraSagas: Array<Saga> = [], // local sagas from frontEnd Client
    waitForRehydrate: boolean = false
) {
    const _sagas: Array<Saga> = [...sagas, ...extraSagas]

    // It will initialize all sagas
    function* rootSaga(): any {
        if (waitForRehydrate) {
            yield take(REHYDRATE)
        }
        const instSagas = yield _sagas.map(function* (saga) {
            yield fork(saga)
        })
        yield all(instSagas)
    }
    // Start the listener
    sagaMiddleware.run(rootSaga)
}

export default configStore