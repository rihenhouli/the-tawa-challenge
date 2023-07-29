import { useSelector } from "react-redux";
import { ArticleCard } from "../../molecules/card/Card";
import { listArticleData } from "@rihenhouli/ttcsm_article/lib/selectors";
import { listArticleImageData } from "@rihenhouli/ttcsm_article-image/lib/selectors";
import { listArticleSectionData } from "@rihenhouli/ttcsm_article-section/lib/selectors";
import Article from "@rihenhouli/ttcsm_article/lib/models/Article";
import article_image from "../../../assets/publish_article.png";
import { listUserData } from "@rihenhouli/ttcsm_user/lib/selectors";
import { listUserImageData } from "@rihenhouli/ttcsm_user-image/lib/selectors";
import { userActions } from "@rihenhouli/ttcsm_user/lib/state";
import { MonthNameGenerator } from "../../operations/Month";
import { SuperscriptGenerator } from "../../operations/Superscript";
import { ThTableHeader } from "../../atoms/title/Title";
import { ArticleTableRow } from "../../molecules/table/Table";
require("./ArticleList.css");

export const ArticleTable = () => {
  const list = useSelector(listArticleData);
  const listImages = useSelector(listArticleImageData);
  const listSections = useSelector(listArticleSectionData);
  const listUsers = useSelector(listUserData);
  const listUserPhotos = useSelector(listUserImageData);
  const userNameFromSession = sessionStorage.getItem("userName");
  const userName = userNameFromSession ? JSON.parse(userNameFromSession) : "";
  const generateSrc = (article: string): string => {
    const articleSections = listSections?.filter(
      (section) => section.article === article
    );
    const imagesOfArticle = listImages?.filter((image) =>
      articleSections?.some((section) => section._id === image.articleSection)
    );
    const main = imagesOfArticle?.find(
      (image) => image.isMain === true
    )?.articleImagePath;
    const another = imagesOfArticle?.find(
      (image) => image.isDeleted === false
    )?.articleImagePath;
    const converted = main
      ? main?.replace(/^public\\/, "")
      : another?.replace(/^public\\/, "");
    const url = "http://localhost:3030/";
    return main ? url + converted : article_image;
  };

  const generateCategoryClassname = (category: string): string => {
    if (category.toLocaleLowerCase() == "generic") {
      return "dark";
    } else if (category.toLocaleLowerCase() == "well being") {
      return "primary";
    } else return "success";
  };

  const generateCreatedBy = (createdBy: string): string => {
    const user = listUsers?.find((user) => user.userName == createdBy);
    const name = user?.firstName + " " + user?.lastName;
    return user ? name : "incognito";
  };
  const generateCreationDate = (article: Article): string => {
    if (article.publishDate && article.isPublished === true) {
      const year = article.publishDate?.toString().substring(0, 4);
      const month = MonthNameGenerator(
        article.publishDate?.toString()?.substring(5, 7) + ""
      );
      const day = article.publishDate?.toString()?.substring(8, 10);
      const superscript = SuperscriptGenerator(parseInt(day + ""));
      const pubDate = month + " " + day + superscript + " ," + year;
      return pubDate;
    } else return "not-set";
  };
  return (
    <div className="article_list">
      <table className="article_table">
        <thead>
          <tr className="article_table_header">
            <ThTableHeader titre={"title"}></ThTableHeader>
            <ThTableHeader titre={"category"}></ThTableHeader>
            <ThTableHeader titre={"sections"}></ThTableHeader>
            <ThTableHeader titre={"images"}></ThTableHeader>
            <ThTableHeader titre={"published"}></ThTableHeader>
            <ThTableHeader titre={"actions"}></ThTableHeader>
          </tr>
        </thead>
        <tbody>
          {list
            ?.filter((article) => article.createdBy === userName )
            .map((article, i) => (
              <>
                <ArticleTableRow
                  key={i}
                  article={article}
                ></ArticleTableRow>
              </>
            ))}
        </tbody>
      </table>
    </div>
  );
};
