const initialState = {
    counriesList: [
        { label: "Worldwide", value: "ww" },
        { label: "Australia", value: "au" },
        { label: "Austria", value: "at" },
        { label: "Belgium", value: "be" },
        { label: "Brazil", value: "br" },
        { label: "Canada", value: "ca" },
        { label: "China", value: "cn" },
        { label: "Czech Republic", value: "cz" },
        { label: "Denmark", value: "dk" },
        { label: "Estonia", value: "ee" },
        { label: "Finland", value: "fi" },
        { label: "France", value: "fr" },
        { label: "Germany", value: "de" },
        { label: "India", value: "in" },
        { label: "Italy", value: "it" },
        { label: "Japan", value: "jp" },
        { label: "Netherlands", value: "nl" },
        { label: "Norway", value: "no" },
        { label: "Poland", value: "pl" },
        { label: "South Korea", value: "kr" },
        { label: "Spain", value: "es" },
        { label: "Sweden", value: "se" },
        { label: "Switzerland", value: "ch" },
        { label: "Taiwan", value: "tw" },
        { label: "Ukraine", value: "ua" },
        { label: "United Kingdom", value: "gb" },
        { label: "United States of America", value: "us" }
    ],
    languagesList: [
        { label: "English", value: "en" },
        { label: "Czech", value: "cs" },
        { label: "French", value: "fr" },
        { label: "German", value: "de" },
        { label: "Hindi", value: "hi" },
        { label: "Italian", value: "it" },
        { label: "Japanese", value: "jp" },
        { label: "Korean", value: "ko" },
        { label: "Polish", value: "pl" },
        { label: "Spanish", value: "es" },
        { label: "Swedish", value: "sv" },
        { label: "Ukrainian", value: "uk" },
      ]
}

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}