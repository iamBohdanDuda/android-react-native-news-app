import { call, put, takeEvery } from 'redux-saga/effects'
import { addPostsToBeginning, addPostsToEnd, changeNextPage } from '../actions';
import { FETCH_NEWS } from '../constants/actions';
import { fetchNews } from './fetchNews';

function* fetchNewsWorker (action) {
    try {
        let json;
        if (action.pageId) {
            json = yield call(fetchNews, action.languageSelected, action.countrySelected, action.pageId);
            yield put(addPostsToEnd(json.results));
        } else {
            json = yield call(fetchNews, action.languageSelected, action.countrySelected);
            yield put(addPostsToBeginning(json.results));
        }        
        yield put(changeNextPage(json.nextPage));
    } catch (error) {
        console.log(error);
    }
}

export function* fetchNewsWatcher () {
    yield takeEvery(FETCH_NEWS, fetchNewsWorker);
}

/*

function* fetchNextPageWorker (action) {
    try {
        const json = yield call(fetchNextPage, action.payload);
        yield put(addPost(json.results));
        yield put(changeNextPage(json.nextPage));
        yield console.log(json.nextPage);
    } catch (error) {
        console.log(error);
    }
}
*/