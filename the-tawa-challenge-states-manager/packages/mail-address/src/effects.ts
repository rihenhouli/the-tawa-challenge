import { buildTechnicalErrorMessage } from "@rihenhouli/ttcsm_common/lib/utils";
import { call, put, takeLatest, select, race, take } from "redux-saga/effects";
import MailAddress from "./models/MailAddress";
import {
  addData,
  deleteData,
  fetchListByUser,
  fetchData,
  fetchList,
  restoreData,
  updateData,
  declineData,
  fetchDataByValue
} from "./service";

/*
These methods are for mapping the front actions and the API calls (from the service)
*/

import { mailAddressActions } from "./state";

/*
When we call addData action, addData will be called
*/
function* addMailAddressEffect(
  action: ReturnType<typeof mailAddressActions.addData>
) {
  try {
    console.log("on est dans l'effect du add MailAddress");
    yield call(addData, action.payload);
    yield put(mailAddressActions.addDataSuccess());
  } catch (err) {
    // @ts-ignore
    yield put(mailAddressActions.addDataFailure("app_name"));
  }
}

/*
When we call declineData action, declineData will be called
*/
function* declineMailAddressEffect(
  action: ReturnType<typeof mailAddressActions.declineData>
) {
  try {
    console.log("on est dans l'effect du decline MailAddress");
    yield call(declineData, action.payload);
    yield put(mailAddressActions.declineDataSuccess());
  } catch (err) {
    // @ts-ignore
    yield put(mailAddressActions.declineDataFailure("app_name"));
  }
}

/*
When we call updateData action, updateData will be called
*/
function* updateMailAddressEffect(
  action: ReturnType<typeof mailAddressActions.updateData>
) {
  try {
    console.log("on est dans l'effect du set mail address");
    yield call(updateData, action.payload);
    yield put(mailAddressActions.updateDataSuccess(action.payload));
  } catch (err) {
    // @ts-ignore
    yield put(mailAddressActions.updateDataFailure("app_name"));
  }
}

/*
When we call listData action, fetchList will be called
param0 : action
*/
function* listMailAddressEffect(
  action: ReturnType<typeof mailAddressActions.listData>
) {
  try {
    console.log("on est dans l'effect du get MailAddress list");
    const mailAddressList: Array<MailAddress> = yield call(fetchList);
    if (!mailAddressList) throw Error;
    yield put(mailAddressActions.listDataSuccess(mailAddressList));
  } catch (err) {
    yield put(
      mailAddressActions.listDataFailure(
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
function* getMailAddressEffect(
  action: ReturnType<typeof mailAddressActions.getData>
) {
  try {
    console.log("on est dans l'effect du get MailAddress");
    const mailAddress: MailAddress = yield call(fetchData, action.payload);
    if (!MailAddress) throw Error;
    yield put(mailAddressActions.getDataSuccess(mailAddress));
  } catch (err) {
    yield put(
      mailAddressActions.getDataFailure(
        "app_name",
        buildTechnicalErrorMessage(err)
      )
    );
  }
}

/*
When we call getDataByValue action, fetchData will be called
param0 : action
*/
function* getMailAddressByValueEffect(
  action: ReturnType<typeof mailAddressActions.getDataByValue>
) {
  try {
    console.log("on est dans l'effect du get MailAddress");
    const mailAddress: MailAddress = yield call(fetchDataByValue, action.payload);
    if (!MailAddress) throw Error;
    yield put(mailAddressActions.getDataByValueSuccess(mailAddress));
  } catch (err) {
    yield put(
      mailAddressActions.getDataByValueFailure(
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
function* getMailAddressByUserEffect(
  action: ReturnType<typeof mailAddressActions.listDataByUser>
) {
  try {
    console.log("on est dans l'effect du get MailAddress");
    const list: MailAddress[] = yield call(fetchListByUser, action.payload);
    if (!MailAddress) throw Error;
    yield put(mailAddressActions.listDataByUserSuccess(list));
  } catch (err) {
    yield put(
      mailAddressActions.listDataByUserFailure(
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
function* deleteMailAddressEffect(
  action: ReturnType<typeof mailAddressActions.deleteData>
) {
  try {
    console.log("on est dans l'effect du delete MailAddress");
    yield call(deleteData, action.payload);
    yield put(mailAddressActions.deleteDataSuccess());
  } catch (err) {
    yield put(
      mailAddressActions.deleteDataFailure(
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
function* restoreMailAddressEffect(
  action: ReturnType<typeof mailAddressActions.restoreData>
) {
  try {
    yield call(restoreData, action.payload);
    yield put(mailAddressActions.restoreDataSuccess());
  } catch (err) {
    yield put(
      mailAddressActions.restoreDataFailure(
        "app_name",
        buildTechnicalErrorMessage(err)
      )
    );
  }
}

/*
the mapping generator
*/
function* MailAddressEffects() {
  yield takeLatest(mailAddressActions.addData.type, addMailAddressEffect);
  yield takeLatest(mailAddressActions.updateData.type, updateMailAddressEffect);
  yield takeLatest(mailAddressActions.listData.type, listMailAddressEffect);
  yield takeLatest(mailAddressActions.getData.type, getMailAddressEffect);
  yield takeLatest(mailAddressActions.getDataByValue.type, getMailAddressByValueEffect);
  yield takeLatest(
    mailAddressActions.listDataByUser.type,
    getMailAddressByUserEffect
  );
  yield takeLatest(mailAddressActions.deleteData.type, deleteMailAddressEffect);
  yield takeLatest(
    mailAddressActions.restoreData.type,
    restoreMailAddressEffect
  );
}
export default MailAddressEffects;
