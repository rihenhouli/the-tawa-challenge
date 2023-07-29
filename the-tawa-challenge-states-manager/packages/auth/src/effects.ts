import { call, put, takeLatest, select, race, take } from "redux-saga/effects"
import UserLoggedIn from "./models/UserLoggedIn"
import { authActions } from "./state"
import {login, logout} from "./service"

function* loginEffect(action: ReturnType<typeof authActions.login>) {
    try {
        const userLoggedIn:UserLoggedIn = yield call(login, action.payload.login, action.payload.password)
        if(!userLoggedIn) throw Error 
        yield put(authActions.loginSuccess(userLoggedIn))
    } catch (err) {
        // @ts-ignore
        yield put(authActions.loginFailure('app_name'))
    }
}
function* logoutEffect() {
    console.log('we are in logout effect fun')
    try {
        const userLoggedIn:UserLoggedIn = yield call(logout)
        console.log('user logged in after logout',userLoggedIn)
        if(userLoggedIn) throw Error 
        yield put(authActions.logoutSuccess())
    } catch (err) {
        // @ts-ignore
        yield put(authActions.logoutFailure('app_name'))
    }
}


function* authEffects() {
    yield takeLatest(authActions.login.type, loginEffect)
    yield takeLatest(authActions.logout.type, logoutEffect)
}

export default authEffects