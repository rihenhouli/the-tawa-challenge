export type ArticleSectionDataType = {
  _id: string;
  article: string;
  articleSectionName: string;
  articleSectionContent: string;
  addDate: Date;
  createdBy: string;
  isDeleted: boolean;
  __v: number;
};

class ArticleSection {
  public _id: string;
  public article: string;
  public articleSectionName: string;
  public articleSectionContent: string;
  public addDate: Date;
  public createdBy: string;
  public isDeleted: boolean; 
  public __v: number;

  public constructor(props: ArticleSectionDataType) {
    this._id = props._id;
    this.article = props.article;
    this.articleSectionName = props.articleSectionName;
    this.articleSectionContent = props.articleSectionContent;
    this.addDate = props.addDate;
    this.createdBy = props.createdBy;
    this.isDeleted = props.isDeleted;
    this.__v = props.__v;
  }
}

export default ArticleSection;
