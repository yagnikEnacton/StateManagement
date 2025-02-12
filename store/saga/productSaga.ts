import axios from 'axios';
import {put, select} from 'redux-saga/effects';
import {
  ReceiveEmptyProducts,
  ReceiveProducts,
  ReceiveProductsError,
} from '../../utils/types';

// Select function to get apiOffset from the Redux state

export function* getUserProducts(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const apiOffset = action.payload.apiOffset;
    const URL = `https://api.escuelajs.co/api/v1/products?limit=10&offset=${apiOffset}`;

    const response = yield axios.get(URL);

    if (response.status === 200 && response.data.length !== 0) {
      yield put({
        type: ReceiveProducts,
        payload: {userProducts: response.data, apiOffset: apiOffset + 10},
      });
    } else {
      yield put({
        type: ReceiveEmptyProducts,
        payload: {isLoading: false, isEmptyProducts: true},
      });
    }
  } catch (error) {
    yield put({type: ReceiveProductsError, payload: {isLoading: false}});
  }
}
