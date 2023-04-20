export enum UserPreferencesActionTypes {
    DESELECT_CATEGORY = 'DESELECT_CATEGORY',
    SELECT_CATEGORY = 'SELECT_CATEGORY',
    SELECT_SEARCH_CATEGORY = 'SELECT_SEARCH_CATEGORY',
    DESELECT_SEARCH_CATEGORY = 'DESELECT_SEARCH_CATEGORY',

    SELECT_COUNTRY = 'SELECT_COUNTRY',
    SELECT_LANGUAGE = 'SELECT_LANGUAGE'
}

export interface SelectCategory {
    type: UserPreferencesActionTypes.SELECT_CATEGORY,
    payload: string
}
export interface DeselectCategory {
    type: UserPreferencesActionTypes.DESELECT_CATEGORY
}
export interface SelectSearchCategory {
    type: UserPreferencesActionTypes.SELECT_SEARCH_CATEGORY,
    payload: string
}
export interface DeselectSearchCategory{
    type: UserPreferencesActionTypes.DESELECT_SEARCH_CATEGORY
}
export interface SelectLanguage {
    type: UserPreferencesActionTypes.SELECT_LANGUAGE,
    payload: string
}
export interface SelectCountry {
    type: UserPreferencesActionTypes.SELECT_COUNTRY,
    payload: string
}

export type UserPreferencesAction = SelectCategory | 
                                    DeselectCategory | 
                                    SelectSearchCategory | 
                                    DeselectSearchCategory | 
                                    SelectLanguage | 
                                    SelectCountry;

export interface UserPreferencesState {
    categorySelected: string,
    searchCategorySelected: string,
    languageSelected: string,
    countrySelected: string
}