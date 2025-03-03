import {put, select} from 'redux-saga/effects';
import {recordError} from '@react-native-firebase/crashlytics';
import {crashlytics} from '../../utils/env';
import {
  FailedCheckForWatchListAndFavorite,
  FailedFavoriteMovies,
  FailedSearchMovies,
  FailedToggleFavorite,
  FailedToggleWatchList,
  FailedWatchListMovies,
  ReceiveEmptyFilterMovies,
  ReceiveEmptyMovies,
  ReceiveFilterMovies,
  ReceiveMovies,
  ReceiveMoviesError,
  ReceiveMoviesFilterError,
  SuccessCheckForWatchListAndFavorite,
  SuccessFavoriteMovies,
  SuccessSearchMovies,
  SuccessToggleFavorite,
  SuccessToggleWatchList,
  SuccessWatchListMovies,
} from '../../utils/types';
import {apiEndpoint, apiHeader, trendingMovies} from '../../utils/env';
import {ToastAndroid} from 'react-native';

export function* getMovies(): Generator<any, void, any> {
  try {
    const urlTrendingMovies = `${apiEndpoint}${trendingMovies}`;
    const options = {
      method: 'GET',
      headers: apiHeader,
    };
    const response1 = yield fetch(urlTrendingMovies, options);

    const data1 = yield response1.json();
    if (response1.status === 200 && data1.length !== 0) {
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
    recordError(crashlytics, error as Error);
    console.log('error', error);
    yield put({type: ReceiveMoviesError, payload: {isLoading: false}});
  }
}

export function* getFilteredMovies(): Generator<any, void, any> {
  const state = yield select(); // Select the entire state
  const filterGenres = state.MoviesData.filterGenres; // Access filterGenres from the store state

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
    recordError(crashlytics, error as Error);
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
        media_id: action.payload.movieId,
        watchlist: action.payload.isWatchList,
      }),
    };
    const response = yield fetch(urlTrendingMovies, options);

    if (response.status === 201 || 200) {
      if (action.payload.isWatchList) {
        ToastAndroid.show('Added to watchlist', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Removed from watchlist', ToastAndroid.SHORT);
      }
      yield put({
        type: SuccessToggleWatchList,
        payload: {
          isWatchList: action.payload.isWatchList,
          isLoadingWatchList: false,
        },
      });
    } else {
      ToastAndroid.show('Failed to add to watchlist', ToastAndroid.SHORT);
      yield put({
        type: FailedToggleWatchList,
        payload: {
          isLoadingWatchList: false,
          isWatchList: !action.payload.isWatchList,
        },
      });
    }
  } catch (error) {
    recordError(crashlytics, error as Error);
    console.log('error', error);
    ToastAndroid.show('Failed to add to watchlist', ToastAndroid.SHORT);
    yield put({
      type: FailedToggleWatchList,
      payload: {
        isLoadingWatchList: false,
        isWatchList: !action.payload.isWatchList,
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
      media_id: action.payload.movieId,
      favorite: action.payload.isFavorite,
    });

    const options = {
      method: 'POST',
      headers: {
        ...apiHeader,
        'Content-Type': 'application/json',
      },
      body: body,
    };
    const response = yield fetch(url, options);

    if (response.status === 201 || 200) {
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
    recordError(crashlytics, error as Error);
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
    const urlForFavorite = `${apiEndpoint}account/21825871/favorite/movies`;
    const urlForWatchList = `${apiEndpoint}account/21825871/watchlist/movies`;
    const options = {
      method: 'GET',
      headers: apiHeader,
    };
    const responseForFavorite = yield fetch(urlForFavorite, options);
    const responseForWatchList = yield fetch(urlForWatchList, options);

    const dataForFavorite = yield responseForFavorite.json();
    const dataForWatchList = yield responseForWatchList.json();

    if (
      responseForFavorite.status == 200 &&
      responseForWatchList.status == 200
    ) {
      const isFavorite = dataForFavorite.results.some(
        (item: any) => item.id == action.payload.movieId,
      );
      const isWatchList = dataForWatchList.results.some(
        (item: any) => item.id == action.payload.movieId,
      );
      yield put({
        type: SuccessCheckForWatchListAndFavorite,
        payload: {
          isLoadingCheckDetails: false,
          isFavorite: isFavorite,
          isWatchList: isWatchList,
        },
      });
    } else {
      yield put({
        type: FailedCheckForWatchListAndFavorite,
        payload: {
          isLoadingCheckDetails: false,
          isFavorite: false,
          isWatchList: false,
        },
      });
    }
  } catch (error) {
    recordError(crashlytics, error as Error);
    console.log('error', error);
    yield put({
      type: FailedCheckForWatchListAndFavorite,
      payload: {
        isLoadingCheckDetails: false,
        isFavorite: false,
        isWatchList: false,
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

    const data = yield response.json();

    if (response.status === 200 && data.length !== 0) {
      yield put({
        type: SuccessSearchMovies,
        payload: {
          isSearchLoading: false,
          searchedMovies: data.results,
        },
      });
    } else {
      yield put({
        type: FailedSearchMovies,
        payload: {
          isSearchLoading: false,
        },
      });
    }
  } catch (error) {
    recordError(crashlytics, error as Error);
    console.log('error', error);
    yield put({
      type: FailedSearchMovies,
      payload: {
        isSearchLoading: false,
      },
    });
  }
}

export function* getFavoriteMovies(): Generator<any, void, any> {
  try {
    const url = `${apiEndpoint}account/21825871/favorite/movies`;

    const options = {
      method: 'GET',
      headers: apiHeader,
    };
    const response = yield fetch(url, options);

    const data = yield response.json();

    if (response.status == 200 && data.length !== -1) {
      yield put({
        type: SuccessFavoriteMovies,
        payload: {
          favoriteMovies: data.results,
          isLoadingFavorite: false,
        },
      });
    } else {
      yield put({
        type: FailedFavoriteMovies,
        payload: {
          favoriteMovies: [],
          isLoadingFavorite: false,
        },
      });
    }
  } catch (error) {
    recordError(crashlytics, error as Error);
    console.log('error', error);
    yield put({
      type: FailedFavoriteMovies,
      payload: {
        favoriteMovies: [],
        isLoadingFavorite: false,
      },
    });
  }
}

export function* getWatchListMovies(): Generator<any, void, any> {
  try {
    const url = `${apiEndpoint}account/21825871/watchlist/movies`;

    const options = {
      method: 'GET',
      headers: apiHeader,
    };
    const response = yield fetch(url, options);

    const data = yield response.json();

    if (response.status == 200 && data.length !== -1) {
      yield put({
        type: SuccessWatchListMovies,
        payload: {
          watchListMovies: data.results,
          isLoadingWatchList: false,
        },
      });
    } else {
      yield put({
        type: FailedWatchListMovies,
        payload: {
          watchListMovies: [],
          isLoadingWatchList: false,
        },
      });
    }
  } catch (error) {
    recordError(crashlytics, error as Error);
    console.log('error', error);
    yield put({
      type: FailedWatchListMovies,
      payload: {
        watchListMovies: [],
        isLoadingWatchList: false,
      },
    });
  }
}
