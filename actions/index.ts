import { FETCH_NEWS } from "../constants/actions";
import { AlertsActionTypes, HideConnectionErrorAlert, ShowConnectionErrorAlert } from "../store/types/alerts";
import { AddPostsToBeginning, 
        AddPostsToEnd, 
        AddSearchResultsToBeginning, 
        AddSearchResultsToEnd, 
        ChangeNextPage, 
        ChangeNextPageForSearchResults, 
        ClearSearchResults, 
        NewsActionTypes, 
        SetLoadingToFalse, 
        SetLoadingToTrue, 
        SetRefreshingToFalse, 
        SetRefreshingToTrue } from "../store/types/news";
import { DeselectCategory, DeselectSearchCategory, SelectCategory, SelectCountry, SelectLanguage, SelectSearchCategory, UserPreferencesActionTypes } from "../store/types/userPreferences";

interface FetchNews {
    type: typeof FETCH_NEWS,
    languageSelected: string, 
    countrySelected: string, 
    pageId: string | undefined,
    query: string | undefined
}

export const setLoadingToTrue = (): SetLoadingToTrue => {
    return {
        type: NewsActionTypes.SET_LOADING_TO_TRUE
    }
}
export const setLoadingToFalse = (): SetLoadingToFalse => {
    return {
        type: NewsActionTypes.SET_LOADING_TO_FALSE
    }
}
export const setRefreshingToTrue = (): SetRefreshingToTrue => {
    return {
        type: NewsActionTypes.SET_REFRESHING_TO_TRUE
    }
}
export const setRefreshingToFalse = (): SetRefreshingToFalse => {
    return {
        type: NewsActionTypes.SET_REFRESHING_TO_FALSE
    }
}

export const addPostsToBeginning = (payload: any): AddPostsToBeginning => {
    return {
        type: NewsActionTypes.ADD_POSTS_TO_BEGINNING,
        payload
    }
}
export const addPostsToEnd = (payload: any): AddPostsToEnd => {
    return {
        type: NewsActionTypes.ADD_POSTS_TO_END,
        payload
    }
}
export const addSearchResultsToBeginning = (payload: any): AddSearchResultsToBeginning => {
    return {
        type: NewsActionTypes.ADD_SEARCH_RESULTS_TO_BEGINNING,
        payload
    }
}
export const addSearchResultsToEnd = (payload: any): AddSearchResultsToEnd => {
    return {
        type: NewsActionTypes.ADD_SEARCH_RESULTS_TO_END,
        payload
    }
}
export const clearSearchResults = (): ClearSearchResults => {
    return {
        type:NewsActionTypes.CLEAR_SEARCH_RESULTS
    }
}

export const fetchNews = (languageSelected: string, 
                            countrySelected: string, 
                            pageId: string | undefined = undefined,
                            query: string | undefined = undefined): FetchNews => {
    return {
        type: FETCH_NEWS,
        languageSelected,
        countrySelected,
        pageId,
        query
    }
}

export const changeNextPage = (payload: string): ChangeNextPage => {
    return {
        type: NewsActionTypes.CHANGE_NEXT_PAGE,
        payload
    }
}
export const changeNextPageForSearchResults = (payload: string): ChangeNextPageForSearchResults => {
    return {
        type: NewsActionTypes.CHANGE_NEXT_PAGE_FOR_SEARCH_RESULTS,
        payload
    }
}

export const selectCategory = (payload: string): SelectCategory => {
    return {
        type: UserPreferencesActionTypes.SELECT_CATEGORY,
        payload
    }
}
export const deselectCategory = (): DeselectCategory => {
    return {
        type: UserPreferencesActionTypes.DESELECT_CATEGORY
    }
}
export const selectSearchCategory = (payload: string): SelectSearchCategory => {
    return {
        type: UserPreferencesActionTypes.SELECT_SEARCH_CATEGORY,
        payload
    }
}
export const deselectSearchCategory = (): DeselectSearchCategory => {
    return {
        type: UserPreferencesActionTypes.DESELECT_SEARCH_CATEGORY,
    }
}

export const selectLanguage = (payload: string): SelectLanguage => {
    return {
        type: UserPreferencesActionTypes.SELECT_LANGUAGE,
        payload
    }
}
export const selectCountry = (payload: string): SelectCountry => {
    return {
        type: UserPreferencesActionTypes.SELECT_COUNTRY,
        payload
    }
}

export const showConnectionErrorAlert = (): ShowConnectionErrorAlert => {
    return {
        type: AlertsActionTypes.SHOW_CONNECTION_ERROR_ALERT
    }
}
export const hideConnectionErrorAlert = (): HideConnectionErrorAlert => {
    return {
        type: AlertsActionTypes.HIDE_CONNECTION_ERROR_ALERT
    }
}