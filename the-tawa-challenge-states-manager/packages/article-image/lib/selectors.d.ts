import { States } from './index';
import ArticleImage from './models/ArticleImage';
import { State } from './state';
export declare function getArticleImageState(states: Partial<States>): State | undefined;
export declare function getArticleImageData(states: Partial<States>): ArticleImage | null | undefined;
export declare function listArticleImageData(states: Partial<States>): Array<ArticleImage> | null | undefined;
