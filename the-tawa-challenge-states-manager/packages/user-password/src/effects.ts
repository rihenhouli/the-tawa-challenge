import { userPasswordActions } from "./state";
import { call, put, takeLatest, select, race, take } from "redux-saga/effects";
import UserPassword from "./models/UserPassword";
import { buildTechnicalErrorMessage } from "@rihenhouli/ttcsm_common/lib/utils";
import { addData, fetchList, fetchListByUser, resetData } from "./service";

/*
These methods are for mapping the front actions and the API calls (from the service)
*/
/*When we call addData action, addData will be called*/
function* addUserPasswordEffect(
  action: ReturnType<typeof userPasswordActions.addData>
) {
  try {
    console.log("on est dans l'effect du add userPassword");
    yield call(addData, action.payload);
    yield put(userPasswordActions.addDataSuccess());
  } catch (err) {
    // @ts-ignore
    yield put(userPasswordActions.addDataFailure("app_name"));
  }
}


/*When we call resetData action, resetData will be called*/
function* resetUserPasswordEffect(
  action: ReturnType<typeof userPasswordActions.resetData>
) {
  try {
    console.log("on est dans l'effect du reset userPassword");
    yield call(resetData, action.payload);
    yield put(userPasswordActions.resetDataSuccess());
  } catch (err) {
    // @ts-ignore
    yield put(userPasswordActions.resetDataFailure("app_name"));
  }
}


/*
When we call listData action, fetchList will be called
param0 : action
*/
function* listUserPasswordEffect(
  action: ReturnType<typeof userPasswordActions.listData>
) {
  try {
    console.log("on est dans l'effect du get userPassword list");
    const userPasswordList: Array<UserPassword> = yield call(fetchList);
    if (!userPasswordList) throw Error;
    yield put(userPasswordActions.listDataSuccess(userPasswordList));
  } catch (err) {
    yield put(
      userPasswordActions.listDataFailure(
        "app_name",
        buildTechnicalErrorMessage(err)
      )
    );
  }
}
/*
When we call listDataByUser action, fetchData will be called
param0 : action
*/
function* listUserPasswordByUserEffect(
  action: ReturnType<typeof userPasswordActions.listDataByUser>
) {
  try {
    console.log("on est dans l'effect du list images by user");
    const list: Array<UserPassword> = yield call(
      fetchListByUser,
      action.payload
    );
    if (!list) throw Error;
    yield put(userPasswordActions.listDataByUserSuccess(list));
  } catch (err) {
    yield put(
      userPasswordActions.listDataByUserFailure(
        "app_name",
        buildTechnicalErrorMessage(err)
      )
    );
  }
}

/*
the mapping generator
*/
function* userPasswordEffects() {
  yield takeLatest(userPasswordActions.addData.type, addUserPasswordEffect);
  yield takeLatest(userPasswordActions.listData.type, listUserPasswordEffect);
  yield takeLatest(
    userPasswordActions.listDataByUser.type,
    listUserPasswordByUserEffect
  );
  yield takeLatest(
    userPasswordActions.resetData.type,
    resetUserPasswordEffect
  );
}
export default userPasswordEffects;
