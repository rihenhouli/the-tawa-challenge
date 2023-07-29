import { States } from './index';
import Article from './models/Article';
import { State } from './state';
export declare function getArticleState(states: Partial<States>): State | undefined;
export declare function getArticleData(states: Partial<States>): Article | null | undefined;
export declare function listArticleData(states: Partial<States>): Array<Article> | null | undefined;
