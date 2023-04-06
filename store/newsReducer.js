import { ADD_POSTS_TO_BEGINNING, ADD_POSTS_TO_END, CHANGE_NEXT_PAGE } from "../constants/actions";

const initialState = {
    posts: [],
    nextPage: ''
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
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