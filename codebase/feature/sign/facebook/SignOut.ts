import {LoginManager} from 'react-native-fbsdk-next';

export const signOutWithFb = () => {
  try {
    LoginManager.logOut();

    return true;
  } catch (error) {
    console.error(error);
  }
  return false;
};
