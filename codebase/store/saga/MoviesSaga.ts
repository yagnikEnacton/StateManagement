import {put, select} from 'redux-saga/effects';
import {
  FailedSearchMovies,
  FailedToggleFavorite,
  FailedToggleWatchList,
  ReceiveEmptyFilterMovies,
  ReceiveEmptyMovies,
  ReceiveFilterMovies,
  ReceiveMovies,
  ReceiveMoviesError,
  ReceiveMoviesFilterError,
  SuccessSearchMovies,
  SuccessToggleFavorite,
  SuccessToggleWatchList,
} from '../../utils/types';
import {apiEndpoint, apiHeader, trendingMovies} from '../../utils/env';
import {Alert, ToastAndroid} from 'react-native';

export function* getMovies(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const urlTrendingMovies = `${apiEndpoint}${trendingMovies}`;
    const options = {
      method: 'GET',
      headers: apiHeader,
    };
    const response1 = yield fetch(urlTrendingMovies, options);

    // console.log(response1);
    const data1 = yield response1.json();
    if (response1.status === 200 && data1.length !== 0) {
      // console.log(data1);

      yield put({
        type: ReceiveMovies,
        payload: {
          Movies: data1.results,
          isLoading: false,
        },
      });
    } else {
      yield put({
        type: ReceiveEmptyMovies,
        payload: {isLoading: false, isEmptyProducts: true},
      });
    }
  } catch (error) {
    console.log('error', error);
    yield put({type: ReceiveMoviesError, payload: {isLoading: false}});
  }
}

export function* getFilteredMovies(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  const state = yield select(); // Select the entire state
  const filterGenres = state.MoviesData.filterGenres; // Access filterGenres from the store state
  console.log('getFilteredMovies');

  try {
    const generes = filterGenres.join(',');
    const urlTrendingMovies = `${apiEndpoint}discover/movie?with_genres=${generes}`;
    const options = {
      method: 'GET',
      headers: apiHeader,
    };
    const response = yield fetch(urlTrendingMovies, options);

    const data = yield response.json();
    if (response.status === 200 && data.length !== 0) {
      console.log(data.results);

      yield put({
        type: ReceiveFilterMovies,
        payload: {
          FilterMovies: data.results,
          isLoadingFilter: false,
        },
      });
    } else {
      yield put({
        type: ReceiveEmptyFilterMovies,
        payload: {isLoadingFilter: false, isEmptyProducts: true},
      });
    }
  } catch (error) {
    console.log('error', error);
    yield put({type: ReceiveMoviesFilterError, payload: {isLoading: false}});
  }
}
export function* toggleWatchList(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const urlTrendingMovies = `${apiEndpoint}account/21825871/watchlist`;
    const options = {
      method: 'POST',
      headers: {
        ...apiHeader,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        media_type: 'movie',
        media_id: action.payload.MovieId,
        watchlist: action.payload.isWatchlist,
      }),
    };
    const response = yield fetch(urlTrendingMovies, options);

    const data = yield response.json();
    if (response.status === 201 || 200) {
      console.log(data);
      if (action.payload.isWatchlist) {
        ToastAndroid.show('Added to watchlist', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Removed from watchlist', ToastAndroid.SHORT);
      }
      yield put({
        type: SuccessToggleWatchList,
        payload: {
          isWatchlist: action.payload.isWatchlist,
          isLoadingWatchlist: false,
        },
      });
    } else {
      ToastAndroid.show('Failed to add to watchlist', ToastAndroid.SHORT);
      yield put({
        type: FailedToggleWatchList,
        payload: {
          isLoadingWatchlist: false,
          isWatchlist: !action.payload.isWatchlist,
        },
      });
    }
  } catch (error) {
    console.log('error', error);
    ToastAndroid.show('Failed to add to watchlist', ToastAndroid.SHORT);
    yield put({
      type: FailedToggleWatchList,
      payload: {
        isLoadingWatchlist: false,
        isWatchlist: !action.payload.isWatchlist,
      },
    });
  }
}

