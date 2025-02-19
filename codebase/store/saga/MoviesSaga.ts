import axios from 'axios';
import {put, select} from 'redux-saga/effects';
import {
  ReceiveEmptyMovies,
  ReceiveMovies,
  ReceiveMoviesError,
} from '../../utils/types';
import {
  apiEndpoint,
  apiHeader,
  genresMovies,
  trendingMovies,
} from '../../utils/env';
import {useSelector} from 'react-redux';

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
    yield put({type: ReceiveMoviesError, payload: {isLoading: false}});
  }
}
