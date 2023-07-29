import { buildTechnicalErrorMessage } from "@rihenhouli/ttcsm_common/lib/utils";
import { call, put, takeLatest, select, race, take } from "redux-saga/effects";
import PhoneNumber from "./models/PhoneNumber";
import {
  addData,
  deleteData,
  fetchListByUser,
  fetchData,
  fetchList,
  restoreData,
  updateData,
} from "./service";

/*
These methods are for mapping the front actions and the API calls (from the service)
*/

import { phoneNumberActions } from "./state";

/*
When we call addData action, addData will be called
*/
function* addPhoneNumberEffect(
  action: ReturnType<typeof phoneNumberActions.addData>
) {
  try {
    console.log("on est dans l'effect du add PhoneNumber");
    yield call(addData, action.payload);
    yield put(phoneNumberActions.addDataSuccess());
  } catch (err) {
    // @ts-ignore
    yield put(phoneNumberActions.addDataFailure("app_name"));
  }
}
/*
When we call updateData action, updateData will be called
*/
function* updatePhoneNumberEffect(
  action: ReturnType<typeof phoneNumberActions.updateData>
) {
  try {
    console.log("on est dans l'effect du set mail address");
    yield call(updateData, action.payload);
    yield put(phoneNumberActions.updateDataSuccess(action.payload));
  } catch (err) {
    // @ts-ignore
    yield put(phoneNumberActions.updateDataFailure("app_name"));
  }
}

/*
When we call listData action, fetchList will be called
param0 : action
*/
function* listPhoneNumberEffect(
  action: ReturnType<typeof phoneNumberActions.listData>
) {
  try {
    console.log("on est dans l'effect du get PhoneNumber list");
    const phoneNumberList: Array<PhoneNumber> = yield call(fetchList);
    if (!phoneNumberList) throw Error;
    yield put(phoneNumberActions.listDataSuccess(phoneNumberList));
  } catch (err) {
    yield put(
      phoneNumberActions.listDataFailure(
        "app_name",
        buildTechnicalErrorMessage(err)
      )
    );
  }
}

/*
When we call getData action, fetchData will be called
param0 : action
*/
function* getPhoneNumberEffect(
  action: ReturnType<typeof phoneNumberActions.getData>
) {
  try {
    console.log("on est dans l'effect du get PhoneNumber");
    const phoneNumber: PhoneNumber = yield call(fetchData, action.payload);
    if (!PhoneNumber) throw Error;
    yield put(phoneNumberActions.getDataSuccess(phoneNumber));
  } catch (err) {
    yield put(
      phoneNumberActions.getDataFailure(
        "app_name",
        buildTechnicalErrorMessage(err)
      )
    );
  }
}

/*
When we call listDataByUser action, fetchListByUser will be called
param0 : action
*/
function* getPhoneNumberByUserEffect(
  action: ReturnType<typeof phoneNumberActions.listDataByUser>
) {
  try {
    console.log("on est dans l'effect du get PhoneNumber");
    const list: PhoneNumber[] = yield call(fetchListByUser, action.payload);
    if (!PhoneNumber) throw Error;
    yield put(phoneNumberActions.listDataByUserSuccess(list));
  } catch (err) {
    yield put(
      phoneNumberActions.listDataByUserFailure(
        "app_name",
        buildTechnicalErrorMessage(err)
      )
    );
  }
}

/*
When we call deleteData action, deleteData will be called
param0 : action
*/
function* deletePhoneNumberEffect(
  action: ReturnType<typeof phoneNumberActions.deleteData>
) {
  try {
    console.log("on est dans l'effect du delete PhoneNumber");
    yield call(deleteData, action.payload);
    yield put(phoneNumberActions.deleteDataSuccess());
  } catch (err) {
    yield put(
      phoneNumberActions.deleteDataFailure(
        "app_name",
        buildTechnicalErrorMessage(err)
      )
    );
  }
}
/*
When we call restoreData action, restoreData will be called
param0 : action
*/
function* restorePhoneNumberEffect(
  action: ReturnType<typeof phoneNumberActions.restoreData>
) {
  try {
    yield call(restoreData, action.payload);
    yield put(phoneNumberActions.restoreDataSuccess());
  } catch (err) {
    yield put(
      phoneNumberActions.restoreDataFailure(
        "app_name",
        buildTechnicalErrorMessage(err)
      )
    );
  }
}

/*
the mapping generator
*/
function* PhoneNumberEffects() {
  yield takeLatest(phoneNumberActions.addData.type, addPhoneNumberEffect);
  yield takeLatest(phoneNumberActions.updateData.type, updatePhoneNumberEffect);
  yield takeLatest(phoneNumberActions.listData.type, listPhoneNumberEffect);
  yield takeLatest(phoneNumberActions.getData.type, getPhoneNumberEffect);
  yield takeLatest(
    phoneNumberActions.listDataByUser.type,
    getPhoneNumberByUserEffect
  );
  yield takeLatest(phoneNumberActions.deleteData.type, deletePhoneNumberEffect);
  yield takeLatest(
    phoneNumberActions.restoreData.type,
    restorePhoneNumberEffect
  );
}
export default PhoneNumberEffects;
