import {takeEvery} from 'redux-saga/effects';
import {
  LogInRequest,
  LogOutRequest,
  RequestCheckForWatchListAndFavorite,
  RequestFavoriteMovies,
  RequestFilterMovies,
  RequestMovies,
  RequestSearchMovies,
  RequestToggleFavorite,
  RequestToggleWatchList,
  RequestWatchListMovies,
} from '../../utils/types';
import {
  checkForWatchListAndFavorite,
  getFavoriteMovies,
  getFilteredMovies,
  getMovies,
  getWatchListMovies,
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
  yield takeEvery(RequestWatchListMovies, getWatchListMovies);
  yield takeEvery(RequestFavoriteMovies, getFavoriteMovies);
}

export default RootSaga;
