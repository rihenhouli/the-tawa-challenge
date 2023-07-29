import { States } from './index';
import ArticleSection from './models/ArticleSection';
import { State } from './state';
export declare function getArticleSectionState(states: Partial<States>): State | undefined;
export declare function getArticleSectionData(states: Partial<States>): ArticleSection | null | undefined;
export declare function listArticleSectionData(states: Partial<States>): Array<ArticleSection> | null | undefined;
