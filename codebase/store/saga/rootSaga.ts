import {takeEvery} from 'redux-saga/effects';
import {LogInRequest, LogOutRequest, RequestMovies} from '../../utils/types';
import {getMovies} from './MoviesSaga';
import {getUserLogIn} from './AuthSaga';
import {getUserLogOut} from './AuthSaga';

function* RootSaga() {
  yield takeEvery(RequestMovies, getMovies);
  yield takeEvery(LogInRequest, getUserLogIn);
  yield takeEvery(LogOutRequest, getUserLogOut);
}

export default RootSaga;
