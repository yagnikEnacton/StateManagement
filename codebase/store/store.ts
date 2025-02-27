import {applyMiddleware, combineReducers, createStore} from 'redux';
import logger from 'redux-logger';
import storage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import RootSaga from './saga/rootSaga';
import loginReducer from './reducers/loginReducer';
import moviesReducer from './reducers/moviesReducer';

const sagaMiddleware = createSagaMiddleware();

const loginConfig = {
  key: 'Auth',
  storage,
  whitelist: [
    'user',
    'profilePictureUrl',
    'isSignedIn',
    'loginType',
    'referralCode',
  ],
  blacklist: ['isLoading'],
};

const rootReducer = combineReducers({
  MoviesData: moviesReducer,
  LoginData: persistReducer(loginConfig, loginReducer),
});

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(RootSaga);
export const persister = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
