import {LoginManager} from 'react-native-fbsdk-next';
import {crashlytics} from '../../../utils/env';
import {recordError} from '@react-native-firebase/crashlytics';
export const signOutWithFb = () => {
  try {
    LoginManager.logOut();

    return true;
  } catch (error) {
    recordError(crashlytics, error as Error);
    console.error(error);
  }
  return false;
};
