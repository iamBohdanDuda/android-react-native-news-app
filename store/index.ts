import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { newsReducer } from "./newsReducer";
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from "../saga";
import { fetchNewsWatcher } from "../saga/newsSaga";
import { userPreferencesReducer } from "./userPreferencesReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import { dataReducer } from "./dataReducer";


declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

const sagaMiddleware = createSagaMiddleware()

export const rootReducer = combineReducers({news: newsReducer, userPreferences: userPreferencesReducer, data: dataReducer})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));


sagaMiddleware.run(fetchNewsWatcher)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch