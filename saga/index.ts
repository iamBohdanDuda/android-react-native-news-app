import { all } from "redux-saga/effects";
import { fetchNewsWatcher } from "./newsSaga";

export function* rootWatcher () {
    yield all([fetchNewsWatcher])
}