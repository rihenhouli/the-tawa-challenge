import { MouseEventHandler } from "react";
import { Button, Modal } from "react-bootstrap";
import { AddArticleModalFooter, AddArticleSectionImageModalFooter, AddArticleSectionModalFooter } from "../../../molecules/modal-footer/ModalFooter";
import { AddArticleModalHeader, AddArticleSectionImageModalHeader, AddArticleSectionModalHeader, UpdateArticleSectionModalHeader } from "../../../molecules/modal-header/ModalHeader";
import { AddArticleModalBody, AddArticleSectionImageModalBody, AddArticleSectionModalBody, UpdateArticleSectionModalBody } from "../../../molecules/modal-body/article-modal/ModalBody";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ArticleSection from "@rihenhouli/ttcsm_article-section/lib/models/ArticleSection";

require("./Modal.css");

export const AddArticleModal = (props: {
  show: boolean | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <Modal
      backdrop="static"
      className="profile_basic_info_add_photo_modal"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      animation={false}
      keyboard={false}
    >
      <AddArticleModalHeader onClick={props.onClick}></AddArticleModalHeader>
      <AddArticleModalBody></AddArticleModalBody>
      <AddArticleModalFooter></AddArticleModalFooter>
    </Modal>
  );
};

export const AddArticleSectionModal = (props: {
  articleId: string | undefined;
  show: boolean | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <Modal
      backdrop="static"
      className="profile_basic_info_add_photo_modal"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      animation={false}
      keyboard={false}
    >
      <AddArticleSectionModalHeader onClick={props.onClick}></AddArticleSectionModalHeader>
      <AddArticleSectionModalBody articleId={props.articleId}></AddArticleSectionModalBody>
      <AddArticleSectionModalFooter></AddArticleSectionModalFooter>
    </Modal>
  );
};

export const UpdateArticleSectionModal = (props: {
  section: ArticleSection | undefined;
  show: boolean | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <Modal
      backdrop="static"
      className="profile_basic_info_add_photo_modal"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      animation={false}
      keyboard={false}
    >
      <UpdateArticleSectionModalHeader onClick={props.onClick}></UpdateArticleSectionModalHeader>
      <UpdateArticleSectionModalBody section={props.section}></UpdateArticleSectionModalBody>
      <AddArticleSectionModalFooter></AddArticleSectionModalFooter>
    </Modal>
  );
};

export const AddArticleRedirectionModal = (props: {
  show: boolean | undefined;
  articleTitle: string | undefined;
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const backToList = (e: any) => {};
  const redirectToOverview = (e: any) => {
    console.log("Redirecting to article overview");
    const articleIdFromSession = sessionStorage.getItem("articleId");
    const articleId = articleIdFromSession
      ? JSON.parse(articleIdFromSession)
      : "nothing";
      console.log("articleId from add article modal", articleId);
    navigate(`/dashboard/overview/${articleId}`);
  };

  return (
    <Modal
      backdrop="static"
      className="profile_basic_info_add_photo_modal"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      animation={false}
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.articleTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Do you wanna be redirected to the article overview so you would make
          more actions?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={backToList}>
          Cancel
        </Button>
        <Button variant="primary" onClick={redirectToOverview}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};


export const AddArticleSectionImageModal = (props: {
  sectionId: string | undefined;
  show: boolean | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <Modal
      backdrop="static"
      className="profile_basic_info_add_photo_modal"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      animation={false}
      keyboard={false}
    >
      <AddArticleSectionImageModalHeader onClick={props.onClick}></AddArticleSectionImageModalHeader>
      <AddArticleSectionImageModalBody sectionId={props.sectionId}></AddArticleSectionImageModalBody>
      <AddArticleSectionImageModalFooter></AddArticleSectionImageModalFooter>
    </Modal>
  );
};