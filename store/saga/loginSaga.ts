import {put} from 'redux-saga/effects';
import {signInWithGoogle} from '../../feature/sign/google/SignIn';
import {facebook, google} from '../../utils/string';
import {LogInFailed, LogInSuccess} from '../../utils/types';
import {signInWithFb} from '../../feature/sign/facebook/SignIn';

export function* getUserLogIn(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  console.log('inside login saga');
  console.log(action.payload);

  switch (action.payload.loginType) {
    case google: {
      const response = yield signInWithGoogle();
      console.log(response);
      if (response?.type) {
        yield put({
          type: LogInSuccess,
          payload: {
            loginType: google,
            isLoading: false,
            isSignedIn: true,
            user: response?.data.user.givenName,
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
