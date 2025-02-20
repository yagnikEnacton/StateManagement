import {takeEvery} from 'redux-saga/effects';
import {
  LogInRequest,
  LogOutRequest,
  RequestFilterMovies,
  RequestMovies,
} from '../../utils/types';
import {getFilteredMovies, getMovies} from './MoviesSaga';
import {getUserLogIn} from './AuthSaga';
import {getUserLogOut} from './AuthSaga';

function* RootSaga() {
  yield takeEvery(LogInRequest, getUserLogIn);
  yield takeEvery(LogOutRequest, getUserLogOut);
  yield takeEvery(RequestMovies, getMovies);
  yield takeEvery(RequestFilterMovies, getFilteredMovies);
}

export default RootSaga;
