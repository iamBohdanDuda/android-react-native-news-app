import { UserPreferencesAction, UserPreferencesActionTypes, UserPreferencesState } from "./types/userPreferences";

const initialState: UserPreferencesState = {
    categorySelected: '',
    searchCategorySelected: '',
    languageSelected: 'en',
    countrySelected: 'ww'
}

export const userPreferencesReducer = (state = initialState, action: UserPreferencesAction): UserPreferencesState => {
    switch (action.type) {
        case UserPreferencesActionTypes.SELECT_CATEGORY:
            return {...state, categorySelected: action.payload};
        case UserPreferencesActionTypes.DESELECT_CATEGORY:
            return {...state, categorySelected: ''};

        case UserPreferencesActionTypes.SELECT_SEARCH_CATEGORY:
            return {...state, searchCategorySelected: action.payload};
        case UserPreferencesActionTypes.DESELECT_SEARCH_CATEGORY:
            return {...state, searchCategorySelected: ''};

        case UserPreferencesActionTypes.SELECT_LANGUAGE:
            return {...state, languageSelected: action.payload};
        
        case UserPreferencesActionTypes.SELECT_COUNTRY:
            return {...state, countrySelected: action.payload};

        default:
            return state;
    }
}