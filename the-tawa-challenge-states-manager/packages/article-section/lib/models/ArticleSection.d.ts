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
declare class ArticleSection {
    _id: string;
    article: string;
    articleSectionName: string;
    articleSectionContent: string;
    addDate: Date;
    createdBy: string;
    isDeleted: boolean;
    __v: number;
    constructor(props: ArticleSectionDataType);
}
export default ArticleSection;
