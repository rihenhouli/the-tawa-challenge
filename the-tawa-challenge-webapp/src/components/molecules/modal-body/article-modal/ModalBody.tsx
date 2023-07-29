import React, { useEffect, useState } from "react";
import profile_photo from "../../../../assets/profile_img.png";
import {
  AddArticleContentInput,
  AddArticleInput,
  CategoryInput,
} from "../../../atoms/input/Input";
import { Button, Modal } from "react-bootstrap";
import Article from "@rihenhouli/ttcsm_article/lib/models/Article";
import ArticleSection from "@rihenhouli/ttcsm_article-section/lib/models/ArticleSection";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { articleActions } from "@rihenhouli/ttcsm_article/lib/state";
import { articleSectionActions } from "@rihenhouli/ttcsm_article-section/lib/state";
import { articleImageActions } from "@rihenhouli/ttcsm_article-image/lib/state";
import { AddArticleRedirectionModal } from "../../../organisms/modal/article-modal/Modal";
import { AddSectionPictureLabeledInput } from "../../labeled-input/file-labeled-input/FileLabeledInput";
import { SectionModalAddPicImg } from "../../../atoms/image/Image";
import { AddArticleSectionImageLabel } from "../../../atoms/label/Label";
import view_image from "../../../../assets/new_section_image.png"
require("./ModalBody.css");

export const AddArticleModalBody = (props: {}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userNameFromSession = sessionStorage.getItem("userName");
  const userName = userNameFromSession ? JSON.parse(userNameFromSession) : "";
  const [category, setCategory] = useState("Generic");
  const [title, setTitle] = useState("");
  const [isRedirectionShown, setIsRedirectionShown] = useState(false);

  const onCategoryChnage = (event: any) => {
    setCategory(event.target.value);
  };
  const onTitleChnage = (event: any) => {
    setTitle(event.target.value);
  };
  const saveArticle = (event: any) => {
    const newArticle: Article = {
      _id: "",
      articleTitle: title,
      articleCategory: category,
      isArchived: false,
      isPublished: false,
      publishDate: new Date(),
      createdBy: userName,
      isDeleted: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      __v: 0,
    };
    dispatch(articleActions.addData(newArticle));
    const articleIdFromSession = sessionStorage.getItem("articleId");
    const articleId = articleIdFromSession
      ? JSON.parse(articleIdFromSession)
      : "";
    console.log("articleId from add article modal", articleId);
    setIsRedirectionShown(!isRedirectionShown);
  };
  return (
    <Modal.Body
      className="profile_basic_info_change_birthday_modal_body"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div className="add_article_div">
        <div className="add_article_single">
          <AddArticleInput
            onFocus={undefined}
            onBlur={undefined}
            onChange={onTitleChnage}
            value={undefined}
          ></AddArticleInput>
        </div>
        <div className="add_article_single">
          <CategoryInput
            defaultValue={"Generic"}
            onChange={onCategoryChnage}
          ></CategoryInput>
        </div>
        <div className="add_article_btn">
          <Button onClick={saveArticle}>Save</Button>
        </div>
        <AddArticleRedirectionModal
          show={isRedirectionShown}
          articleTitle={title}
        ></AddArticleRedirectionModal>
      </div>
    </Modal.Body>
  );
};

