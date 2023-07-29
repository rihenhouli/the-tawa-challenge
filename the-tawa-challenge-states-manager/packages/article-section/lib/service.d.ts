import ArticleSection from "./models/ArticleSection";
declare function addData(articleSection: ArticleSection): Promise<void>;
declare function updateData(articleSection: ArticleSection): Promise<void>;
declare function fetchData(_id: string): Promise<ArticleSection | undefined>;
declare function fetchList(): Promise<Array<ArticleSection>>;
declare function fetchListByArticle(article: string): Promise<ArticleSection[] | undefined>;
declare function deleteData(_id: string): Promise<void>;
declare function restoreData(_id: string): Promise<void>;
export { addData, updateData, fetchData, fetchList, fetchListByArticle, deleteData, restoreData, };
