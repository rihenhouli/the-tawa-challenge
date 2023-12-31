import ArticleImage from "./models/ArticleImage";
declare function uploadData(articleImage: FormData): Promise<void>;
declare function downloadData(filename: string): Promise<ArticleImage | undefined>;
declare function updateData(image: ArticleImage): Promise<void>;
declare function fetchData(_id: string): Promise<ArticleImage | undefined>;
declare function fetchList(): Promise<Array<ArticleImage>>;
declare function fetchListByArticle(article: string): Promise<ArticleImage[] | undefined>;
declare function fetchListBySection(section: string): Promise<ArticleImage[] | undefined>;
declare function deleteData(_id: string): Promise<void>;
declare function restoreData(_id: string): Promise<void>;
export { uploadData, downloadData, updateData, fetchData, fetchList, fetchListByArticle, fetchListBySection, deleteData, restoreData, };
