import axios from 'axios';
import {put, select} from 'redux-saga/effects';
import {
  ReceiveEmptyProducts,
  ReceiveProducts,
  ReceiveProductsError,
} from '../types';

// Select function to get apiOffset from the Redux state

export function* getUserProducts(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    // console.log('Saga: getUserProducts started');
    const apiOffset = action.payload;
    const URL = `https://api.escuelajs.co/api/v1/products?limit=10&offset=${apiOffset}`;

    // console.log('Saga: API calling...', URL);

    const response = yield axios.get(URL);

    if (response.status === 200 && response.data.length !== 0) {
      // console.log('Saga: API response received');

      yield put({
        type: ReceiveProducts,
        payload: {data: response.data, offset: apiOffset + 10},
      });
    } else {
      // console.log(response);
      // console.warn('Saga: No more products available.');
      yield put({type: ReceiveEmptyProducts});
    }
  } catch (error) {
    // console.error('Saga: Error fetching products:', error);
    yield put({type: ReceiveProductsError});
  }
}
