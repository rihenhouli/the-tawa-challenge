import { States } from './index'
import Article from './models/Article'
import { State } from './state'

/*
Different methods that can be used to get the different elements 
from the article 
*/
export function getArticleState(states: Partial<States>): State | undefined {
    return states?.article
}
export function getArticleData(
    states: Partial<States>
): Article | null | undefined {
    return states?.article?.article
}
export function listArticleData(
    states: Partial<States>
): Array<Article> | null | undefined {
    return states?.article?.articleList
}

