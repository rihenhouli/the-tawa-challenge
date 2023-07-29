import { articleImageActions } from "./state";
import { call, put, takeLatest, select, race, take } from "redux-saga/effects";
import ArticleImage from "./models/ArticleImage";
import { buildTechnicalErrorMessage } from "@rihenhouli/ttcsm_common/lib/utils";
import {
  uploadData,
  downloadData,
  updateData,
  fetchData,
  fetchList,
  deleteData,
  restoreData,
  fetchListByArticle,
  fetchListBySection,
} from "./service";

/*
These methods are for mapping the front actions and the API calls (from the service)
*/
/*When we call uploadData action, uploadData will be called*/
function* addArticleImageEffect(
  action: ReturnType<typeof articleImageActions.uploadData>
) {
  try {
    console.log("on est dans l'effect du add articleImage");
    yield call(uploadData, action.payload);
    yield put(articleImageActions.uploadDataSuccess());
  } catch (err) {
    // @ts-ignore
    yield put(articleImageActions.uploadDataFailure("app_name"));
  }
}
/*When we call updateData action, updateData will be called
 */
function* updateArticleImageEffect(
  action: ReturnType<typeof articleImageActions.updateData>
) {
  try {
    console.log("on est dans l'effect du update articleImage");
    yield call(updateData, action.payload);
    yield put(articleImageActions.updateDataSuccess(action.payload));
  } catch (err) {
    // @ts-ignore
    yield put(articleImageActions.updateDataFailure("app_name"));
  }
}
/*
When we call getData action, fetchData will be called
param0 : action
*/
function* getArticleImageEffect(
  action: ReturnType<typeof articleImageActions.getData>
) {
  try {
    console.log("on est dans l'effect du get articleImage");
    const articleImage: ArticleImage = yield call(fetchData, action.payload);
    if (!articleImage) throw Error;
    yield put(articleImageActions.getDataSuccess(articleImage));
  } catch (err) {
    yield put(
      articleImageActions.getDataFailure(
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
function* listArticleImageEffect(
  action: ReturnType<typeof articleImageActions.listData>
) {
  try {
    console.log("on est dans l'effect du get articleImage list");
    const articleImageList: Array<ArticleImage> = yield call(fetchList);
    if (!articleImageList) throw Error;
    yield put(articleImageActions.listDataSuccess(articleImageList));
  } catch (err) {
    yield put(
      articleImageActions.listDataFailure(
        "app_name",
        buildTechnicalErrorMessage(err)
      )
    );
  }
}

/*
When we call listDataByArticle action, fetchData will be called
param0 : action
*/
function* listArticleImageByArticleEffect(
  action: ReturnType<typeof articleImageActions.listDataByArticle>
) {
  try {
    console.log("on est dans l'effect du list images by article");
    const list: Array<ArticleImage> = yield call(fetchListByArticle, action.payload);
    if (!list) throw Error;
    yield put(articleImageActions.listDataByArticleSuccess(list));
  } catch (err) {
    yield put(
      articleImageActions.listDataByArticleFailure(
        "app_name",
        buildTechnicalErrorMessage(err)
      )
    );
  }
}

/*
When we call listDataBySection action, fetchData will be called
param0 : action
*/
function* listArticleImageBySectionEffect(
  action: ReturnType<typeof articleImageActions.listDataBySection>
) {
  try {
    console.log("on est dans l'effect du list images by article");
    const list: Array<ArticleImage> = yield call(fetchListBySection, action.payload);
    if (!list) throw Error;
    yield put(articleImageActions.listDataBySectionSuccess(list));
  } catch (err) {
    yield put(
      articleImageActions.listDataBySectionFailure(
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
function* deleteArticleImageEffect(
    action: ReturnType<typeof articleImageActions.deleteData>
  ) {
    try {
      console.log("on est dans l'effect du delete ArticleImage");
      yield call(deleteData, action.payload);
      yield put(articleImageActions.deleteDataSuccess());
    } catch (err) {
      yield put(
        articleImageActions.deleteDataFailure(
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
  function* restoreArticleImageEffect(
    action: ReturnType<typeof articleImageActions.restoreData>
  ) {
    try {
      console.log("on est dans l'effect du restore ArticleImage");
      yield call(restoreData, action.payload);
      yield put(articleImageActions.restoreDataSuccess());
    } catch (err) {
      yield put(
        articleImageActions.restoreDataFailure(
          "app_name",
          buildTechnicalErrorMessage(err)
        )
      );
    }
  }
/*
the mapping generator
*/
function* articleImageEffects() {
  yield takeLatest(
    articleImageActions.uploadData.type,
    addArticleImageEffect
  );
  yield takeLatest(
    articleImageActions.updateData.type,
    updateArticleImageEffect
  );
  yield takeLatest(
    articleImageActions.getData.type,
    getArticleImageEffect
  );
  yield takeLatest(
    articleImageActions.listData.type,
    listArticleImageEffect
  );
  yield takeLatest(
    articleImageActions.listDataByArticle.type,
    listArticleImageByArticleEffect
  );
  yield takeLatest(
    articleImageActions.listDataBySection.type,
    listArticleImageBySectionEffect
  );
  yield takeLatest(
    articleImageActions.deleteData.type,
    deleteArticleImageEffect
  );
  yield takeLatest(
    articleImageActions.restoreData.type,
    restoreArticleImageEffect
  );

}
export default articleImageEffects;
