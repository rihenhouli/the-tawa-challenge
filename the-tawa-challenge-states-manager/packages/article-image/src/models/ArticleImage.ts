export type ArticleImageDataType = {
  _id: string;
  articleSection: string;
  articleImageName: string;
  articleImagePath: string;
  articleImageAlt?: string | null;
  isMain?: boolean;
  ref?: string | null;
  creationDate: Date;
  createdBy: string;
  isDeleted: boolean; 
  __v: number;
};

class ArticleImage {
  public _id: string;
  public articleSection: string;
  public articleImageName: string;
  public articleImagePath: string;
  public articleImageAlt?: string | null;
  public isMain?: boolean;
  public ref?: string | null;
  public creationDate: Date;
  public createdBy: string;
  public isDeleted: boolean; 
  public __v: number;

  public constructor(props: ArticleImageDataType) {
    this._id = props._id;
    this.articleSection = props.articleSection;
    this.articleImageName = props.articleImageName;
    this.articleImagePath = props.articleImagePath;
    this.articleImageAlt = props.articleImageAlt;
    this.isMain = props.isMain;
    this.ref = props.ref;
    this.creationDate = props.creationDate;
    this.createdBy = props.createdBy;
    this.isDeleted = props.isDeleted;
    this.__v = props.__v;
  }
}

export default ArticleImage;
