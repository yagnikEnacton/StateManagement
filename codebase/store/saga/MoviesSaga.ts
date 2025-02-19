import axios from 'axios';
import {put, select} from 'redux-saga/effects';
import {
  ReceiveEmptyMovies,
  ReceiveMovies,
  ReceiveMoviesError,
} from '../../utils/types';

export function* getMovies(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const url = 'https://api.themoviedb.org/3/trending/all/day';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODVmOTM0MGZjN2JkNTk2ZWRlYWE2ZWE0ZmM4MGRhYyIsIm5iZiI6MTczOTg2MzU5OS4zMjQsInN1YiI6IjY3YjQzNjJmZTVlMWE3ZWQ3Y2UxMjQyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VFw39kP9TQwNhPk2D5YZD1AbE2o1XOpUeME5-Jj-Oe8',
      },
    };
    const response = yield fetch(url, options);
    const data = yield response.json();
    console.log('data', data.results);

    if (response.status === 200 && data.length !== 0) {
      yield put({
        type: ReceiveMovies,
        payload: {Movies: data.results, isLoading: false},
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
