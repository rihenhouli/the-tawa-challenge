export type ArticleDataType = {
  _id: string;
  articleTitle: string;
  articleCategory: string;
  isArchived: boolean;
  isPublished: boolean;
  publishDate: Date;
  createdBy: string;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};


class Article {
  public _id: string;
  public articleTitle: string;
  public articleCategory: string;
  public isArchived: boolean;
  public isPublished: boolean;
  public publishDate: Date;
  public createdBy: string;
  public isDeleted: boolean;
  public createdAt: Date;
  public updatedAt: Date;
  public __v: number;

  public constructor(props: ArticleDataType) {
    this._id = props._id;
    this.articleTitle = props.articleTitle;
    this.articleCategory = props.articleCategory;
    this.isArchived = props.isArchived;
    this.isPublished = props.isPublished;
    this.publishDate = props.publishDate;
    this.createdBy = props.createdBy;
    this.isDeleted = props.isDeleted;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.__v = props.__v;
  }
}

export default Article;
