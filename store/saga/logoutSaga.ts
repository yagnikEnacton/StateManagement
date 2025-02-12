import {put} from 'redux-saga/effects';
import {facebook, google} from '../../utils/string';
import {LogOutFailed, LogOutSuccess} from '../../utils/types';
import {signOutWithGoogle} from '../../feature/sign/google/Signout';
import {signOutWithFb} from '../../feature/sign/facebook/SignOut';

export function* getUserLogOut(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  const loginType = action.payload.loginType;
  const response = yield loginType == google
    ? signOutWithGoogle()
    : signOutWithFb();
  if (response) {
    yield put({
      type: LogOutSuccess,
      payload: {isLoading: false, isSignedIn: false},
    });
  } else {
    yield put({type: LogOutFailed, payload: {isLoading: false}});
  }
}
