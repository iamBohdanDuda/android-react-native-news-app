import { apikey } from "../constants/apikey";

export const fetchNews = (languageSelected: string, 
                            countrySelected: string, 
                            pageId: string | undefined = undefined, 
                            query: string | undefined = undefined) => {
    let country = '';
    let q = '';
    countrySelected === 'ww' ? country = '' : country = `&country=${countrySelected}`;
    query ? q = `&q=${query}` : q = '';
    
    console.log(`https://newsdata.io/api/1/news?apikey=${apikey}${q}${country}&language=${languageSelected}`);
    if (pageId) {
        return fetch(`https://newsdata.io/api/1/news?apikey=${apikey}${q}${country}&language=${languageSelected}&page=${pageId}`)
        .then(response => response.json())
    }
    else {
        return fetch(`https://newsdata.io/api/1/news?apikey=${apikey}${q}${country}&language=${languageSelected}`)
        .then(response => response.json())
    }
}