export const AddArticleSectionModalBody = (props: {
  articleId: string | undefined;
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userNameFromSession = sessionStorage.getItem("userName");
  const userName = userNameFromSession ? JSON.parse(userNameFromSession) : "";
  const [content, setCategory] = useState("Generic");
  const [title, setTitle] = useState("");

  const onContentChnage = (event: any) => {
    setCategory(event.target.value);
  };
  const onTitleChnage = (event: any) => {
    setTitle(event.target.value);
  };
  const saveSection = (event: any) => {
    const newSection: ArticleSection = {
      _id: "",
      __v: 0,
      article: props.articleId || "",
      articleSectionName: title,
      articleSectionContent: content,
      addDate: new Date(),
      createdBy: userName,
      isDeleted: false,
    };
    dispatch(articleSectionActions.addData(newSection));
    console.log("new section", newSection);
    dispatch(articleSectionActions.listData());
    window.location.reload();
  };
  return (
    <Modal.Body
      className="profile_basic_info_change_birthday_modal_body"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div className="add_article_div">
        <div className="add_article_single">
          <AddArticleInput
            onFocus={undefined}
            onBlur={undefined}
            onChange={onTitleChnage}
            value={undefined}
          ></AddArticleInput>
        </div>
        <div className="add_article_single add_article_content">
          <AddArticleContentInput
            onFocus={undefined}
            onBlur={undefined}
            onChange={onContentChnage}
            value={undefined}
          ></AddArticleContentInput>
        </div>
        <div className="add_article_btn">
          <Button onClick={saveSection}>Save</Button>
        </div>
      </div>
    </Modal.Body>
  );
};

export const AddArticleSectionImageModalBody = (props: {
  sectionId: string | undefined;
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [uploadingPath, setUploadingPath] = useState(
    view_image
  );
  const [image, setImage]: any = useState();
  const [imageName, setImageName] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isAltValid, setIsAltValid] = useState(false);
  let formData = new FormData();
  const imageSelectedHandler = (e: any) => {
    const photo = e.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedTypes.includes(photo.type)) {
      alert("Please choose a valid image file (JPG, PNG, GIF).");
      setImage(null);
      setImageName("");
      setUploadingPath(
        "https://cdn-icons-png.flaticon.com/512/2095/2095058.png"
      );
      setIsBtnDisabled(true);
      return;
    } else {
      setImage(e.target.files[0]);
      setImageName(e.target.files[0].name);
      setUploadingPath(URL.createObjectURL(photo));
      setIsValid(true);
      setIsBtnDisabled(false);
    }
  };
  useEffect(() => {
    if (isValid && isAltValid) {
      setIsBtnDisabled(false);
    }
  }, [image, imageAlt]);
  const saveImageHandler = (e: any) => {
    formData.append("articleSection", props.sectionId || "");
    formData.append("articleImageAlt", imageAlt);
    formData.append("isMain", "true");
    formData.append("createdBy", userName || "");
    formData.append("image", image);
    console.log("articleSection", props.sectionId);
    console.log(formData);
    console.log(image);
    dispatch(articleImageActions.uploadData(formData));
    window.location.reload();
  };
  const [saveBtnDisabled, setIsBtnDisabled] = React.useState(true);
  const userNameFromSession = sessionStorage.getItem("userName");
  const userName = userNameFromSession ? JSON.parse(userNameFromSession) : "";
  const [content, setCategory] = useState("Generic");
  const [title, setTitle] = useState("");

  const onContentChnage = (event: any) => {
    setCategory(event.target.value);
  };
  const onTitleChnage = (event: any) => {
    setTitle(event.target.value);
  };
  return (
    <Modal.Body
      className="profile_basic_info_change_birthday_modal_body"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div className="add_article_image_div">
        <SectionModalAddPicImg src={uploadingPath}></SectionModalAddPicImg>
        <AddSectionPictureLabeledInput
          text={""}
          onChange={imageSelectedHandler}
        ></AddSectionPictureLabeledInput>
        <div className="registration_step_image_alt">
          <AddArticleSectionImageLabel
            text={"costumize alt? "}
          ></AddArticleSectionImageLabel>
          <input
            onChange={(e: any) => {
              setImageAlt(e.target.value);
              setIsAltValid(true);
            }}
            placeholder="type your alt here.."
          />
        </div>
        <div className="add_article_btn">
          <Button onClick={saveImageHandler}>Save</Button>
        </div>
      </div>
    </Modal.Body>
  );
};

export const UpdateArticleSectionModalBody = (props: {
  section: ArticleSection | undefined;
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userNameFromSession = sessionStorage.getItem("userName");
  const userName = userNameFromSession ? JSON.parse(userNameFromSession) : "";
  const [content, setContent] = useState(props.section?.articleSectionContent||"");
  const [title, setTitle] = useState(props.section?.articleSectionName||"");

  const onContentChnage = (event: any) => {
    setContent(event.target.value);
  };
  const onTitleChnage = (event: any) => {
    setTitle(event.target.value);
  };
  const saveSection = (event: any) => {
    const newSection: ArticleSection = {
      _id: props.section?._id || "",
      __v: props.section?.__v || 0,
      article: props.section?.article || "",
      articleSectionName: title,
      articleSectionContent: content,
      addDate: props.section?.addDate || new Date(),
      createdBy: props.section?.createdBy || "",
      isDeleted: props.section?.isDeleted || false,
    };
    dispatch(articleSectionActions.updateData(newSection));
    console.log("new section", newSection);
    dispatch(articleSectionActions.listData());
    window.location.reload();
  };
  return (
    <Modal.Body
      className="profile_basic_info_change_birthday_modal_body"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div className="add_article_div">
        <div className="add_article_single">
          <AddArticleInput
            onFocus={undefined}
            onBlur={undefined}
            onChange={onTitleChnage}
            value={title}
          ></AddArticleInput>
        </div>
        <div className="add_article_single add_article_content">
          <AddArticleContentInput
            onFocus={undefined}
            onBlur={undefined}
            onChange={onContentChnage}
            value={content}
          ></AddArticleContentInput>
        </div>
        <div className="add_article_btn">
          <Button onClick={saveSection}>Save</Button>
        </div>
      </div>
    </Modal.Body>
  );
};
