import { articleActions } from "./state";
import { call, put, takeLatest, select, race, take } from "redux-saga/effects";
import Article from "./models/Article";
import { buildTechnicalErrorMessage } from "@rihenhouli/ttcsm_common/lib/utils";
import {
  addData,
  updateData,
  fetchData,
  fetchList,
  deleteData,
  restoreData,
  publishData,
} from "./service";

/*
These methods are for mapping the front actions and the API calls (from the service)
*/
/*When we call addData action, addData will be called*/
function* addArticleEffect(action: ReturnType<typeof articleActions.addData>) {
  try {
    console.log("on est dans l'effect du add article");
    yield call(addData, action.payload);
    yield put(articleActions.addDataSuccess());
  } catch (err) {
    // @ts-ignore
    yield put(articleActions.addDataFailure("app_name"));
  }
}

/*When we call publishData action, publishData will be called*/
function* publishArticleEffect(
  action: ReturnType<typeof articleActions.publishData>
) {
  try {
    console.log("on est dans l'effect du publish article");
    yield call(publishData, action.payload);
    yield put(articleActions.publishDataSuccess());
  } catch (err) {
    // @ts-ignore
    yield put(articleActions.publishDataFailure("app_name"));
  }
}

/*When we call updateData action, updateData will be called
 */
function* updateArticleEffect(action: ReturnType<typeof articleActions.updateData>) {
  try {
    console.log("on est dans l'effect du update article");
    yield call(updateData, action.payload);
    yield put(articleActions.updateDataSuccess(action.payload));
  } catch (err) {
    // @ts-ignore
    yield put(articleActions.updateDataFailure("app_name"));
  }
}
/*
When we call getData action, fetchData will be called
param0 : action
*/
function* getArticleEffect(action: ReturnType<typeof articleActions.getData>) {
  try {
    console.log("on est dans l'effect du get article");
    const article: Article = yield call(fetchData, action.payload);
    if (!article) throw Error;
    yield put(articleActions.getDataSuccess(article));
  } catch (err) {
    yield put(
      articleActions.getDataFailure("app_name", buildTechnicalErrorMessage(err))
    );
  }
}

/*
When we call listData action, fetchList will be called
param0 : action
*/
function* listArticleEffect(action: ReturnType<typeof articleActions.listData>) {
  try {
    console.log("on est dans l'effect du get article list");
    const articleList: Array<Article> = yield call(fetchList);
    if (!articleList) throw Error;
    yield put(articleActions.listDataSuccess(articleList));
  } catch (err) {
    yield put(
      articleActions.listDataFailure("app_name", buildTechnicalErrorMessage(err))
    );
  }
}

/*
When we call deleteData action, deleteData will be called
param0 : action
*/
function* deleteArticleEffect(action: ReturnType<typeof articleActions.deleteData>) {
  try {
    console.log("on est dans l'effect du delete Article");
    yield call(deleteData, action.payload);
    yield put(articleActions.deleteDataSuccess());
  } catch (err) {
    yield put(
      articleActions.deleteDataFailure("app_name", buildTechnicalErrorMessage(err))
    );
  }
}
/*
  When we call restoreData action, restoreData will be called
  param0 : action
  */
function* restoreArticleEffect(
  action: ReturnType<typeof articleActions.restoreData>
) {
  try {
    console.log("on est dans l'effect du restore Article");
    yield call(restoreData, action.payload);
    yield put(articleActions.restoreDataSuccess());
  } catch (err) {
    yield put(
      articleActions.restoreDataFailure(
        "app_name",
        buildTechnicalErrorMessage(err)
      )
    );
  }
}
/*
the mapping generator
*/
function* articleEffects() {
  yield takeLatest(articleActions.addData.type, addArticleEffect);
  yield takeLatest(articleActions.publishData.type, publishArticleEffect);
  yield takeLatest(articleActions.updateData.type, updateArticleEffect);
  yield takeLatest(articleActions.getData.type, getArticleEffect);
  yield takeLatest(articleActions.listData.type, listArticleEffect);
  yield takeLatest(articleActions.deleteData.type, deleteArticleEffect);
  yield takeLatest(articleActions.restoreData.type, restoreArticleEffect);
}
export default articleEffects;
