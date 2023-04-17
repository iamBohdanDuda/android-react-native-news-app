export enum NewsActionTypes {
    ADD_POSTS_TO_BEGINNING = 'ADD_POSTS_TO_BEGINNING',
    ADD_POSTS_TO_END = 'ADD_POSTS_TO_END',
    CHANGE_NEXT_PAGE = 'CHANGE_NEXT_PAGE',
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
export interface ChangeNextPage {
    type: NewsActionTypes.CHANGE_NEXT_PAGE
    payload: string
}

export type NewsAction = SetLoadingToTrue | 
                        SetLoadingToFalse | 
                        SetRefreshingToTrue | 
                        SetRefreshingToFalse | 
                        AddPostsToBeginning | 
                        AddPostsToEnd | 
                        ChangeNextPage;

export interface NewsState {
    posts: any[],
    nextPage: string,
    isRefreshing: boolean,
    isLoading: boolean
}