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
declare class Article {
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
    constructor(props: ArticleDataType);
}
export default Article;
