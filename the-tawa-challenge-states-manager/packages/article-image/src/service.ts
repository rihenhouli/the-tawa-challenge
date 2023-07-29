import axios from "axios";
import ArticleImage, { ArticleImageDataType } from "./models/ArticleImage";
import { TTCS_URL } from "@rihenhouli/ttcsm_common/lib/utils";

const ARTICLE_IMG_URL = TTCS_URL + "article-image";
/*
API call for uploading a new 
*/
async function uploadData(articleImage: FormData): Promise<void> {
  console.log("upload article image:", articleImage);
  return await axios.post(ARTICLE_IMG_URL + `/upload`, articleImage);
}

/*
API call for getting the data by id
*/
async function downloadData(filename:string): Promise<ArticleImage | undefined> {
  return await axios.get(ARTICLE_IMG_URL + `/download/${filename}`);
}

/*
API call for setting a new informations 
*/
async function updateData(image: ArticleImage): Promise<void> {
  console.log("set image:new image data :", image);
  const newArticleImage = {
    articleImageAlt: image.articleImageAlt,
    isMain: image.isMain,
  };
  console.log("set image newArticleImage: :", newArticleImage);
  return await axios.post(ARTICLE_IMG_URL + `/update/${image._id}`, newArticleImage);
}
/*
API call for getting the data by id
*/
async function fetchData(_id:string): Promise<ArticleImage | undefined> {
  const articleImage = (await axios.get(ARTICLE_IMG_URL + `/${_id}`)).data;
  console.log("fetchData :", articleImage);
  return articleImage;
}
/*
API call for getting the list
*/
async function fetchList(): Promise<Array<ArticleImage>> {
  const list = (await axios.get(ARTICLE_IMG_URL + `/list`)).data;
  console.log("article list:", list);
  return list;
}

/*
API call for getting the list by article
*/
async function fetchListByArticle(article:string): Promise<ArticleImage[] | undefined> {
  const list = (await axios.get(ARTICLE_IMG_URL + `/article/${article}`)).data;
  console.log("fetchListByArticle :", list);
  return list;
}

/*
API call for getting the list by section
*/
async function fetchListBySection(section:string): Promise<ArticleImage[] | undefined> {
  const list = (await axios.get(ARTICLE_IMG_URL + `/section/${section}`)).data;
  console.log("fetchListBySection :", list);
  return list;
}

/*
API call for deleting image
*/
async function deleteData(_id:string): Promise<void> {
  console.log("deleted image id :", _id);
  const deleted = {
  };
  console.log( "deleted",deleted);
  return await axios.post(ARTICLE_IMG_URL + `/delete/${_id}`, deleted);
}

/*
API call for restoring image
*/
async function restoreData(_id:string): Promise<void> {
  console.log("restore article: id :", _id);
  const restored = {
  };
  console.log("restore restored image: :", restored);
  return await axios.post(
    ARTICLE_IMG_URL + `/restore/${_id}`,
    restored
  );
}

// headers: { "x-access-token": "token-value" },
export {
  uploadData,
  downloadData,
  updateData,
  fetchData,
  fetchList,
  fetchListByArticle,
  fetchListBySection,
  deleteData,
  restoreData,
};
