import {takeEvery} from 'redux-saga/effects';
import {
  LogInRequest,
  LogOutRequest,
  RequestCheckForWatchListAndFavorite,
  RequestFilterMovies,
  RequestMovies,
  RequestSearchMovies,
  RequestToggleFavorite,
  RequestToggleWatchList,
} from '../../utils/types';
import {
  checkForWatchListAndFavorite,
  getFilteredMovies,
  getMovies,
  searchMovies,
  toggleFavorite,
  toggleWatchList,
} from './MoviesSaga';
import {getUserLogIn} from './AuthSaga';
import {getUserLogOut} from './AuthSaga';

function* RootSaga() {
  yield takeEvery(LogInRequest, getUserLogIn);
  yield takeEvery(LogOutRequest, getUserLogOut);
  yield takeEvery(RequestMovies, getMovies);
  yield takeEvery(RequestFilterMovies, getFilteredMovies);
  yield takeEvery(RequestToggleWatchList, toggleWatchList);
  yield takeEvery(RequestToggleFavorite, toggleFavorite);
  yield takeEvery(
    RequestCheckForWatchListAndFavorite,
    checkForWatchListAndFavorite,
  );
  yield takeEvery(RequestSearchMovies, searchMovies);
}

export default RootSaga;