export function* toggleFavorite(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const url = `${apiEndpoint}account/21825871/favorite`;
    const body = JSON.stringify({
      media_type: 'movie',
      media_id: action.payload.MovieId,
      favorite: action.payload.isFavorite,
    });

    console.log(body);
    const options = {
      method: 'POST',
      headers: {
        ...apiHeader,
        'Content-Type': 'application/json',
      },
      body: body,
    };
    const response = yield fetch(url, options);
    console.log(response);

    const data = yield response.json();
    console.log(data);

    if (response.status === 201 || 200) {
      console.log(data.results);
      if (action.payload.isFavorite) {
        ToastAndroid.show('Added to favorite', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Removed from favorite', ToastAndroid.SHORT);
      }

      yield put({
        type: SuccessToggleFavorite,
        payload: {
          isLoadingFavorite: false,
          isFavorite: action.payload.isFavorite,
        },
      });
    } else {
      ToastAndroid.show('Failed to add to favorite', ToastAndroid.SHORT);
      yield put({
        type: FailedToggleFavorite,
        payload: {
          isLoadingFavorite: false,
          isFavorite: !action.payload.isFavorite,
        },
      });
    }
  } catch (error) {
    ToastAndroid.show('Failed to add to favorite', ToastAndroid.SHORT);
    console.log('error', error);
    yield put({
      type: FailedToggleFavorite,
      payload: {
        isLoadingFavorite: false,
        isFavorite: !action.payload.isFavorite,
      },
    });
  }
}

export function* checkForWatchListAndFavorite(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const url = `${apiEndpoint}account/21825871/favorite`;
    const body = JSON.stringify({
      media_type: 'movie',
      media_id: action.payload.MovieId,
      favorite: action.payload.isFavorite,
    });

    console.log(body);
    const options = {
      method: 'POST',
      headers: {
        ...apiHeader,
        'Content-Type': 'application/json',
      },
      body: body,
    };
    const response = yield fetch(url, options);
    console.log(response);

    const data = yield response.json();
    console.log(data);

    if (response.status === 201 || 200) {
      console.log(data.results);
      if (action.payload.isFavorite) {
        ToastAndroid.show('Added to favorite', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Removed from favorite', ToastAndroid.SHORT);
      }

      yield put({
        type: SuccessToggleFavorite,
        payload: {
          isLoadingFavorite: false,
          isFavorite: action.payload.isFavorite,
        },
      });
    } else {
      ToastAndroid.show('Failed to add to favorite', ToastAndroid.SHORT);
      yield put({
        type: FailedToggleFavorite,
        payload: {
          isLoadingFavorite: false,
          isFavorite: !action.payload.isFavorite,
        },
      });
    }
  } catch (error) {
    ToastAndroid.show('Failed to add to favorite', ToastAndroid.SHORT);
    console.log('error', error);
    yield put({
      type: FailedToggleFavorite,
      payload: {
        isLoadingFavorite: false,
        isFavorite: !action.payload.isFavorite,
      },
    });
  }
}
export function* searchMovies(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const searchQuery = action.payload.searchQuery;
    const url = `${apiEndpoint}search/movie?query=${searchQuery}`;
    const options = {
      method: 'GET',
      headers: apiHeader,
    };
    const response = yield fetch(url, options);
    console.log(response);

    const data = yield response.json();
    console.log(data);

    if (response.status === 200 && data.length !== 0) {
      console.log(data.results);
      yield put({
        type: SuccessSearchMovies,
        payload: {
          isSearchLoding: false,
          searchedMovies: data.results,
        },
      });
    } else {
      yield put({
        type: FailedSearchMovies,
        payload: {
          isSearchLoding: false,
        },
      });
    }
  } catch (error) {
    console.log('error', error);
    yield put({
      type: FailedSearchMovies,
      payload: {
        isSearchLoding: false,
      },
    });
  }
}
