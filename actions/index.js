import { ADD_POSTS_TO_BEGINNING, ADD_POSTS_TO_END, CHANGE_NEXT_PAGE, DESELECT_CATEGORY, FETCH_NEWS, 
        SELECT_CATEGORY, SELECT_COUNTRY, SELECT_LANGUAGE, SET_LOADING_TO_FALSE, SET_LOADING_TO_TRUE, 
        SET_REFRESHING_TO_FALSE, SET_REFRESHING_TO_TRUE } from "../constants/actions";

export const setLoadingToTrue = () => {
    return {
        type: SET_LOADING_TO_TRUE
    }
}
export const setLoadingToFalse = () => {
    return {
        type: SET_LOADING_TO_FALSE
    }
}
export const setRefreshingToTrue = () => {
    return {
        type: SET_REFRESHING_TO_TRUE
    }
}
export const setRefreshingToFalse = () => {
    return {
        type: SET_REFRESHING_TO_FALSE
    }
}

export const addPostsToBeginning = (payload) => {
    return {
        type: ADD_POSTS_TO_BEGINNING,
        payload
    }
}
export const addPostsToEnd = (payload) => {
    return {
        type: ADD_POSTS_TO_END,
        payload
    }
}

export const fetchNews = (languageSelected, countrySelected, pageId = undefined) => {
    return {
        type: FETCH_NEWS,
        languageSelected,
        countrySelected,
        pageId
    }
}

export const changeNextPage = (payload) => {
    return {
        type: CHANGE_NEXT_PAGE,
        payload
    }
}

export const selectCategory = (payload) => {
    return {
        type: SELECT_CATEGORY,
        payload
    }
}

export const deselectCategory = () => {
    return {
        type: DESELECT_CATEGORY
    }
}

export const selectLanguage = (payload) => {
    return {
        type: SELECT_LANGUAGE,
        payload
    }
}

export const selectCountry = (payload) => {
    return {
        type: SELECT_COUNTRY,
        payload
    }
}