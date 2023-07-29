import  { FC, useEffect } from "react";
import {  useDispatch } from "react-redux";
import { ArticleTemplate, BlogTemplate } from "../../components/templates/article-template/ArticleTemplate";
import { ArticleTemplateOverview } from "../../components/templates/article-template/ArticleTemplateOverview";
import { articleActions } from "@rihenhouli/ttcsm_article/lib/state";
import { userActions } from "@rihenhouli/ttcsm_user/lib/state";
import { articleSectionActions } from "@rihenhouli/ttcsm_article-section/lib/state";
import { articleImageActions } from "@rihenhouli/ttcsm_article-image/lib/state";
import { ArticleTemplateDetails } from "../../components/templates/article-template/ArticleTemplateDetails";

interface IProps {}
export const BlogPage: FC<IProps> = () => {
  const dispatch = useDispatch();
  const userIdFromSession = sessionStorage.getItem("userId");
  const userId = userIdFromSession ? JSON.parse(userIdFromSession) : "";

  useEffect(() => {
    dispatch(userActions.listData());
    dispatch(articleActions.listData());
    dispatch(articleImageActions.listData());
    dispatch(articleSectionActions.listData());
  }, [ userId]);

  return (
    <div className="page_component">
      <BlogTemplate></BlogTemplate>
    </div>
  );
};

export const ArticlePage: FC<IProps> = () => {
  const dispatch = useDispatch();
  const userIdFromSession = sessionStorage.getItem("userId");
  const userId = userIdFromSession ? JSON.parse(userIdFromSession) : "";

  useEffect(() => {
    dispatch(userActions.listData());
    dispatch(articleActions.listData());
    dispatch(articleImageActions.listData());
    dispatch(articleSectionActions.listData());
  }, [ userId]);

  return (
    <div className="page_component">
      <ArticleTemplate></ArticleTemplate>
    </div>
  );
};



export const SingleArticlePage: FC<IProps> = () => {
  const dispatch = useDispatch();
  const articleIdFromSession = sessionStorage.getItem("articleId");
  const articleId = articleIdFromSession ? JSON.parse(articleIdFromSession) : "";
  return (
    <div className="page_component">
      <ArticleTemplateOverview></ArticleTemplateOverview>
    </div>
  );
};

export const DetailArticlePage: FC<IProps> = () => {
  const dispatch = useDispatch();
  const articleIdFromSession = sessionStorage.getItem("articleId");
  const articleId = articleIdFromSession ? JSON.parse(articleIdFromSession) : "";
  return (
    <div className="page_component">
      <ArticleTemplateDetails></ArticleTemplateDetails>
    </div>
  );
};


