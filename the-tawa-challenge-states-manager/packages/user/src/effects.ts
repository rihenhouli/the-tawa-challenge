import { userActions } from "./state";
import { call, put, takeLatest, select, race, take } from "redux-saga/effects";
import User from "./models/User";
import { buildTechnicalErrorMessage } from "@rihenhouli/ttcsm_common/lib/utils";
import { getUserData } from "./selectors";
import {
  addData,
  updateData,
  fetchData,
  fetchList,
  deleteData,
  restoreData,
  confirmData,
} from "./service";

/*
These methods are for mapping the front actions and the API calls (from the service)
*/
/*When we call addData action, addData will be called*/
function* addUserEffect(action: ReturnType<typeof userActions.addData>) {
  try {
    console.log("on est dans l'effect du add user");
    yield call(addData, action.payload);
    yield put(userActions.addDataSuccess());
  } catch (err) {
    // @ts-ignore
    yield put(userActions.addDataFailure("app_name"));
  }
}

/*When we call confirmData action, confirmData will be called*/
function* confirmUserEffect(
  action: ReturnType<typeof userActions.confirmData>
) {
  try {
    console.log("on est dans l'effect du confirm user");
    yield call(confirmData, action.payload);
    yield put(userActions.confirmDataSuccess());
  } catch (err) {
    // @ts-ignore
    yield put(userActions.confirmDataFailure("app_name"));
  }
}

/*When we call updateData action, updateData will be called
 */
function* updateUserEffect(action: ReturnType<typeof userActions.updateData>) {
  try {
    console.log("on est dans l'effect du update user");
    yield call(updateData, action.payload);
    yield put(userActions.updateDataSuccess(action.payload));
  } catch (err) {
    // @ts-ignore
    yield put(userActions.updateDataFailure("app_name"));
  }
}
/*
When we call getData action, fetchData will be called
param0 : action
*/
function* getUserEffect(action: ReturnType<typeof userActions.getData>) {
  try {
    console.log("on est dans l'effect du get user");
    const user: User = yield call(fetchData, action.payload);
    if (!user) throw Error;
    yield put(userActions.getDataSuccess(user));
  } catch (err) {
    yield put(
      userActions.getDataFailure("app_name", buildTechnicalErrorMessage(err))
    );
  }
}

/*
When we call listData action, fetchList will be called
param0 : action
*/
function* listUserEffect(action: ReturnType<typeof userActions.listData>) {
  try {
    console.log("on est dans l'effect du get user list");
    const userList: Array<User> = yield call(fetchList);
    if (!userList) throw Error;
    yield put(userActions.listDataSuccess(userList));
  } catch (err) {
    yield put(
      userActions.listDataFailure("app_name", buildTechnicalErrorMessage(err))
    );
  }
}

/*
When we call deleteData action, deleteData will be called
param0 : action
*/
function* deleteUserEffect(action: ReturnType<typeof userActions.deleteData>) {
  try {
    console.log("on est dans l'effect du delete User");
    yield call(deleteData, action.payload);
    yield put(userActions.deleteDataSuccess());
  } catch (err) {
    yield put(
      userActions.deleteDataFailure("app_name", buildTechnicalErrorMessage(err))
    );
  }
}
/*
  When we call restoreData action, restoreData will be called
  param0 : action
  */
function* restoreUserEffect(
  action: ReturnType<typeof userActions.restoreData>
) {
  try {
    console.log("on est dans l'effect du restore User");
    yield call(restoreData, action.payload);
    yield put(userActions.restoreDataSuccess());
  } catch (err) {
    yield put(
      userActions.restoreDataFailure(
        "app_name",
        buildTechnicalErrorMessage(err)
      )
    );
  }
}
/*
the mapping generator
*/
function* userEffects() {
  yield takeLatest(userActions.addData.type, addUserEffect);
  yield takeLatest(userActions.confirmData.type, confirmUserEffect);
  yield takeLatest(userActions.updateData.type, updateUserEffect);
  yield takeLatest(userActions.getData.type, getUserEffect);
  yield takeLatest(userActions.listData.type, listUserEffect);
  yield takeLatest(userActions.deleteData.type, deleteUserEffect);
  yield takeLatest(userActions.restoreData.type, restoreUserEffect);
}
export default userEffects;
