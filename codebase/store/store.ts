import {applyMiddleware, combineReducers, createStore} from 'redux';
import logger from 'redux-logger';
import storage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import RootSaga from './saga/rootSaga';
import loginReducer from './reducers/loginReducer';
import moviesReducer from './reducers/moviesReducer';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['userProducts', 'isLoading', 'isEmptyProducts'],
};

const rootReducer = combineReducers({
  MoviesData: persistReducer(persistConfig, moviesReducer),
  LoginData: loginReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(RootSaga);
export const persister = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
