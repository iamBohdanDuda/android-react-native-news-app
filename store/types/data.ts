interface counriesList {
    label: string,
    value: string
}
interface languagesList {
    label: string,
    value: string
}

export interface DataState {
    counriesList: counriesList[],
    languagesList: languagesList[]
}