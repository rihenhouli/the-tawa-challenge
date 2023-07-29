import { useSelector } from "react-redux";
import { ArticleCard } from "../../molecules/card/Card";
import { listArticleData } from "@rihenhouli/ttcsm_article/lib/selectors";
import { listArticleImageData } from "@rihenhouli/ttcsm_article-image/lib/selectors";
import { listArticleSectionData } from "@rihenhouli/ttcsm_article-section/lib/selectors";
import Article from "@rihenhouli/ttcsm_article/lib/models/Article";
import article_image from "../../../assets/publish_article.png";
import user_image from "../../../assets/profile_img.png";
import { listUserData } from "@rihenhouli/ttcsm_user/lib/selectors";
import { listUserImageData } from "@rihenhouli/ttcsm_user-image/lib/selectors";
import { userActions } from "@rihenhouli/ttcsm_user/lib/state";
import { MonthNameGenerator } from "../../operations/Month";
import { SuperscriptGenerator } from "../../operations/Superscript";
import { useNavigate } from "react-router-dom";
require("./ArticleList.css");

export const ArticleCardList = () => {
  const navigate = useNavigate();
  const userNameFromSession = sessionStorage.getItem("userName");
  const userName = userNameFromSession ? JSON.parse(userNameFromSession) : "";
  const list = useSelector(listArticleData);
  const listImages = useSelector(listArticleImageData);
  const listSections = useSelector(listArticleSectionData);
  const listUsers = useSelector(listUserData);
  const listUserPhotos = useSelector(listUserImageData);
  const generateSrc = (article: string): string => {
    console.log("listSections", listSections);
    const articleSections = listSections?.filter(
      (section) => section.article === article
    );
    console.log("articleSections", articleSections);

    const imagesOfArticle = listImages?.filter((image) =>
      articleSections?.some((section) => section._id === image.articleSection)
    );
    console.log("imagesOfArticle", imagesOfArticle);
    const another = imagesOfArticle?.find(
      (image) => image.isDeleted === false
    )?.articleImagePath;
    const converted = another?.replace(/^public\\/, "");
    const url = "http://localhost:3030/";
    return another ? url + converted : article_image;
  };

  const generateUserSrc = (article: Article): string => {
    const user = listUsers?.find(
      (user) => user.userName === article.createdBy
    )?._id;
    if (!user) {
      return "";
    }
    const userImages = listUserPhotos?.filter((image) => image.user === user);
    const main = userImages?.find(
      (image) => image.isMain === true
    )?.userImagePath;
    const converted =  main?.replace(/^public\\/, "")
    const url = "http://localhost:3030/";
    return main ? url + converted : user_image;
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
      {list
        ?.filter((article) => article.isPublished === true)
        .map((article, i) => (
          <ArticleCard
            key={i}
            witdh={230}
            src={generateSrc(article._id)}
            path={""}
            titre={article.articleTitle}
            category={article.articleCategory}
            categoryBg={generateCategoryClassname(article.articleCategory)}
            user={generateCreatedBy(article.createdBy)}
            creationDate={generateCreationDate(article)}
            userImage={generateUserSrc(article)}
            onClick={() => {
              console.log("userName", userName);
              if (article.createdBy == userName) {
                navigate(`/dashboard/overview/${article._id}`);
              } else navigate(`/dashboard/datails/${article._id}`);
            }}
          ></ArticleCard>
        ))}
    </div>
  );
};
