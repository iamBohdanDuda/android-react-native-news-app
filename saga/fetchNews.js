import { apikey } from "../constants/apikey";

export const fetchNews = (languageSelected, countrySelected, pageId = undefined) => {
    let country = '';
    countrySelected === 'ww' ? country = '' : country = `&country=${countrySelected}`;
    console.log(`https://newsdata.io/api/1/news?apikey=${apikey}${country}&language=${languageSelected}`);
    if (pageId) {
        return fetch(`https://newsdata.io/api/1/news?apikey=${apikey}${country}&language=${languageSelected}&page=${pageId}`)
        .then(response => response.json())
    }
    else {
        return fetch(`https://newsdata.io/api/1/news?apikey=${apikey}${country}&language=${languageSelected}`)
        .then(response => response.json())
    }
}