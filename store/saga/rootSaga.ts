import {takeEvery} from 'redux-saga/effects';
import {LogInRequest, LogOutRequest, RequestProducts} from '../../utils/types';
import {getUserProducts} from './productSaga';
import {getUserLogIn} from './loginSaga';
import {getUserLogOut} from './logoutSaga';

function* RootSaga() {
  yield takeEvery(RequestProducts, getUserProducts);
  yield takeEvery(LogInRequest, getUserLogIn);
  yield takeEvery(LogOutRequest, getUserLogOut);
}

export default RootSaga;
