import { useDispatch, useSelector } from "react-redux";
import { getArticleData } from "@rihenhouli/ttcsm_article/lib/selectors";
import { listArticleData } from "@rihenhouli/ttcsm_article/lib/selectors";
import { listArticleSectionData } from "@rihenhouli/ttcsm_article-section/lib/selectors";
import { listArticleImageData } from "@rihenhouli/ttcsm_article-image/lib/selectors";
import { ArticleCardList } from "../../organisms/article-list/ArticleCardList";
import { articleActions } from "@rihenhouli/ttcsm_article/lib/state";
import { articleImageActions } from "@rihenhouli/ttcsm_article-image/lib/state";
import { articleSectionActions } from "@rihenhouli/ttcsm_article-section/lib/state";
import { userActions } from "@rihenhouli/ttcsm_user/lib/state";
import { Button } from "react-bootstrap";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  AddArticleSectionImageModal,
  AddArticleSectionModal,
  UpdateArticleSectionModal,
} from "../../organisms/modal/article-modal/Modal";
import { SectionCard } from "../../molecules/card/Card";
import { ArticleOverviewTitle } from "../../atoms/title/Title";
import article_image from "../../../assets/add_article_img.png";
import Article from "@rihenhouli/ttcsm_article/lib/models/Article";
require("./ArticleTemplate.css");
export const ArticleTemplateOverview = () => {
  const { articleId } = useParams();
  const articleList = useSelector(listArticleData);
  const articleR = useSelector(getArticleData);
  const articleSectionList = useSelector(listArticleSectionData);
  const articleImageList = useSelector(listArticleImageData);
  let sectionsList = articleSectionList;
  const article = articleList?.find((article) => article._id === articleId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [addArticleShow, setAddArticleShow] = React.useState(false);
  const [addImageShow, setAddImageShow] = React.useState(false);
  const [updateArticleShow, setUpdateArticleShow] = React.useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("articleId")) {
      sessionStorage.removeItem("articleId");
      sessionStorage.removeItem("articleTitle");
      sessionStorage.removeItem("articleCategory");
    }
    dispatch(articleActions.listData());
    dispatch(articleActions.getData(articleId || ""));
    dispatch(articleImageActions.listData());
    dispatch(articleSectionActions.listData());
  }, [articleId]);
  const QuitAddModal = () => {
    setAddArticleShow(!addArticleShow);
  };
  const QuitUpdateModal = () => {
    setAddArticleShow(!addArticleShow);
  };

  const openAddSectionModal = () => {
    setAddArticleShow(!addArticleShow);
  };

  const openAddSectionImageModal = () => {
    setAddImageShow(!addImageShow);
  };
  const generateSrc = (section: string): string => {
    const image = articleImageList?.find(
      (image) => image.articleSection === section
    )?.articleImagePath;
    const converted = image?.replace(/^public\\/, "");
    const url = "http://localhost:3030/";
    return image ? url + converted : article_image;
  };

  const publishArticle = (event: any) => {
    const publishedArticle: Article = {
      _id: articleId || "",
      articleTitle: article?.articleTitle || "",
      articleCategory: article?.articleCategory || "",
      isArchived: article?.isArchived || false,
      isPublished: true,
      publishDate: new Date(),
      createdBy: article?.createdBy || "",
      isDeleted: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      __v: 0,
    };
    dispatch(articleActions.updateData(publishedArticle));
    window.location.reload();
  };
  const archiveArticle = (event: any) => {
    const archivedArticle: Article = {
      _id: articleId || "",
      articleTitle: article?.articleTitle || "",
      articleCategory: article?.articleCategory || "",
      isArchived: true,
      isPublished: article?.isPublished || false,
      publishDate: article?.publishDate || new Date(),
      createdBy: article?.createdBy || "",
      isDeleted: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      __v: 0,
    };
    dispatch(articleActions.updateData(archivedArticle));
    window.location.reload();
  };

  const extractArticle = (event: any) => {
    const extractedArticle: Article = {
      _id: articleId || "",
      articleTitle: article?.articleTitle || "",
      articleCategory: article?.articleCategory || "",
      isArchived: false,
      isPublished: article?.isPublished || false,
      publishDate: article?.publishDate || new Date(),
      createdBy: article?.createdBy || "",
      isDeleted: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      __v: 0,
    };
    dispatch(articleActions.updateData(extractedArticle));
    window.location.reload();
  };

  const deleteArticle = (event: any) => {
    dispatch(articleActions.deleteData(article?._id || ""));
    window.location.reload();
  };

  const restoreArticle = (event: any) => {
    dispatch(articleActions.restoreData(article?._id || ""));
    window.location.reload();
  };

  const deleteArticleSection = (section: string) => {
    dispatch(articleSectionActions.deleteData(section));
    window.location.reload();
  };

  const restoreArticleSection = (section: string) => {
    dispatch(articleActions.restoreData(section));
    window.location.reload();
  };

  return (
    <div className="wrap_article_template">
      <div className="wrap_article_template_overview_header">
        <ArticleOverviewTitle
          text={article?.articleTitle || ""}
        ></ArticleOverviewTitle>
        <div>
          {article?.isPublished === false && (
            <Button
              onClick={publishArticle}
              variant="success"
              className="publish_btn"
            >
              publish
            </Button>
          )}
          {article?.isArchived === false && (
            <Button
              onClick={archiveArticle}
              variant="dark"
              className="publish_btn"
            >
              Archive
            </Button>
          )}
          {article?.isArchived === true && (
            <Button
              onClick={extractArticle}
              variant="secondary"
              className="publish_btn"
            >
              Extract
            </Button>
          )}
          {article?.isDeleted === false && (
            <Button
              onClick={deleteArticle}
              variant="danger"
              className="publish_btn"
            >
              Delete
            </Button>
          )}
          {article?.isDeleted === true && (
            <Button
              onClick={restoreArticle}
              variant="info"
              className="publish_btn"
            >
              Restore
            </Button>
          )}
        </div>
      </div>
      {sectionsList
        ?.filter((section) => section.article === articleId)
        .map((section, i) => (
          <>
            <SectionCard
              key={i}
              alt={""}
              title={section.articleSectionName}
              content={section.articleSectionContent}
              src={generateSrc(section._id)}
              onClick={openAddSectionImageModal}
              isDeleted={section.isDeleted}
              onClickUpdate={() => setUpdateArticleShow(true)}
              onClickDelete={() => {
                dispatch(articleSectionActions.deleteData(section._id));
              }}
              onClickRestore={() => {
                dispatch(articleSectionActions.restoreData(section._id));
                window.location.reload();
              }}
            ></SectionCard>
            <AddArticleSectionImageModal
              sectionId={section._id}
              show={addImageShow}
              onClick={undefined}
            ></AddArticleSectionImageModal>
            <UpdateArticleSectionModal
              show={updateArticleShow}
              onClick={QuitUpdateModal}
              section={section}
            ></UpdateArticleSectionModal>
          </>
        ))}
      <div className="add_section_btn_div">
        <Button onClick={openAddSectionModal}>New Section</Button>
      </div>
      <AddArticleSectionModal
        show={addArticleShow}
        onClick={QuitAddModal}
        articleId={article?._id}
      ></AddArticleSectionModal>
    </div>
  );
};
