import { call, put, takeEvery } from 'redux-saga/effects'
import { addPostsToBeginning, 
        addPostsToEnd, 
        addSearchResultsToBeginning, 
        addSearchResultsToEnd, 
        changeNextPage, 
        changeNextPageForSearchResults, 
        clearSearchResults, 
        hideConnectionErrorAlert, 
        setLoadingToFalse, 
        setLoadingToTrue, 
        setRefreshingToFalse, 
        setRefreshingToTrue, 
        showConnectionErrorAlert } from '../actions';
import { FETCH_NEWS } from '../constants/actions';
import { fetchNews } from './fetchNews';
import { Action } from 'redux';

interface FetchNews {
    languageSelected: string, 
    countrySelected: string, 
    pageId: string | undefined,
    query: string | undefined
}

function* fetchNewsWorker (action: Action & FetchNews) {
    try {
        let json;
        if (action.pageId) {
            if (action.query) {
                yield put(setLoadingToTrue());
                json = yield call(fetchNews, action.languageSelected, action.countrySelected, action.pageId, action.query);
                yield put(addSearchResultsToEnd(json.results));
                yield put(changeNextPageForSearchResults(json.nextPage));
            }
            else {
                yield put(setLoadingToTrue());
                json = yield call(fetchNews, action.languageSelected, action.countrySelected, action.pageId, action.query);
                yield put(addPostsToEnd(json.results));
                yield put(changeNextPage(json.nextPage));
            }
        } else {
            if (action.query) {
                json = yield call(fetchNews, action.languageSelected, action.countrySelected, action.pageId, action.query);
                yield put(clearSearchResults());
                yield put(addSearchResultsToBeginning(json.results));
                yield put(changeNextPageForSearchResults(json.nextPage));
            }
            else {
                yield put(setRefreshingToTrue());
                json = yield call(fetchNews, action.languageSelected, action.countrySelected);                
                yield put(addPostsToBeginning(json.results));
                yield put(changeNextPage(json.nextPage));
            }
        }        
        yield put(setRefreshingToFalse());
        yield put(setLoadingToFalse());
    } catch (error) {
        console.log(error);
        yield put(setRefreshingToFalse());
        yield put(setLoadingToFalse());
        if (error.message == 'Failed to fetch') {
            yield put(showConnectionErrorAlert());
            yield call(delay, 5000);
            yield put(hideConnectionErrorAlert());
        }
    }
}

export function* fetchNewsWatcher () {
    yield takeEvery(FETCH_NEWS, fetchNewsWorker);
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }