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
import { PublicSectionCard, SectionCard } from "../../molecules/card/Card";
import { ArticleOverviewTitle } from "../../atoms/title/Title";
import article_image from "../../../assets/add_article_img.png";
import Article from "@rihenhouli/ttcsm_article/lib/models/Article";
require("./ArticleTemplate.css");
export const ArticleTemplateDetails = () => {
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
 
  const generateSrc = (section: string): string => {
    const image = articleImageList?.find(
      (image) => image.articleSection === section
    )?.articleImagePath;
    const converted = image?.replace(/^public\\/, "");
    const url = "http://localhost:3030/";
    return image ? url + converted : article_image;
  };

  return (
    <div className="wrap_article_template">
      <div className="wrap_article_template_overview_header">
        <ArticleOverviewTitle
          text={article?.articleTitle || ""}
        ></ArticleOverviewTitle>
      </div>
      {sectionsList
        ?.filter((section) => section.article === articleId)
        .map((section, i) => (
          <>
            <PublicSectionCard
              key={i}
              alt={""}
              title={section.articleSectionName}
              content={section.articleSectionContent}
              src={generateSrc(section._id)}
              onClick={undefined}
            ></PublicSectionCard>
          </>
        ))}
    </div>
  );
};
