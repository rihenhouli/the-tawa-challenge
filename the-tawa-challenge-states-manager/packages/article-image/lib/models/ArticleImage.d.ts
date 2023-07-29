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
declare class ArticleImage {
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
    constructor(props: ArticleImageDataType);
}
export default ArticleImage;
