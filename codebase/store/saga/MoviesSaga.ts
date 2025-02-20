import {put, select} from 'redux-saga/effects';
import {
  ReceiveEmptyFilterMovies,
  ReceiveEmptyMovies,
  ReceiveFilterMovies,
  ReceiveMovies,
  ReceiveMoviesError,
  ReceiveMoviesFilterError,
} from '../../utils/types';
import {apiEndpoint, apiHeader, trendingMovies} from '../../utils/env';
import {use} from 'i18next';
import {useSelector} from 'react-redux';
import {RootState} from '../store';

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
