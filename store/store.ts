import {applyMiddleware, combineReducers, createStore} from 'redux';
import logger, {createLogger} from 'redux-logger';
import userReducer from './reducers/userReducer';
import storage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import RootSaga from './saga/rootSaga';
import loginReducer from './reducers/loginReducer';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['userProducts', 'isLoading', 'apiOffset', 'isEmptyProducts'],
};

const rootReducer = combineReducers({
  userData: persistReducer(persistConfig, userReducer),
  LoginData: loginReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(RootSaga);
export const persister = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
