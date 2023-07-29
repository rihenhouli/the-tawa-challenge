import axios from "axios";
import Article, { ArticleDataType } from "./models/Article";
import { TTCS_URL } from "@rihenhouli/ttcsm_common/lib/utils";

const ARTICLE_URL = TTCS_URL + "article";
/*
API call for adding a new 
*/
async function addData(article: Article): Promise<any> {
  console.log("add article:", article);
  const newArticle = {
    articleTitle: article.articleTitle,
    articleCategory: article.articleCategory,
    isArchived: false,
    createdBy: article.createdBy,
    isDeleted: false,
    createdAt: new Date(),
  };
  console.log("add article new Article: :", newArticle);
  return axios.post(ARTICLE_URL + `/add`, newArticle).then((response) => {
    if (response.data.articleId) {
      sessionStorage.setItem(
        "articleId",
        JSON.stringify(response.data.articleId)
      );
      sessionStorage.setItem(
        "articleTitle",
        JSON.stringify(response.data.articleTitle)
      );
      sessionStorage.setItem(
        "articleCategory",
        JSON.stringify(response.data.articleCategory)
      );
    }
    return response.data;
  });
}

/*
API call for publishing a new 
*/
async function publishData(article: string): Promise<void> {
  console.log("publish article:", article);
  const newArticle = {
    article: article,
  };
  return await axios.post(ARTICLE_URL + `/publish`, newArticle);
}
/*
API call for setting a new informations 
*/
async function updateData(article: Article): Promise<void> {
  console.log("set article:new article data :", article);
  const newArticle = {
    articleTitle: article.articleTitle,
    articleCategory: article.articleCategory,
    isArchived: article.isArchived,
    isPublished: article.isPublished,
    publishDate: article.publishDate,

  };
  console.log("set article newArticle: :", newArticle);
  return await axios.post(ARTICLE_URL + `/update/${article._id}`, newArticle);
}
/*
API call for getting the data by id
*/
async function fetchData(_id: string): Promise<Article | undefined> {
  const article = (await axios.get(ARTICLE_URL + `/${_id}`)).data;
  console.log("fetchData :", article);
  return article;
}
/*
API call for getting the list
*/
async function fetchList(): Promise<Array<Article>> {
  const list = (await axios.get(ARTICLE_URL + `/list`)).data;
  console.log("article list:", list);
  return list;
}

/*
API call for deleting article
*/
async function deleteData(_id: string): Promise<void> {
  console.log("deleted article id :", _id);
  const deleted = {
  };
  console.log("deleted", deleted);
  return await axios.post(ARTICLE_URL + `/delete/${_id}`, deleted);
}

/*
API call for restoring article
*/
async function restoreData(_id: string): Promise<void> {
  console.log("restore article: id :", _id);
  const restored = {
  };
  console.log("restore restored article: :", restored);
  return await axios.post(ARTICLE_URL + `/restore/${_id}`, restored);
}

// headers: { "x-access-token": "token-value" },
export {
  addData,
  updateData,
  fetchData,
  fetchList,
  deleteData,
  restoreData,
  publishData,
};
