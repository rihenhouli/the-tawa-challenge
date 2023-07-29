import { useDispatch, useSelector } from "react-redux";
import { listArticleData } from "@rihenhouli/ttcsm_article/lib/selectors";
import { ArticleCardList } from "../../organisms/article-list/ArticleCardList";
import { articleActions } from "@rihenhouli/ttcsm_article/lib/state";
import { articleImageActions } from "@rihenhouli/ttcsm_article-image/lib/state";
import { articleSectionActions } from "@rihenhouli/ttcsm_article-section/lib/state";
import { userActions } from "@rihenhouli/ttcsm_user/lib/state";
import { Button } from "react-bootstrap";
import React, { useEffect } from "react";
import { AddArticleModal } from "../../organisms/modal/article-modal/Modal";
import { useNavigate } from "react-router-dom";
import { ArticleTable } from "../../organisms/article-list/ArticleTable";
import { userImageActions } from "@rihenhouli/ttcsm_user-image/lib/state";

require("./ArticleTemplate.css");
export const BlogTemplate = () => {
  const navigate = useNavigate();
  const articleList = useSelector(listArticleData);
  const dispatch = useDispatch();

  const [addArticleShow, setAddArticleShow] = React.useState(false);

  const QuitAddModal = () => {
    setAddArticleShow(!addArticleShow);
  };

  const openAddModal = () => {
    setAddArticleShow(!addArticleShow);
  };
  const openList = () => {
    dispatch(articleActions.listData());
    dispatch(articleImageActions.listData());
    dispatch(articleSectionActions.listData());
    dispatch(userActions.listData());
    dispatch(userImageActions.listData());
    navigate('/dashboard/articles')
  };

  return (
    <div className="wrap_article_template">
      <div  className="wrap_article_template_header">
        <Button className="add_article_btn_list" onClick={openAddModal}>
          Add article
        </Button>
        <label className="add_article_btn_list_label">BLOG</label>
        <Button className="add_article_btn_list" onClick={openList}>
          My Articles
        </Button>
      </div>
      <AddArticleModal
        show={addArticleShow}
        onClick={QuitAddModal}
      ></AddArticleModal>
      <ArticleCardList></ArticleCardList>
    </div>
  );
};


export const ArticleTemplate = () => {
  const navigate = useNavigate();
  const articleList = useSelector(listArticleData);
  const dispatch = useDispatch();
  const [addArticleShow, setAddArticleShow] = React.useState(false);

  const QuitAddModal = () => {
    setAddArticleShow(!addArticleShow);
  };

  const openAddModal = () => {
    setAddArticleShow(!addArticleShow);
  };
  const openList = () => {
    dispatch(articleActions.listData());
    dispatch(articleImageActions.listData());
    dispatch(articleSectionActions.listData());
    dispatch(userActions.listData());
    dispatch(userImageActions.listData());
    navigate('/dashboard/blog')
  };

  return (
    <div className="wrap_article_template">
      <div  className="wrap_article_template_header">
        <Button className="add_article_btn_list" onClick={openAddModal}>
          Add article
        </Button>
        <label className="add_article_btn_list_label">My Articles</label>
        <Button className="add_article_btn_list" onClick={openList}>
          Blog
        </Button>
      </div>
      <AddArticleModal
        show={addArticleShow}
        onClick={QuitAddModal}
      ></AddArticleModal>
      <ArticleTable></ArticleTable>
    </div>
  );
};
