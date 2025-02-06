import {takeEvery} from 'redux-saga/effects';
import {RequestProducts} from '../types';
import {getUserProducts} from './productSaga';

function* RootSaga() {
  // console.log('RootSaga started');
  yield takeEvery(RequestProducts, getUserProducts);
}

export default RootSaga;
