import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { newsReducer } from "./newsReducer";
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from "../saga";
import { fetchNewsWatcher } from "../saga/newsSaga";
import { userPreferencesReducer } from "./userPreferencesReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import { dataReducer } from "./dataReducer";
import { alertsReducer } from "./alertsReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from 'redux-persist';


declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

export const rootReducer = combineReducers({news: newsReducer, userPreferences: userPreferencesReducer, data: dataReducer, alerts: alertsReducer})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
export const persistor = persistStore(store);


sagaMiddleware.run(fetchNewsWatcher)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch