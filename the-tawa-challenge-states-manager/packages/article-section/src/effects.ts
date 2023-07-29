import { articleSectionActions } from "./state";
import { call, put, takeLatest, select, race, take } from "redux-saga/effects";
import ArticleSection from "./models/ArticleSection";
import { buildTechnicalErrorMessage } from "@rihenhouli/ttcsm_common/lib/utils";
import {
  updateData,
  fetchData,
  fetchList,
  deleteData,
  restoreData,
  fetchListByArticle,
  addData,
} from "./service";

/*
These methods are for mapping the front actions and the API calls (from the service)
*/
/*When we call addData action, addData will be called*/
function* addArticleSectionEffect(
  action: ReturnType<typeof articleSectionActions.addData>
) {
  try {
    console.log("on est dans l'effect du add articleSection");
    yield call(addData, action.payload);
    yield put(articleSectionActions.addDataSuccess());
  } catch (err) {
    // @ts-ignore
    yield put(articleSectionActions.addDataFailure("app_name"));
  }
}
/*When we call updateData action, updateData will be called
 */
function* updateArticleSectionEffect(
  action: ReturnType<typeof articleSectionActions.updateData>
) {
  try {
    console.log("on est dans l'effect du update articleSection");
    yield call(updateData, action.payload);
    yield put(articleSectionActions.updateDataSuccess(action.payload));
  } catch (err) {
    // @ts-ignore
    yield put(articleSectionActions.updateDataFailure("app_name"));
  }
}
/*
When we call getData action, fetchData will be called
param0 : action
*/
function* getArticleSectionEffect(
  action: ReturnType<typeof articleSectionActions.getData>
) {
  try {
    console.log("on est dans l'effect du get articleSection");
    const articleSection: ArticleSection = yield call(fetchData, action.payload);
    if (!articleSection) throw Error;
    yield put(articleSectionActions.getDataSuccess(articleSection));
  } catch (err) {
    yield put(
      articleSectionActions.getDataFailure(
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
function* listArticleSectionEffect(
  action: ReturnType<typeof articleSectionActions.listData>
) {
  try {
    console.log("on est dans l'effect du get articleSection list");
    const articleSectionList: Array<ArticleSection> = yield call(fetchList);
    if (!articleSectionList) throw Error;
    yield put(articleSectionActions.listDataSuccess(articleSectionList));
  } catch (err) {
    yield put(
      articleSectionActions.listDataFailure(
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
function* listArticleSectionByArticleEffect(
  action: ReturnType<typeof articleSectionActions.listDataByArticle>
) {
  try {
    console.log("on est dans l'effect du list images by article");
    const list: Array<ArticleSection> = yield call(fetchListByArticle, action.payload);
    if (!list) throw Error;
    yield put(articleSectionActions.listDataByArticleSuccess(list));
  } catch (err) {
    yield put(
      articleSectionActions.listDataByArticleFailure(
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
function* deleteArticleSectionEffect(
    action: ReturnType<typeof articleSectionActions.deleteData>
  ) {
    try {
      console.log("on est dans l'effect du delete ArticleSection");
      yield call(deleteData, action.payload);
      yield put(articleSectionActions.deleteDataSuccess());
    } catch (err) {
      yield put(
        articleSectionActions.deleteDataFailure(
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
  function* restoreArticleSectionEffect(
    action: ReturnType<typeof articleSectionActions.restoreData>
  ) {
    try {
      console.log("on est dans l'effect du restore ArticleSection");
      yield call(restoreData, action.payload);
      yield put(articleSectionActions.restoreDataSuccess());
    } catch (err) {
      yield put(
        articleSectionActions.restoreDataFailure(
          "app_name",
          buildTechnicalErrorMessage(err)
        )
      );
    }
  }
/*
the mapping generator
*/
function* articleSectionEffects() {
  yield takeLatest(
    articleSectionActions.addData.type,
    addArticleSectionEffect
  );
  yield takeLatest(
    articleSectionActions.updateData.type,
    updateArticleSectionEffect
  );
  yield takeLatest(
    articleSectionActions.getData.type,
    getArticleSectionEffect
  );
  yield takeLatest(
    articleSectionActions.listData.type,
    listArticleSectionEffect
  );
  yield takeLatest(
    articleSectionActions.listDataByArticle.type,
    listArticleSectionByArticleEffect
  );
  yield takeLatest(
    articleSectionActions.deleteData.type,
    deleteArticleSectionEffect
  );
  yield takeLatest(
    articleSectionActions.restoreData.type,
    restoreArticleSectionEffect
  );

}
export default articleSectionEffects;
