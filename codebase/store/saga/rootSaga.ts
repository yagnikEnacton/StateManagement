import {takeEvery} from 'redux-saga/effects';
import {LogInRequest, LogOutRequest, RequestProducts} from '../../utils/types';
import {getUserProducts} from './ProductSaga';
import {getUserLogIn} from './AuthSaga';
import {getUserLogOut} from './AuthSaga';

function* RootSaga() {
  yield takeEvery(RequestProducts, getUserProducts);
  yield takeEvery(LogInRequest, getUserLogIn);
  yield takeEvery(LogOutRequest, getUserLogOut);
}

export default RootSaga;
