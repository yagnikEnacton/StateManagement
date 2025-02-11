import {
  GoogleSignin,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {initialState} from '../../../store/reducers/userReducer';

// Somewhere in your code
export const signInWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const response = await GoogleSignin.signIn();
    if (isSuccessResponse(response)) {
      console.log({userInfo: response.data});
      return {type: true, data: response.data};
    } else {
      // sign in was cancelled by user
    }
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
    if (isErrorWithCode(error)) {
      switch (error.code) {
        case statusCodes.IN_PROGRESS:
          // operation (eg. sign in) already in progress
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          // Android only, play services not available or outdated
          break;
        default:
        // some other error happened
      }
    } else {
      // an error that's not related to google sign in occurred
    }
    console.log('Sign In done');
  }
  return {type: false, data: null};
};
