export enum NewsActionTypes {
    ADD_POSTS_TO_BEGINNING = 'ADD_POSTS_TO_BEGINNING',
    ADD_POSTS_TO_END = 'ADD_POSTS_TO_END',

    ADD_SEARCH_RESULTS_TO_BEGINNING = 'ADD_SEARCH_RESULTS_TO_BEGINNING',
    ADD_SEARCH_RESULTS_TO_END = 'ADD_SEARCH_RESULTS_TO_END',
    CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS',

    CHANGE_NEXT_PAGE = 'CHANGE_NEXT_PAGE',
    CHANGE_NEXT_PAGE_FOR_SEARCH_RESULTS = 'CHANGE_NEXT_PAGE_FOR_SEARCH_RESULTS',

    SET_LOADING_TO_FALSE = 'SET_LOADING_TO_FALSE',
    SET_LOADING_TO_TRUE = 'SET_LOADING_TO_TRUE',
    SET_REFRESHING_TO_FALSE = 'SET_REFRESHING_TO_FALSE',
    SET_REFRESHING_TO_TRUE = 'SET_REFRESHING_TO_TRUE'
}

export interface SetLoadingToTrue {
    type: NewsActionTypes.SET_LOADING_TO_TRUE
}
export interface SetLoadingToFalse {
    type: NewsActionTypes.SET_LOADING_TO_FALSE
}
export interface SetRefreshingToTrue {
    type: NewsActionTypes.SET_REFRESHING_TO_TRUE
}
export interface SetRefreshingToFalse {
    type: NewsActionTypes.SET_REFRESHING_TO_FALSE
}
export interface AddPostsToBeginning {
    type: NewsActionTypes.ADD_POSTS_TO_BEGINNING,
    payload: any
}
export interface AddPostsToEnd {
    type: NewsActionTypes.ADD_POSTS_TO_END
    payload: any
}
export interface AddSearchResultsToBeginning {
    type: NewsActionTypes.ADD_SEARCH_RESULTS_TO_BEGINNING,
    payload: any
}
export interface AddSearchResultsToEnd {
    type: NewsActionTypes.ADD_SEARCH_RESULTS_TO_END,
    payload: any
}
export interface ClearSearchResults {
    type: NewsActionTypes.CLEAR_SEARCH_RESULTS
}
export interface ChangeNextPage {
    type: NewsActionTypes.CHANGE_NEXT_PAGE
    payload: string
}
export interface ChangeNextPageForSearchResults {
    type: NewsActionTypes.CHANGE_NEXT_PAGE_FOR_SEARCH_RESULTS,
    payload: string
}

export type NewsAction = SetLoadingToTrue | 
                        SetLoadingToFalse | 
                        SetRefreshingToTrue | 
                        SetRefreshingToFalse | 
                        AddPostsToBeginning | 
                        AddPostsToEnd | 
                        AddSearchResultsToBeginning | 
                        AddSearchResultsToEnd | 
                        ClearSearchResults | 
                        ChangeNextPage | 
                        ChangeNextPageForSearchResults;

export interface NewsState {
    posts: any[],
    searchPagePosts: any[],
    nextPage: string,
    searchResultsNextPage: string,
    isRefreshing: boolean,
    isLoading: boolean
}