import { userImageActions } from "./state";
import { call, put, takeLatest, select, race, take } from "redux-saga/effects";
import UserImage from "./models/UserImage";
import { buildTechnicalErrorMessage } from "@rihenhouli/ttcsm_common/lib/utils";
import { getUserImageData } from "./selectors";
import {
  uploadData,
  downloadData,
  updateData,
  fetchData,
  fetchList,
  deleteData,
  restoreData,
  fetchListByUser,
} from "./service";

/*
These methods are for mapping the front actions and the API calls (from the service)
*/
/*When we call uploadData action, uploadData will be called*/
function* addUserImageEffect(
  action: ReturnType<typeof userImageActions.uploadData>
) {
  try {
    console.log("on est dans l'effect du add userImage");
    yield call(uploadData, action.payload);
    yield put(userImageActions.uploadDataSuccess());
  } catch (err) {
    // @ts-ignore
    yield put(userImageActions.uploadDataFailure("app_name"));
  }
}
/*When we call updateData action, updateData will be called
 */
function* updateUserImageEffect(
  action: ReturnType<typeof userImageActions.updateData>
) {
  try {
    console.log("on est dans l'effect du update userImage");
    yield call(updateData, action.payload);
    yield put(userImageActions.updateDataSuccess(action.payload));
  } catch (err) {
    // @ts-ignore
    yield put(userImageActions.updateDataFailure("app_name"));
  }
}
/*
When we call getData action, fetchData will be called
param0 : action
*/
function* getUserImageEffect(
  action: ReturnType<typeof userImageActions.getData>
) {
  try {
    console.log("on est dans l'effect du get userImage");
    const userImage: UserImage = yield call(fetchData, action.payload);
    if (!userImage) throw Error;
    yield put(userImageActions.getDataSuccess(userImage));
  } catch (err) {
    yield put(
      userImageActions.getDataFailure(
        "app_name",
        buildTechnicalErrorMessage(err)
      )
    );
  }
}

/*
When we call listData action, fetchList will be called
param0 : action
*/
function* listUserImageEffect(
  action: ReturnType<typeof userImageActions.listData>
) {
  try {
    console.log("on est dans l'effect du get userImage list");
    const userImageList: Array<UserImage> = yield call(fetchList);
    if (!userImageList) throw Error;
    yield put(userImageActions.listDataSuccess(userImageList));
  } catch (err) {
    yield put(
      userImageActions.listDataFailure(
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
function* listUserImageByUserEffect(
  action: ReturnType<typeof userImageActions.listDataByUser>
) {
  try {
    console.log("on est dans l'effect du list images by user");
    const list: Array<UserImage> = yield call(fetchListByUser, action.payload);
    if (!list) throw Error;
    yield put(userImageActions.listDataByUserSuccess(list));
  } catch (err) {
    yield put(
      userImageActions.listDataByUserFailure(
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
function* deleteUserImageEffect(
    action: ReturnType<typeof userImageActions.deleteData>
  ) {
    try {
      console.log("on est dans l'effect du delete UserImage");
      yield call(deleteData, action.payload);
      yield put(userImageActions.deleteDataSuccess());
    } catch (err) {
      yield put(
        userImageActions.deleteDataFailure(
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
  function* restoreUserImageEffect(
    action: ReturnType<typeof userImageActions.restoreData>
  ) {
    try {
      console.log("on est dans l'effect du restore UserImage");
      yield call(restoreData, action.payload);
      yield put(userImageActions.restoreDataSuccess());
    } catch (err) {
      yield put(
        userImageActions.restoreDataFailure(
          "app_name",
          buildTechnicalErrorMessage(err)
        )
      );
    }
  }
/*
the mapping generator
*/
function* userImageEffects() {
  yield takeLatest(
    userImageActions.uploadData.type,
    addUserImageEffect
  );
  yield takeLatest(
    userImageActions.updateData.type,
    updateUserImageEffect
  );
  yield takeLatest(
    userImageActions.getData.type,
    getUserImageEffect
  );
  yield takeLatest(
    userImageActions.listData.type,
    listUserImageEffect
  );
  yield takeLatest(
    userImageActions.listDataByUser.type,
    listUserImageByUserEffect
  );
  yield takeLatest(
    userImageActions.deleteData.type,
    deleteUserImageEffect
  );
  yield takeLatest(
    userImageActions.restoreData.type,
    restoreUserImageEffect
  );

}
export default userImageEffects;
