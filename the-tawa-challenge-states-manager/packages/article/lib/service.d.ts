import Article from "./models/Article";
declare function addData(article: Article): Promise<any>;
declare function publishData(article: string): Promise<void>;
declare function updateData(article: Article): Promise<void>;
declare function fetchData(_id: string): Promise<Article | undefined>;
declare function fetchList(): Promise<Array<Article>>;
declare function deleteData(_id: string): Promise<void>;
declare function restoreData(_id: string): Promise<void>;
export { addData, updateData, fetchData, fetchList, deleteData, restoreData, publishData, };
