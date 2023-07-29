import React, {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
  MouseEventHandler,
} from "react";
import PropTypes from "prop-types";
import {
  AccountItemCardTitle,
  LoginCardTitle,
  LoginCardTitleResetPassword,
} from "../../atoms/title/Title";
import login_page from "../../../assets/online_article.png";
import {
  AccountItemCardImage,
  LoginCardImage,
  SectionCardImage,
} from "../../atoms/image/Image";
import { Link, To, useNavigate } from "react-router-dom";
import { LoginResetPasswordShowPassword } from "../../atoms/input/Input";
import {
  LoginPageCardItem,
  LoginPageForgotPasswordUsernameCardItem,
  LoginPageResetPasswordCardItem,
} from "../card-item/CardItem";
import {
  LoginButton,
  LoginResetPasswordButton,
} from "../../atoms/button/Button";
import { LoginMessage } from "../../atoms/span/Span";
import {
  LoginCreateAccountAnchor,
  LoginForgotPasswordAnchor,
} from "../../atoms/anchor/Anchor";
import { Badge, Image } from "react-bootstrap";

import user_img from "../../../assets/profile_img.png";
import { Icon } from "@iconify/react";
import Article from "@rihenhouli/ttcsm_article/lib/models/Article";
import { articleActions } from "@rihenhouli/ttcsm_article/lib/state";
import { useDispatch } from "react-redux";
import { MonthNameGenerator } from "../../operations/Month";
import { SuperscriptGenerator } from "../../operations/Superscript";
import { listArticleImageData } from "@rihenhouli/ttcsm_article-image/lib/selectors";
import { listArticleSectionData } from "@rihenhouli/ttcsm_article-section/lib/selectors";
import { useSelector } from "react-redux";

require("./Table.css");

export const ArticleTableRow = (props: { article: Article | undefined }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const listImages = useSelector(listArticleImageData);
  const listSections = useSelector(listArticleSectionData);
  const generateCategoryClassname = (category: string): string => {
    if (category.toLocaleLowerCase() == "generic") {
      return "dark";
    } else if (category.toLocaleLowerCase() == "well being") {
      return "primary";
    } else return "success";
  };
  const generatePublishingClassname = (): string => {
    if (props.article?.publishDate && props.article?.isPublished === true) {
      return "success";
    } else return "secondary";
  };
  const deleteArticle = (event: any) => {
    dispatch(articleActions.deleteData(props.article?._id || ""));
    window.location.reload();
  };

  const restoreArticle = (event: any) => {
    dispatch(articleActions.restoreData(props.article?._id || ""));
    window.location.reload();
  };

  const generateSectionsNumber = (): string => {
    const sections = listSections?.filter(
      (section) => section.article === props.article?._id
    ).length;

    return sections?.toString() || "0";
  };

  const generateImagesNumber = (): string => {
    const articleSections = listSections?.filter(
      (section) => section.article === props.article?._id
    );
    const imagesOfArticle = listImages?.filter((image) =>
      articleSections?.some((section) => section._id === image.articleSection)
    ).length;

    return imagesOfArticle?.toString() || "0";
  };

  const generateCreationDate = (): string => {
    if (props.article?.publishDate && props.article?.isPublished === true) {
      const year = props.article?.publishDate?.toString().substring(0, 4);
      const month = MonthNameGenerator(
        props.article?.publishDate?.toString()?.substring(5, 7) + ""
      );
      const day = props.article?.publishDate?.toString()?.substring(8, 10);
      const superscript = SuperscriptGenerator(parseInt(day + ""));
      const pubDate = month + " " + day + superscript + " ," + year;
      return pubDate;
    } else return "not-published";
  };
  const emptyArticle: Article = {
    _id: "",
    articleTitle: "",
    articleCategory: "",
    isArchived: false,
    isPublished: false,
    publishDate: new Date(),
    createdBy: "",
    isDeleted: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0,
  };
  return (
    <tr className="table-row">
      <td>{props.article?.articleTitle}</td>
      <td>
        <Badge
          className="article_category_badge"
          bg={generateCategoryClassname(props.article?.articleCategory || "")}
        >
          {props.article?.articleCategory}
        </Badge>
      </td>
      <td> 
        {" "}
        <Badge
          className="article_category_badge"
          bg="warning"
        >
          {generateSectionsNumber()}
        </Badge>
      </td>
      <td> 
        {" "}
        <Badge
          className="article_category_badge"
          bg="warning"
        >
          {generateImagesNumber()}
        </Badge>
      </td>
      <td>
        {" "}
        <Badge
          className="article_category_badge"
          bg={generatePublishingClassname()}
        >
          {generateCreationDate()}
        </Badge>
      </td>

      <td colSpan={2}>
        <div className="buttonTab">
          <button
            type="submit"
            className="details_btn"
            onClick={() =>
              navigate(`/dashboard/overview/${props.article?._id}`)
            }
          >
            <Icon icon="bx:detail" className="details" width={25} />
          </button>
          {props.article?.isDeleted === false && (
            <button
              type="submit"
              className="delete_btn"
              onClick={deleteArticle}
            >
              <Icon
                icon="mingcute:delete-2-line"
                className="delete"
                width={25}
              />
            </button>
          )}
          {props.article?.isDeleted === true && (
            <button
              type="submit"
              className="restore_btn"
              onClick={restoreArticle}
            >
              <Icon icon="system-uicons:reset" className="restore" width={25} />
            </button>
          )}
          {/* <button type="submit" className="delete_btn">
            <Icon icon="mingcute:delete-2-line" className="delete" width={25} />
          </button> */}
        </div>
      </td>
    </tr>
  );
};
