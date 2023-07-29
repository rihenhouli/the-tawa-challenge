import { States } from './index'
import ArticleSection from './models/ArticleSection'
import { State } from './state'

/*
Different methods that can be used to get the different elements 
from the articleSection 
*/
export function getArticleSectionState(states: Partial<States>): State | undefined {
    return states?.articleSection
}
export function getArticleSectionData(
    states: Partial<States>
): ArticleSection | null | undefined {
    return states?.articleSection?.articleSection
}
export function listArticleSectionData(
    states: Partial<States>
): Array<ArticleSection> | null | undefined {
    return states?.articleSection?.articleSectionList
}

