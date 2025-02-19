import {put} from 'redux-saga/effects';
import {facebook, google} from '../../utils/string';
import {
  LogInFailed,
  LogInSuccess,
  LogOutFailed,
  LogOutSuccess,
} from '../../utils/types';
import {signOutWithGoogle} from '../../feature/sign/google/Signout';
import {signOutWithFb} from '../../feature/sign/facebook/SignOut';
import {signInWithGoogle} from '../../feature/sign/google/SignIn';
import {signInWithFb} from '../../feature/sign/facebook/SignIn';

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

export function* getUserLogIn(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  switch (action.payload.loginType) {
    case google: {
      const response = yield signInWithGoogle();
      if (response?.type) {
        yield put({
          type: LogInSuccess,
          payload: {
            loginType: google,
            isLoading: false,
            isSignedIn: true,
            user: response?.data.user.givenName + ' ',
            profilePictureUrl: response?.data.user.photo,
          },
          // payload: {userInfo: response?.data, loginType: google},
        });
      } else {
        yield put({type: LogInFailed, payload: {isLoading: false}});
      }
      break;
    }
    case facebook: {
      const response = yield signInWithFb();

      if (response?.type) {
        yield put({
          type: LogInSuccess,
          payload: {
            loginType: facebook,
            isLoading: false,
            isSignedIn: true,
            user: response?.data.name,
            profilePictureUrl: response?.data.imageURL,
          },
        });
      } else {
        yield put({type: LogInFailed, payload: {isLoading: false}});
      }
      break;
    }
  }
}
