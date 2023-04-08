import { ADD_POSTS_TO_BEGINNING, ADD_POSTS_TO_END, CHANGE_NEXT_PAGE, SET_LOADING_TO_FALSE, SET_LOADING_TO_TRUE, SET_REFRESHING_TO_FALSE, SET_REFRESHING_TO_TRUE } from "../constants/actions";

const initialState = {
    posts: [],
    nextPage: '',
    isRefreshing: false,
    isLoading: false
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING_TO_TRUE:
            return {...state, isLoading: true};
        case SET_LOADING_TO_FALSE:
            return {...state, isLoading: false};
        case SET_REFRESHING_TO_TRUE:
            return {...state, isRefreshing: true};
        case SET_REFRESHING_TO_FALSE:
            return {...state, isRefreshing: false}

        case ADD_POSTS_TO_BEGINNING:
            return {...state, posts: [...action.payload, ...state.posts]};
        case ADD_POSTS_TO_END:
            return {...state, posts: state.posts.concat(action.payload)};

        case CHANGE_NEXT_PAGE:
            return {...state, nextPage: action.payload};

        default:
            return state;
    }
}