import { DESELECT_CATEGORY, SELECT_CATEGORY, SELECT_COUNTRY, SELECT_LANGUAGE } from "../constants/actions";

const initialState = {
    categorySelected: '',
    languageSelected: 'en',
    countrySelected: 'ww'
}

export const userPreferencesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CATEGORY:
            return {...state, categorySelected: action.payload};
        case DESELECT_CATEGORY:
            return {...state, categorySelected: ''};

        case SELECT_LANGUAGE:
            return {...state, languageSelected: action.payload};
        
        case SELECT_COUNTRY:
            return {...state, countrySelected: action.payload};

        default:
            return state;
    }
}