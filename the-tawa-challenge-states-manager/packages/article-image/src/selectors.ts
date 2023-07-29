import { States } from './index'
import ArticleImage from './models/ArticleImage'
import { State } from './state'

/*
Different methods that can be used to get the different elements 
from the articleImage 
*/
export function getArticleImageState(states: Partial<States>): State | undefined {
    return states?.articleImage
}
export function getArticleImageData(
    states: Partial<States>
): ArticleImage | null | undefined {
    return states?.articleImage?.articleImage
}
export function listArticleImageData(
    states: Partial<States>
): Array<ArticleImage> | null | undefined {
    return states?.articleImage?.articleImageList
}

