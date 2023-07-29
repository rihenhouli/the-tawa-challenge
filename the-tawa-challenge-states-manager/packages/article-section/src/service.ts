import axios from "axios";
import ArticleSection, { ArticleSectionDataType } from "./models/ArticleSection";
import { TTCS_URL } from "@rihenhouli/ttcsm_common/lib/utils";

const ARTICLE_SECTION_URL = TTCS_URL + "article-section";
/*
API call for adding a new 
*/
async function addData(articleSection: ArticleSection): Promise<void> {
  console.log("add articleSection:", articleSection);
  const newArticleSection = {
    article: articleSection.article,
    articleSectionName: articleSection.articleSectionName,
    articleSectionContent: articleSection.articleSectionContent,
    createdBy: articleSection.createdBy,
    isDeleted: false,
    createdAt: new Date(),
  };
  console.log("add article new ArticleSection: :", newArticleSection);
  return await axios.post(ARTICLE_SECTION_URL + `/add`, newArticleSection);
}


/*
API call for setting a new informations 
*/
async function updateData(articleSection: ArticleSection): Promise<void> {
  console.log("set articleSection:new articleSection data :", articleSection);
  const newArticleSection = {
    articleSectionName: articleSection.articleSectionName,
    articleSectionContent: articleSection.articleSectionContent,
  };
  console.log("set articleSection:", newArticleSection);
  return await axios.post(ARTICLE_SECTION_URL + `/update/${articleSection._id}`, newArticleSection);
}
/*
API call for getting the data by id
*/
async function fetchData(_id:string): Promise<ArticleSection | undefined> {
  const articleSection = (await axios.get(ARTICLE_SECTION_URL + `/${_id}`)).data;
  console.log("fetchData :", articleSection);
  return articleSection;
}
/*
API call for getting the list
*/
async function fetchList(): Promise<Array<ArticleSection>> {
  const list = (await axios.get(ARTICLE_SECTION_URL + `/list`)).data;
  console.log("article list:", list);
  return list;
}

/*
API call for getting the list by article
*/
async function fetchListByArticle(article:string): Promise<ArticleSection[] | undefined> {
  const list = (await axios.get(ARTICLE_SECTION_URL + `/article/${article}`)).data;
  console.log("fetchListByArticle :", list);
  return list;
}

/*
API call for deleting articleSection
*/
async function deleteData(_id:string): Promise<void> {
  console.log("deleted articleSection id :", _id);
  const deleted = {
  };
  console.log( "deleted",deleted);
  return await axios.post(ARTICLE_SECTION_URL + `/delete/${_id}`, deleted);
}

/*
API call for restoring articleSection
*/
async function restoreData(_id:string): Promise<void> {
  console.log("restore article: id :", _id);
  const restored = {
  };
  console.log("restore restored articleSection: :", restored);
  return await axios.post(
    ARTICLE_SECTION_URL + `/restore/${_id}`,
    restored
  );
}

// headers: { "x-access-token": "token-value" },
export {
  addData,
  updateData,
  fetchData,
  fetchList,
  fetchListByArticle,
  deleteData,
  restoreData,
};
