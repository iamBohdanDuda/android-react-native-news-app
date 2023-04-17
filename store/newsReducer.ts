import { NewsAction, NewsActionTypes, NewsState } from "./types/news";

const initialState: NewsState = {
    posts: [],
    nextPage: '',
    isRefreshing: false,
    isLoading: false
}

export const newsReducer = (state = initialState, action: NewsAction): NewsState => {
    switch (action.type) {
        case NewsActionTypes.SET_LOADING_TO_TRUE:
            return {...state, isLoading: true};
        case NewsActionTypes.SET_LOADING_TO_FALSE:
            return {...state, isLoading: false};
        case NewsActionTypes.SET_REFRESHING_TO_TRUE:
            return {...state, isRefreshing: true};
        case NewsActionTypes.SET_REFRESHING_TO_FALSE:
            return {...state, isRefreshing: false}

        case NewsActionTypes.ADD_POSTS_TO_BEGINNING:
            return {...state, posts: [...action.payload, ...state.posts]};
        case NewsActionTypes.ADD_POSTS_TO_END:
            return {...state, posts: state.posts.concat(action.payload)};

        case NewsActionTypes.CHANGE_NEXT_PAGE:
            return {...state, nextPage: action.payload};

        default:
            return state;
    }
}